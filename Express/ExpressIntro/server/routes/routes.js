const controller = require('../controllers/controller');
module.exports = app => {
    app.get("/api", controller.generic);
    app.get("/api/all", controller.allData);
    app.post("/api", controller.newData);
}