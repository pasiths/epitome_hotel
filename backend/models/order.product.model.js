import mongoose from "mongoose";

const orderProductSchema = new mongoose.Schema({
  productID: {
    type: String,
    required: true,
  },
  productName: {
    type: String,
    required: true,
  },
  qty: {
    type: Number,
    required: true,
  },
  t_price: {
    type: Number,
    required: true,
  },
  kitchen: {
    type: String,
    required: true,
  },
  status: {
    type: Number,
    required: true,
  },
});

const OrderProduct = mongoose.model("order_products", orderProductSchema);

export default OrderProduct;
