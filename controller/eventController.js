const events = require('../models/eventModel')


exports.addEvent = async (req,res)=> {
    try{
        const {title , date , desc} =req.body
        const userId =req.payload
        if(!title | !date | !desc){
            res.status(400).json("Enter Valid Data!")
        }
        else{
            const newEvent = new events({
                title,date,desc,userId
            })
            await newEvent.save()
            res.status(200).json(newEvent)
        }
    }
    catch(err){
        console.log(err)
        res.status(400).json(err)
    }
}


exports.geteventList = async (req,res) =>{
    try{
        const userId = req.payload
        const eventList = await events.find({userId})
        res.status(200).json(eventList)
    }
    catch(err){
        console.log(err)
        res.status(400).json(err)
    }
}


exports.getalleventList = async (req,res) =>{
    try{
        const eventList = await events.find()
        res.status(200).json(eventList)
    }
    catch(err){
        console.log(err)
        res.status(400).json(err)
    }
}



exports.deleteEvent=async(req,res)=>{
    try{
      const {id}=req.params
      const result=await events.findOneAndDelete({_id:id})
      res.status(200).json(result)
    }
    catch(err){
      console.log(err)
      res.status(400).json(err)
    }
  }
  


  exports.editEvent=async(req,res)=>{
    try{
      const {id}=req.params
        var{title,date,desc}=req.body
      
      const userId = req.payload
      if(!title || !desc || !date){
        res.status(406).json("Invalid Data")
      }
      else{
        const existing = await events.findOne({_id:id})
        existing.title =title
        existing.date =date
        existing.desc =desc
      
        await existing.save()
        res.status(200).json(existing)
      }
    }
    catch(err){
      console.log(err)
      res.status(400).json(err)
    }
  }