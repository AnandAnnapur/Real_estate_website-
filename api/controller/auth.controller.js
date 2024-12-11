import User from "../models/user.model.js";
import bcrypt from 'bcryptjs';


// Example usage



export const signup = async(req,res) =>{
    const{username,email,password} = req.body;
    
    const hashsedPassword=bcrypt.hashSync(password,10);
    const newUser=new User({username,email,password:hashsedPassword});
    
    try{
        await newUser.save();
        res.status(201).json('message recieved');
    }catch(error){
        res.status(500).json(error)
    }
    

};