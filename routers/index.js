const express = require('express')
const app = express.Router()
const {getPost,addPost,putPost,deletePost} = require('../control/post')


app.get('/post',getPost)
app.post('/addpost',addPost)
app.put('/:id/update',putPost)
app.delete('/:id/delete',deletePost)


module.exports = app
