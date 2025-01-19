import User from '../models/userModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import passport from "passport";

//Register User
const registerUser = async(req,res)=>{
    try{
        const {username,email,phone,password} = req.body;
        const existingUser = await User.findOne({email})
        if(existingUser){
            if(existingUser.email === email){
                return res.status(400).json({
                    message:"email already exists"
            })
        }}else{
            const hashedPassword = await bcrypt.hash(password,10)
            const newUser = new User(
                {
                 username,
                 email,
                 phone,
                 password:hashedPassword
                })
            await newUser.save()

            res.status(201).json({
                message:"User created successfully",
                user:{email}
            })

        }

    }
    catch(e){
        console.log(e)
        res.status(500).json({
            message:"Register failed,Try again"
        })
    }
}

//Login User

const loginUser = async(req,res)=>{
    try{
        const {email,password} = req.body;
        const user = await User.findOne({email})
        if(!user){
            res.status(404).json({
                message:"email not found"
            })
            const pass = await bcrypt.compare(password,user.password);
            if(!pass){
                res.status(404).json({
                    message:"password wrong"
                })
            }
        }
        else{
            const token = jwt.sign({id:user._id,role:user.role,username:user.username,email:user.email},process.env.SECRET_KEY)
            res.status(200).json({
                message:"login Successfull",
                token:token
            })
        }
    }
    catch(e){
        console.log(e)
        res.status(500).json({
            message:"Login failed Try again"
        })
    }
}

export {registerUser,loginUser}

//Google
export const googleAuth = passport.authenticate("google", {
  scope: ["profile", "email"],
});

// Handle callback after Google authentication
export const googleCallback = passport.authenticate("google", {
  session: false,
  failureRedirect: "/",
});

// Handle successful authentication and generate JWT
export const googleSuccess =  (req, res) => {
    const user = req.user; 
    const payload = {
      id: user.id,
      username: user.username,
      email: user.email,
      role: "user"
    };
    const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '1h' })
    const frontendURL = process.env.FRONTEND_URL
    res.redirect(`${frontendURL}/auth-success?token=${token}`);
};

  
