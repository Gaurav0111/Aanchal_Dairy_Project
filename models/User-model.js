import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
    name: { type: String, required: [true, 'Please provide name'], minlength: 3, maxlength: 20, trim: true, },
    email: {
        type: String, required: [true, 'Please provide email'], validate: {
            validator: validator.isEmail,
            message: "Please provide a valid email I'd",
        }, unique: true,
    },
    password: { type: String, required: [true, 'Please provide password'], minlength: 6, unique: true, },
    lastName: { type: String, mixlength: 20, default: 'lastName', trim: true, },
    location: { type: String, mixlength: 20, required: [true, 'Please provide password'], default: 'my city', trim: true, },
})

export default mongoose.model('User', userSchema)