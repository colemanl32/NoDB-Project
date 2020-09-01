const express = require('express')
const app = express()
const courseCtrl = require('./controllers/coursesController')
const scoreCtrl = require('./controllers/scoresController')
const coursesController = require('./controllers/coursesController')

const SERVER_PORT = 4000

app.use(express.json())

app.get('/api/Courses', courseCtrl.getCourses)
app.get('/api/Scores', scoreCtrl.getScore)
app.post('/api/Scores', scoreCtrl.addScore)
app.put('/api/Scores', scoreCtrl.changeScore)
app.delete('/api/Scores', scoreCtrl.removeScore)


app.listen(SERVER_PORT, () => 
    console.log(`Listening on port ${SERVER_PORT}`)
    )