const mongoose = require('mongoose');
const { NestedSchema } = require('./nested.models');



const TestSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name must be included"],
        minlength: [2, "Must be at least 2 characters"]
    },
    email: {
        type: String,
        required: [true, "Email is required."]
    }, 
    reviews: [NestedSchema]
}, { timestamps: true });

const Test = mongoose.model("Test", TestSchema);

module.exports = {
    Test
}

// // for multiple models in multiple files
// const Test1 = require('./test1.model');
// const Test2 = require('./test2.model');

// module.exports = {
//     Test1,
//     Test2
// }