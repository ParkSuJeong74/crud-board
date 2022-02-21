// schema 생성 module
// import mongoose, shortId schema
const { Schema } = require('mongoose');
const shortId = require('./types/short-id');

// creating PostSchema
const PostSchema = new Schema({
    shortId,
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        default: '작성자',
    },
}, {
    timestamp: true, //작성 시간, 수정 시간 자동 기록
});

// exporting PostSchema
module.exports=PostSchema;