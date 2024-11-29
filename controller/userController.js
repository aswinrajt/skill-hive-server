const users=require('../models/userModel')
const jwt=require('jsonwebtoken')

exports.userRegistration=async(req,res)=>{
    try{
        console.log(req.body)
    const{email,username,password}=req.body
    if(!email||!username||!password){

        res.status(406).json('Invalid Data')

    }
    else{
        const newUser=new users({
            email,username,password,bio:"",profile:""
        })
        await newUser.save()
        res.status(200).json(newUser)
    }
    
    }
    catch(err){
        console.log(err)
        res.status(400).json(err)
    }
}


exports.userLogin=async(req,res)=>{

    try{
        const{email,password}=req.body
    if(!email || !password){
        res.status(406).json("Invalid Data")

    }
    else{
        const existingUser=await users.findOne({email,password})
        if(existingUser){
            const token=jwt.sign({userId:existingUser._id},process.env.SECRET_KEY)
            res.status(200).json({token,username:existingUser.username,bio:existingUser.bio,profile:existingUser.profile})

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



exports.profileUpdate=async(req,res)=>{
    try{
        const userId=req.payload
        if(req.file){
            var profile=req.file.filename
            var {username,github,linkdin}=req.body
        }
        else{
            var {username,github,linkdin,profile}=req.body
        }

        const existingProfile=await users.findOne({_id:userId})
        existingProfile.username=username
        existingProfile.github=github
        existingProfile.linkdin=linkdin
        existingProfile.profile=profile
        await existingProfile.save()
        res.status(200).json("Profile Updated!!")
    }
    catch(err){
        console.log(err)
        res.status(400).json(err)
    }
}