const mongoose = require("mongoose")

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, "must provide name"],
        trim: true,
        maxlength: [20, "name cannot be more than 20 characters"]
    },
    complete: Boolean
})

module.exports = mongoose.model("Task", TaskSchema)