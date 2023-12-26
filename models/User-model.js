import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";

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


userSchema.pre('save', async function(){
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

export default mongoose.model('User', userSchema)