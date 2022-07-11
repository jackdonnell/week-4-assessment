const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())

app.use(express.json())

const { getCompliment, getFortune } = require('./controller')

app.get("/api/compliment", getCompliment)
app.get('/api/fortune', getFortune)
// app.post("/api/postInput", postGrade)
// app.put("/api/", changeGrade)
// app.delete("/api/grade", deleteGrade)





// const express = require('express')
// const cors = require('cors')

// const app = express()

// app.use(express.json())
// app.use(cors())

// const {getCompliment, getFortune} = require('./controller')
// // const {getCompliment, getFortune, postGrade, changeGrade, deleteGrade} = require('./controller')

// app.get('/api/compliment', getCompliment)
// app.get('/api/fortune', getFortune)
// app.post('/api', postGrade)
// app.put('/api/grade/:id', changeGrade)
// app.delete('/api/grade/:id', deleteGrade)


app.listen(4000, () => console.log("Server running on 4000"))
