const mongoose = require('mongoose');

const NestedSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required."]
    },
    number: {
        type: Number,
        required: [true, "Must add a number"],
        min: [1, "Must be at least 1"],
        max: [5, "Cannot be larger than 5"]
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: { 
        type: Date,
        default: Date.now()
    }
})

module.exports = {
    NestedSchema
};