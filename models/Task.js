const mongoose = require('mongoose');

const TaskSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name Task is Required...'],
        trim: true,
        maxlength: [20, 'Max Characters: 20'],
        minlength: [3, 'Min Characters: 3']
    },
    completed: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Task', TaskSchema);