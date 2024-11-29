const mongoose=require('mongoose')

const mentorSchema=new mongoose.Schema({

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
    phone:{
        type:String,
    },
    age:{
        type:String,

    },
    bio:{
        type:String
    },
    profile:{
        type:String
    },


})

const mentors=mongoose.model('mentors',mentorSchema)


module.exports=mentors