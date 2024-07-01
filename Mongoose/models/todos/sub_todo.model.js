const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define SubTodo schema
const SubTodoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    todo: {
        type: Schema.Types.ObjectId,
        ref: 'Todo',
        required: true
    }
}, {
    timestamps: true
});

// Create and export SubTodo model
const SubTodo = mongoose.model('SubTodo', SubTodoSchema);
module.exports = SubTodo;
