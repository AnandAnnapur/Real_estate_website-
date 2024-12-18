import User from "../models/user.model.js";
import bcrypt from 'bcryptjs';
import { errorHandler } from "../utils/error.js";


// Example usage



export const signup = async(req,res,next) =>{
    const{username,email,password} = req.body;
    
    const hashsedPassword=bcrypt.hashSync(password,10);
    const newUser=new User({username,email,password:hashsedPassword});
    
    try{
        await newUser.save();
        res.status(201).json('message recieved');
    }catch(error){
        next(error);
    }
    

};