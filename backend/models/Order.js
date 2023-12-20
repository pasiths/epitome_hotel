import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  order_id: {
    type: String,
    require: true,
  },

  location: {
    type: String,
    require: true,
  },
  item: {
    type: String,
    require: true,
  },
  status: {
    type: String,
    require: true,
  },
});

export default mongoose.model("Order", OrderSchema);
