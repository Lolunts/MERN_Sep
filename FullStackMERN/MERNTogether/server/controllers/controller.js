const { Test } = require('../models/models');

module.exports = {
    // C
    create: (req, res) => {
        console.log(req.body);
        Test.create(req.body)
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    // R
    getAll: (req, res) => {
        Test.find({})
            .then(data => {
                if(data.length > 0){
                    res.json(data);
                } else {
                    res.status(500).json({ error: "No data in the database" });
                }
            })
            .catch( err => res.json(err));
    },
    getOne: (req,res) => {
        Test.findOne({ _id: req.params.id })
            .then(data => res.json(data))
            .catch(err => {
                if(err.kind == "ObjectId"){
                    res.json({message: "An object with that ID does not exist"});
                } else {
                    res.json(err);
                }
            });
    },
    // U
    updateOne: (req, res) => {
        Test.findOneAndUpdate({ _id: req.params.id }, req.body, { runValidators: true, useFindAndModify: false})
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    // D
    deleteOne: (req,res) => {
        Test.findOneAndDelete({ _id: req.params.id })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    }
}