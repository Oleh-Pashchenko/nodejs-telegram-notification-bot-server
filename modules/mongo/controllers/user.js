module.exports = mongoose => {
    let user = require('../models/user')(mongoose);
    return {
        Get: id => {
            return new Promise(function(resolve, reject) {
                user.findOne({
                    _id: id
                }, function(error, user) {
                    if (error) {
                        reject(error);
                    }

                    resolve(user);
                });
            });
        },
        Set: telegramId => {
            return new Promise(function(resolve, reject) {
                var user = user({
                    telegramId: telegramId
                });

                user.save(function(error, document) {
                    if (error != undefined && error.code != 11000) {
                        reject(error);
                    }
                    resolve(document);
                });
            });
        }
    };
};