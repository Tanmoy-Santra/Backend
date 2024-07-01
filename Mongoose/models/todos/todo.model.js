
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define Todo schema
const TodoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    dueDate: {
        type: Date
    },
    completed: {
        type: Boolean,
        default: false
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    subTodos: [{
        type: Schema.Types.ObjectId,
        ref: 'SubTodo'
    }]
}, {
    timestamps: true
});

// Create and export Todo model
const Todo = mongoose.model('Todo', TodoSchema);
module.exports = Todo;
