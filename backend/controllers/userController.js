const User =require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


//user registration
exports.createUsers = async (req,res) => {
    try {
      const user = new User({
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password,
      });
      user.save();
  
      res.status(201).json({
          success:true,
          user
      })
    } catch (error) {
      res.status(400).json({
          success:false,
          message:error.message
      })
    }
  };

//view all users
exports.getAllUsers= async(req,res)=>{
    try {
        const users = await User.find()
        res.send(users).status(200)
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
          });
    }
}


//user login

exports.loginUser = async (req,res) =>{
    try {
      const {email,password} = req.body
      const userCredentials = await User.findOne({email:email})
      if (userCredentials) {
        const authenticated = bcrypt.compareSync(password,userCredentials.password)
        if (authenticated) {
          jwt.sign({email,id:userCredentials._id},"UserToken",{expiresIn:"1d"},(err,token)=>{
            if (err) {
              res.status(500).json({
                status:false,
                message:err.message
              })
            }
            else{
              res.status(200).json({
                status:"success",
               "data":userCredentials,
                "token":token
              })
            }
          })
        }
      }
    } catch (error) {
      
    }
  }

