const express=require("express");

const router=express.Router();

const auth=require("../middleware/auth.middleware");

const {

addWorkout,

getWorkouts

}=require("../controllers/workout.controller");

router.post("/",auth,addWorkout);

router.get("/",auth,getWorkouts);

module.exports=router;