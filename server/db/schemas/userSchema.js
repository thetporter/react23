import mongoose from "mongoose";

const User = new mongoose.Schema({
    bio: {type: String, default: "This user hasn't decided what to tell here yet."},
    login: {type: String, required: true, index: true, unique: true},
    password: {type: String, required: true},
    admin: {type: Boolean, default: false}
});

const model = mongoose.model('User', User);

export default model;