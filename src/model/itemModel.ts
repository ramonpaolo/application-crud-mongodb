import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  quantity: {
    type: Number,
  },
  _id: {
    type: mongoose.Types.ObjectId,
  },
});

const itemModel = mongoose.model('item', itemSchema);

export default itemModel;
