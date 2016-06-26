module.exports = mongoose => {
    var user = require('../models/user')(mongoose);
    return {
        GetById: id => {
            return new Promise((resolve, reject) => {
                user.findOne({
                    _id: id
                }, (error, document) => {
                    if (error) {
                        reject(error);
                    }
                    if (undefined != document) {
                        resolve(document);
                    } else {
                        reject();
                    }
                });
            });
        },
        GetByTelegramId: id => {
            return new Promise((resolve, reject) => {
                user.findOne({
                    telegramId: id
                }, (error, document) => {
                    if (error) {
                        reject(error);
                    }
                    if (undefined != document) {
                        resolve(document);
                    } else {
                        resolve(true);
                    }
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