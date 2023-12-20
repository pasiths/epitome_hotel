import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema({
  item_id: {
    type: String,
    require: true,
  },
  item_name: {
    type: String,
    require: true,
  },

  description: {
    type: String,
    require: true,
  },
  category: {
    type: String,
    require: true,
  },
  location: {
    type: String,
    require: true,
  },
  photos: {
    type: [String],
  },
  status: {
    type: String,
    require: true,
  },
});

export default mongoose.model("Item", ItemSchema);
