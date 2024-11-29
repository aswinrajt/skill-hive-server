const mentors = require('../models/mentorModel')
// const users=require('../models/userModel')
const jwt=require('jsonwebtoken')

exports.mentorRegistration=async(req,res)=>{
    try{
        console.log(req.body)
    const{email,username,password}=req.body
    if(!email||!username||!password){

        res.status(406).json('Invalid Data')

    }
    else{
        const newMentor=new mentors({
            email,username,password
        })
        await newMentor.save()
        res.status(200).json(newMentor)
    }
    
    }
    catch(err){
        console.log(err)
        res.status(400).json(err)
    }
}


exports.mentorLogin=async(req,res)=>{

    try{
        const{email,password}=req.body
    if(!email || !password){
        res.status(406).json("Invalid Data")

    }
    else{
        const existingMentor=await mentors.findOne({email,password})
        if(existingMentor){
            const token=jwt.sign({userId:existingMentor._id},process.env.SECRET_KEY)
            res.status(200).json({token,username:existingMentor.username})

        }
        else{
            res.status(400).json("Invalid email/password")

        }
    }

    }
    catch(err){
        console.log(err)
        res.status(400).json(err)
    }

    

}