module.exports = (app, telegram) => {
    app.post('/message', (request, response) => {
        if (undefined == request.body && undefined == request.body.data) {
            if (request.body.data.token == undefined || request.body.message == undefined) {
                response.status(400);
                response.json({
                    message: 'Bad request, invalid token or message',
                    status: 400
                });
            }
            telegram.send(request.body.data)
                .then(
                    resolve => {
                        response.end();
                    },
                    reject => {
                        response.status(498);
                        response.json({
                            message: 'Invalid token',
                            status: 498
                        });
                    }
                );
        } else {
            response.status(400);
            response.json({
                message: 'Bad request',
                status: 400
            });
        }
    });
};