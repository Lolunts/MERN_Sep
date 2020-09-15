const controller = require('../controllers/controller');

module.exports = app => {
    // C
    app.post('/api/test', controller.create);
    // R
    app.get('/api/test', controller.getAll);
    app.get('/api/test/:id', controller.getOne);
    app.get('/api/reviews/:rId', controller.getOneReview);
    // U
    app.patch('/api/test/:id', controller.updateOne);
    app.patch('/api/test/:id/review', controller.createReview);
    app.patch('/api/test/:id/review/:rId', controller.deleteReview);
    app.patch('/api/review/:rId/update', controller.updateReview);
    // D
    app.delete('/api/test/:id', controller.deleteOne);
}