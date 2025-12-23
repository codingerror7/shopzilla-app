import User from "../model/auth.model.js";
import genToken from "../config/token.config.js";
import bcrypt from "bcryptjs";

//SIGNUP
export const signUp = async (req,res) => {
    try {
        let {name,email,password} = req.body;
        let existUser = await User.findOne({email});
        if(existUser){
            return res.status(400).json({message : "User already exist"});
        }
        let hashPassword = await bcrypt.hash(password,10);
        let user = await User.create({name,email,password : hashPassword});
        let token = genToken(user._id);
        res.cookie("token",token,{
          httpOnly : true,
          secure : true,
          sameSite : "none",
          maxAge : 7*24*60*60*1000
        })
        return res.status(200).json({user,token});
    } catch (error) {
        return res.status(500).json({message : `error at ${error}`});
    }
}

//LOGIN
export const logIn = async (req,res) => {
    try {
        let {email,password} = req.body;
        let user = await User.findOne({email});
        if(!user){
            return res.status(400).json({message : "user not found.."});
        }
        let isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(400).json({message:"incorrect password"});
        }
        let token = genToken(user._id);
        res.cookie("token",token,{
            httpOnly : true,
            secure:process.env.NODE_ENVIRONMENT === "production",
            sameSite : "strict",
            maxAge : 7*24*60*60*1000
        });
        return res.status(200).json({user,token});
    } 
     catch (error) {
        return res.status(500).json({message : error});
    }
}


//LOGOUT
export const logOut = async (req,res) => {
    try {
        res.clearCookie("token");
        return res.status(200).json({message : "user logout successfully"});
    } catch (error) {
        return res.status(500).json({message : `${error}`});
    }
}