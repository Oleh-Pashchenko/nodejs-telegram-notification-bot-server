module.exports = (app, telegram) => {
    app.post('/message', (request, response) => {
        telegram.send(request.body.data)
            .then(
                resolve => {
                    response.end();
                },
                reject => {
                    response.status(498);
                    response.json({message:'Invalid token', status: 498});
                }
            );
    });
};