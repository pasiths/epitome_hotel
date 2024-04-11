import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      default: [],
    },
  ],
  total: {
    type: Number,
    required: true,
  },
  paid: {
    type: Number,
    required: true,
  },
  balance: {
    type: Number,
    required: true,
  },
  addedUser: {
    type: String,
    required: true,
  },
  status: {
    type: Number,
    required: true,
  },
});

const Orders = mongoose.model("Orders", orderSchema);

export default Orders;
