const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({

    email:{
        type:String,
        required:true,
        unique:true
    },
    username:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    bio:{
        type:String
    },
    profile:{
        type:String
    },

})

const users=mongoose.model('users',userSchema)


module.exports=users