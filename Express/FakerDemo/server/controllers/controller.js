const { Team, Player } = require('../models/models');


module.exports = {
    getAll: (req,res) => {
        let response = [];
        for(let i = 0; i < 10; i++) {
            response.push(new Team());
        }
        res.json(response);
    }
}