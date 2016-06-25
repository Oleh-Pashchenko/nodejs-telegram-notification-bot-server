module.exports = mongoose => {
    var userSchema = mongoose.Schema({
        telegramId: {
            type: String,
            unique: true
        }
    });

    return mongoose.model('User', userSchema);
};