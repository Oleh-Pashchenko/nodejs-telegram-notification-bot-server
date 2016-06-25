module.exports = mongoose => {
    var user = require('../models/user')(mongoose);
    return {
        Get: id => {
            return new Promise((resolve, reject) => {
                user.findOne({
                    _id: id
                }, (error, user) => {
                    if (error) {
                        reject(error);
                    }
                    resolve(user);
                });
            });
        },
        Set: telegramId => {
            return new Promise((resolve, reject) => {
                var newUser = user({
                    telegramId: telegramId
                });
                newUser.save((error, document) => {
                    if (error != undefined) {
                        if (error.code == 11000) {
                            resolve(true);
                        }
                        reject(error);
                    }
                    if (undefined != document) {
                        resolve(document.id);
                    }
                });
            });
        }
    };
};