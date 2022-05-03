const Post = require("../model/post");

const getPost = async (req, res) => {
  const { name } = req.body;
  const user = await Post.findOne({ name });
  if (!user) {
    console.log(`${name} boyle bir istifadeci tapilmadi`);
  }
  res.status(200).json({
    success: true,
    data: user,
  });
};

const addPost = async (req, res) => {
  const { name, description } = req.body;
  const newPost = await Post.create({
    name,
    description,
  });
  newPost.save();
  res.status(200).json({
    success: true,
    data: newPost,
  });
};
//
const putPost = async (req, res) => {
  const { name, description } = req.body;
  const { id } = req.params;
  const post = await Post.findByIdAndUpdate(id, {
    name,
    description,
  });
  post.save();
  return res.status(200).json({
    success: true,
    message: "Ugurla Yenilendi",
  });
};
//
const deletePost = async (req, res) => {
  const { id } = req.params;
  await Post.findByIdAndDelete(id);
  res.json({
    success: true,
    message: "Ugurla Silindi",
  });
};

module.exports = {
  getPost,
  addPost,
  putPost,
  deletePost,
};
