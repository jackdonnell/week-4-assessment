const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())

app.use(express.json())

const { getCompliment, getFortune, postGrade, changeGrade } = require('./controller')

app.get("/api/compliment", getCompliment)
app.get('/api/fortune', getFortune)
app.post("/api/postInput", postGrade)
app.put("/api/putInput/:id", changeGrade)
app.delete("/api/grade/:id", deleteGrade)

app.listen(4001, () => console.log("Server running on 4001"))