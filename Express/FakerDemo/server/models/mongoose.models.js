const mongoose = require('mongoose');

const SecondSchema = new mongoose.Schema({
    name: String
})

const Second = mongoose.model("Second", SecondSchema);

const TestSchema = new mongoose.Schema({
    name: {
        type: String,
        // If we want custom error messages: 
        required: [true, "You must fill out this field."],
        minlength: [2, "Please enter at least 2 characters."]
    },
    age: {
        type: Number,
        required: true,
        min: 13
    },
    email: { 
        type: String,
        required: true,
        validate: {
            validator: value => {
                // code for determining your validity
                // run regex check
                // return result of regex check
                // return some boolean based on that code

                let re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
                console.log(value);
                return re.test(value);
            },
            message: "Invalid email address."
        }
    }
}, { timestamps: true });

const Test = mongoose.model("Test", TestSchema);

module.exports = {
    Test,
    Second
}