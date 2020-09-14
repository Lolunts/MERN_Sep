const controller = require('../controllers/controller');

module.exports = app => {
    // This is just for the faker demo
    app.get('/api/all', controller.getAll);

    // These are for full mongoose action
    // C
    app.post('/api/test', controller.createTest);
    // R
    app.get('/api/test', controller.findAllTest);
    app.get('/api/test/:id', controller.findOneTest);
    // U
    app.patch('/api/test/:id', controller.updateOneTest);
    // D
    app.delete('/api/test/:id', controller.deleteOneTest);

    app.get('/api/test/onlyname/please', controller.onlyName);
}