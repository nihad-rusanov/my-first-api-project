const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Post = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
    minlength: 10,
  },
  createAt: {
    type: Date,
    default: Date.now(),
    },
});

module.exports = mongoose.model("Post", Post);
