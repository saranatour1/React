const gamesController = require('../controllers/games.controller');
 
module.exports = app => {
    app.get('/api/games',gamesController.findAllGames );
    app.get('/api/games/:id', gamesController.findOneSingleGame);
    app.put('/api/games/:id/edit', gamesController.updateGame);
    // app.delete('/api/games/:id', gamesController.);
    app.post('/api/games', gamesController.createNewGame);
}
