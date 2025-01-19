import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    phone:{
        type:String,
        default:'+91'
    },
    password:{
        type:String,
    },
    role:{
        type:String,
        enum:['admin','user'],
        default:'user'
    },
    googleId:{
        type:String
    }
},{timestamps:true})

const User = mongoose.model('User',UserSchema);
export default User;
