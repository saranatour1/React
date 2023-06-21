const PlayersController = require('../controllers/players.controller');
 
module.exports = app => {
    app.get('/api/players',PlayersController.findAllPlayers );
    app.get('/api/players/:id', PlayersController.findOneSinglePlayer);
    app.put('/api/players/:id/edit', PlayersController.updatePlayer);
    app.delete('/api/players/:id', PlayersController.deletePlayer);
    app.post('/api/players', PlayersController.createNewPlayer);
}
