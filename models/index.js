// importing mongoose and PostSchema
const mongoose = require('mongoose');
const PostSchema = require('./schema/post');

// exporting
exports.Post = mongoose.model('Post', PostSchema);