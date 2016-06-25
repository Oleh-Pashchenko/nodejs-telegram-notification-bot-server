module.exports = (app, telegram) => {
    app.post('/message', (request, response) => {
        telegram.send(request.body.data);
        response.end();
    });
};