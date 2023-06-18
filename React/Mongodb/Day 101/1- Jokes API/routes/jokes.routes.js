const JokesController = require('../controllers/jokes.controller');
 
module.exports = app => {
    app.get('/api/jokes', JokesController.findAllJokes);
    app.get('/api/jokes/:id', JokesController.findOneSingleJoke);
    app.get('/api/jokes/random', JokesController.getRandom);
    app.put('/api/jokes/:id', JokesController.updateExistingJoke);
    app.post('/api/jokes', JokesController.createNewJoke);
    app.delete('/api/jokes/:id', JokesController.deleteAnExistingJoke);
}
