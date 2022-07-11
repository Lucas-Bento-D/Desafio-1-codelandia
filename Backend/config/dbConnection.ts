const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/feed-notices')

const userSchema = new mongoose.Schema({
    date: Date,
    title: String,
    text: String
}, {collection: 'post'});

module.exports = {Mongoose: mongoose, userSchema: userSchema}