const express = require("express")
const app = express()
const port = 5000
const tasks = require("./routes/tasks")
const connectDB = require("./db/connect")

//middleware
app.use(express.json())

//routes
app.get("/", (req,res) => {
    res.send("Task Manager App")
})

app.use("/api/v1/tasks", tasks)

const start = async() => {
    try {
        await connectDB()
        app.listen(port, console.log(`Server is listening on port ${port}`))
    } catch (error) {
        console.log(error)
    }
}

start()