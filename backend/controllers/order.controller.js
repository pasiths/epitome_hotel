import OrderProduct from "../models/order.product.model.js";
import Orders from "../models/order.model.js";
import loginUserId from "../utils/loginUserId.js";

export const sendOrder = async (req, res) => {
  try {
    const { location, products, total, paid, balance } = req.body;
    const cdt = new Date();
    const date =
      cdt.toISOString().slice(0, 10) + " " + cdt.toTimeString().slice(0, 8);
    let addedUser = loginUserId(req);
    let status = 1;
    if (
      !date ||
      !location ||
      !products ||
      !total ||
      !paid ||
      !balance ||
      !addedUser ||
      !status
    ) {
      return res.status(400).json({ error: "Missing required fields" });
    }
    const order = await Orders.create({
      date,
      location,
      total,
      paid,
      balance,
      addedUser,
      status: status,
    });
    if (!order) {
      return res.status(400).json({ error: "Failed to create order" });
    }
    const orderProducts = [];
    for (const product of products) {
      const productID = product.id;
      const productName = product.name;
      const qty = product.qty;
      const t_price = product.total;
      const kitchen = product.kitchen;
      if (
        !productID ||
        !productName ||
        !qty ||
        !t_price ||
        !kitchen ||
        !status
      ) {
        await Orders.findByIdAndDelete(order._id);
        return res
          .status(400)
          .json({ error: "Failed to create order product" });
      }
      const orderProduct = await OrderProduct.create({
        productID,
        productName,
        qty,
        t_price,
        kitchen,
        status,
      });
      if (!orderProduct) {
        await Orders.findByIdAndDelete(order._id);
        return res
          .status(400)
          .json({ error: "Failed to create order product" });
      }
      order.products.push(orderProduct._id);
      orderProducts.push(orderProduct);
    }
    await Promise.all([
      order.save(),
      ...orderProducts.map((product) => product.save()),
    ]);
    res.status(201).json({ message: "Order sent successfully", order });
  } catch (error) {
    console.error("Error in sendOrder controller: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getOrders = async (req, res) => {
  try {
    const orders = await Orders.find({ status: { $ne: 0 } }).select();
    if (!orders || orders.length === 0) {
      return res.status(400).json({ error: "No orders found" });
    }
    const expandedOrders = [];
    for (const order of orders) {
      const { _id, date, products, total, paid, balance, addedUser } = order;
      const expandedProducts = [];
      for (const productId of products) {
        const product = await OrderProduct.findById(productId);
        if (product) {
          expandedProducts.push({
            id: product.id,
            name: product.productName,
            qty: product.qty,
            price: product.t_price,
          });
        } else {
          expandedProducts.push(null);
        }
      }
      expandedOrders.push({
        orderId: _id,
        date,
        products: expandedProducts,
        total,
        paid,
        balance,
        addedUser,
      });
    }
    res.status(200).json(expandedOrders);
  } catch (error) {
    console.error("Error in getOrders controller: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getOrder = async (req, res) => {
  try {
    let _id = req.params.id;
    const orders = await Orders.find({ _id, status: { $ne: 0 } });
    if (!orders || orders.length === 0) {
      return res.status(400).json({ error: "No orders found" });
    }
    const expandedOrders = [];
    for (const order of orders) {
      const { _id, date, products, total, paid, balance, addedUser } = order;
      const expandedProducts = [];
      for (const productId of products) {
        const product = await OrderProduct.findById(productId);
        if (product) {
          expandedProducts.push({
            id: product.id,
            name: product.productName,
            qty: product.qty,
            price: product.t_price,
          });
        } else {
          expandedProducts.push(null);
        }
      }
      expandedOrders.push({
        orderId: _id,
        date,
        products: expandedProducts,
        total,
        paid,
        balance,
        addedUser,
      });
    }
    res.status(200).json(expandedOrders);
  } catch (error) {
    console.error("Error in getOrder controller: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getOrderProduct = async (req, res) => {
  try {
    let kitchen = req.params.kitchen;
    const orderProduct = await OrderProduct.find({
      kitchen,
      status: { $ne: 0 },
    });
    if (!orderProduct || orderProduct.length === 0) {
      return res.status(400).json({ error: "No order products found" });
    }
    res.status(200).json(orderProduct);
  } catch (error) {
    console.error("Error in getOrderProduct controller: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const acceptOrder = async (req, res) => {
  try {
    const _id = req.params.id;
    const updatedOrderProduct = await OrderProduct.findOneAndUpdate(
      { _id, status: { $ne: 0 } },
      { status: 2 },
      { new: true }
    );
    if (!updatedOrderProduct) {
      return res
        .status(404)
        .json({ error: "Order product not found or cannot be accepted" });
    }
    res.status(200).json({ message: "Order accepted successfully" });
  } catch (error) {
    console.error("Error in acceptOrder controller: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const deliveredOrder = async (req, res) => {
  try {
    const _id = req.params.id;
    const updatedOrderProduct = await OrderProduct.findOneAndUpdate(
      { _id, status: { $nin: [0, 1] } },
      { status: 3 },
      { new: true }
    );
    if (!updatedOrderProduct) {
      return res.status(404).json({
        error: "Order product not found or cannot be marked as delivered",
      });
    }
    res.status(200).json({ message: "Order marked as delivered successfully" });
  } catch (error) {
    console.error("Error in deliveredOrder controller: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
