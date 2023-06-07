import mongoose, { Schema } from "mongoose";

const Post = new mongoose.Schema({
    title: {type: String, default: "Title", required: true, length: 128},
    min_desc: {type: String, default: "Small description", length: 512},
    desc: {type: String, default: "Full description", required: true},
    author: {type: String, default: "Guest", required: true},
    date_cr: {type: Date, default: Date.now, required: true},
    date_up: {type: Date, default: Date.now, required: true}
});

const model = mongoose.model('Post', Post);

export default model;