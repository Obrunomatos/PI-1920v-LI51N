
const PORT = 1904

const express = require('express')
const url = require('url')

const db = require('./it-db')
const services = require('./it-services')(db)

const webApi = require('./it-web-api')(services)





const app = express()

app.use(express.json())

app.get('/it/api/issues', webApi.getIssues)
app.get('/it/api/issues/:id', webApi.getIssue)
app.post('/it/api/issues', webApi.addIssue)
app.delete('/it/api/issues/:id', webApi.deleteIssue)


app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))



