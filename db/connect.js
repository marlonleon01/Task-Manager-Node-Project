const connectionString = "mongodb+srv://marlonleon2025:Mayson0126@nodeexpressprojects.haz39h0.mongodb.net/task-manager?retryWrites=true&w=majority"
const mongoose = require("mongoose")

const connectDB = (url) => {
    return mongoose.connect(connectionString, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    })
}

module.exports = connectDB