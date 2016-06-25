module.exports = function(app) {
        app.post('/message', function(request, response) {
        response.end();
    });
};