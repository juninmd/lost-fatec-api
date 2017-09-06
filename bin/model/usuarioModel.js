module.exports = (mongoose) => {
    return mongoose.model('Usuario',
        {
            name: String
        });
} 