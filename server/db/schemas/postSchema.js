import mongoose from "mongoose";

const Post = new mongoose.Schema({
    id: {type: Number, default: Math.random()},
    title: {type: String, default: "Title"},
    min_desc: {type: String, default: "Small description"},
    desc: {type: String, default: "Full description"},
    date: {type: Date, default: Date.now}
});

const model = mongoose.model('Post', Post);

export default model;