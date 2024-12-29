import { userModel } from "../models/usermodel.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import validator from "validator"


//register user

const createToken = (id) =>{
    return jwt.sign({id},process.env.JWT_SECRET)
}

const registerUser = async(req,res)=>{
  const {name,email,password} = req.body;
  try {
    const exist = await userModel.findOne({email})
    if (exist) {
        return res.json({success:false,message:"User already exist"})
    }
    //validating email and pass
    if (!validator.isEmail(email)) {
        return res.json({success:false,message:"please enter a valid email"})
    }
    if (password.length<8) {
        return res.json({success:false,message:"please enter 8 digit strong password"})
    }
    //hashing the pass 
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password,salt)

    const newUser = new userModel({
        name:name,
        email:email,
        password:hashedPassword,
    })
    const user = await newUser.save()
    const token = createToken(user._id)
    res.json({success:true,token})
  } catch (error) {
    console.log(error);
    res.json({success:false,message:"Error"})
  }
}

//login user
const loginUser = async(req,res)=>{
    const {email,password} = req.body;
    try {
        const user = await userModel.findOne({email})
        if (!user) {
            return res.json({success:false,message:"user does not exist"})
        }
        const isMatch = await bcrypt.compare(password,user.password)
        if (!isMatch) {
            return res.json({success:false,message:"Invalid credentials"})
        }
        const token = createToken(user._id)
        res.json({success:true,token})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
        
    }
}


export {loginUser,registerUser}