import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        default: '/images/defaultAvatar.png'
    },

})


export const User = new mongose.model()