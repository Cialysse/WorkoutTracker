const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const workoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date
    },
    exercise: [
        {
            type: {
                type: String, 
                trim: true,
                required: "enter your exercise"
            },
            name: {
                type: String,
                trim: true,
                required: "Enter your exercise name"
            },
            duration: {
                type: Number,
                required: "Enter your exercise duration"
            },
            weigth: {
                type: Number
            },
            reps: {
                type: Number,
            },
            sets: {
                type: Number,
            },
            distance: {
                type: Number
            }
        }
    ]

})
const Workout = mongoose.model("Workout", workoutSchema)
module.exports = Workout 