const mongoose = require('mongoose');

const Schema = mongoose.Schema; 
const weightSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date
    },
    weigth: [
        { 
            type:{
                type: String,
                trim: true,
                required: "enter your weight"
            }, 
            
        }
    ]
})
const Weight = mongoose.model('Weight', weightSchema);