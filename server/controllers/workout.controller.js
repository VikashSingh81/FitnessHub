const Workout = require("../models/Workout");

// Add Workout
exports.addWorkout = async (req,res)=>{

    try{

        const workout = await Workout.create({

            user:req.user.id,

            exercise:req.body.exercise,

            sets:req.body.sets,

            reps:req.body.reps,

            weight:req.body.weight

        });

        res.json({
            success:true,
            message:"Workout Added",
            workout
        });

    }catch(err){

        res.status(500).json({
            message:err.message
        });

    }

};

// Get Workouts

exports.getWorkouts = async(req,res)=>{

    try{

        const workouts = await Workout.find({

            user:req.user.id

        }).sort({

            createdAt:-1

        });

        res.json(workouts);

    }catch(err){

        res.status(500).json({
            message:err.message
        });

    }

};