import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    fullname: {
        type: String,
        required: true,
        
    },
    password: {
        type: String,
        required: true,
        minlenght: 6
    },
    // friends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    // messages: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Message' }],
    gender :{
        type: String,
        enum: ['male', 'female', 'other']
    }
    ,
    profilePic:{
        type: String,
        default: ''
    }
})

const User = mongoose.model('User', userSchema)

export default User;