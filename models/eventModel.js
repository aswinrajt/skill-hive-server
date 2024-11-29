const mongoose=require('mongoose')

const eventSchema=new mongoose.Schema({

    title:{
        type:String,
        required:true,
        unique:true
    },
    date:{
        type:String,
        required:true,
    },

    desc:{
        type:String,
        required:true,
    },
    userId:{
        type:String,
        required:true
    }


})

const events=mongoose.model('events',eventSchema)


module.exports=events