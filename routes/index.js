module.exports = app => {
        app.post('/message', (request, response) => {
        response.end();
    });
};