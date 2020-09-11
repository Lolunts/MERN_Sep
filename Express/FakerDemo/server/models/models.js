const faker = require('faker');

class Team {
    constructor(){
        this._id = faker.random.uuid();
        this.city = faker.address.city();
        this.name = faker.company.bsNoun();
        this.sport = faker.commerce.productName();
        this.players = [];

        for(let i = 0; i < 10; i++) {
            this.players.push(new Player());
        }
    }
}

class Player {
    constructor(){
        this.name = faker.name.firstName();
    }
}

module.exports = {
    Team,
    Player
};