

const express=require('express')

// const taskController=require('../controller/taskController')
const eventController=require('../controller/eventController')
const mentorController=require('../controller/mentorController')
const userController=require('../controller/userController')
const jwtmiddle=require('../Middleware/jwtMiddleware')
const router=express.Router()

router.post('/menreg',mentorController.mentorRegistration)
router.post('/menlog',mentorController.mentorLogin)

router.post('/reg',userController.userRegistration)
router.post('/log',userController.userLogin)

router.post('/addevent',jwtmiddle,eventController.addEvent)
router.get('/getevents',jwtmiddle,eventController.geteventList)
router.get('/getevents',jwtmiddle,eventController.geteventList)
router.get('/getallevents',jwtmiddle,eventController.getalleventList)
// router.get('/getbyid/:tid',jwtmiddle,taskController.getTaskById)
router.delete('/deleteevent/:id',jwtmiddle,eventController.deleteEvent)
router.put('/updateevent/:id',jwtmiddle,eventController.editEvent)



module.exports=router