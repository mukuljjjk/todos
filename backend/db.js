const mongoose = require('mongoose')
const url = 'mongodb+srv://mukulkumar9771567472:Pbis7D2wUCtMMKDf@cluster0.haxd9wy.mongodb.net/';

async function connectToDatabase() {
    try {
        await mongoose.connect(url);
        console.log('MongoDB connected');
    } catch (err) {
        console.error(err);
    }
}

connectToDatabase();

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);
module.exports = {
    todo
}