const AuthorsController = require('../controllers/authors.controller');
 
module.exports = app => {
    app.get('/api/authors', AuthorsController.findAllAuthors);
    app.get('/api/authors/:id', AuthorsController.findOneSingleAuthor);
    app.put('/api/authors/:id/edit', AuthorsController.updateAuthor);
    app.delete('/api/authors/:id', AuthorsController.deleteAuthor);
    app.post('/api/authors', AuthorsController.createNewAuthor);
}
