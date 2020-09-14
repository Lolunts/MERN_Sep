const { Team, Player } = require('../models/models');
const {Test, Second} = require('../models/mongoose.models');

module.exports = {
    getAll: (req,res) => {
        let response = [];
        for(let i = 0; i < 10; i++) {
            response.push(new Team());
        }
        res.json(response);
    },
    createTest: (req,res) => {
        // shell: db.faker_db.insert({ name: "Cody", age: 29, email: "sthaller@codingdojo.com" })
        Test.create(req.body)
            .then(data => {
                res.json(data);
            })
            .catch(err => res.json(err));
    },
    findAllTest: (req,res) => {
        Test.find({})
            .then(data => {
                res.json(data);
            })
            .catch(err => res.json(err));
    },
    findOneTest: (req,res) => {
        Test.findOne({ _id: req.params.id })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    updateOneTest: (req,res) => {
        Test.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { useFindAndModify: false, runValidators: true })
            .then(data => {
                // execute other code here
                res.json(data)
            })
            .catch(err => res.json(err));
    },
    deleteOneTest: (req,res) => {
        Test.findOneAndDelete({_id: req.params.id})
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    onlyName: (req,res) => {
        // If you do not want to include a field in the results
        Test.find({}, { name: 0 })
            .then(data => {
                res.json(data)
            })
            .catch(err => res.json(err));
    }
    // createSecond: (req,res) => {
    //     Second.create(req.body)
    //         .tehn()
    // }
}