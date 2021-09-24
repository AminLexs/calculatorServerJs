const express = require('express')
var cors = require('cors')
const config = require('config')
const Router = require('./routes/calculator')

const PORT = config.get('port') || 3000
const app = express() //initialization server
app.use(express.urlencoded({extended: true}))
app.use(cors({
    origin: `http://localhost:${PORT + 1}`,
    credentials: true
}))
app.use(Router)

app.listen(PORT, () => {
    console.log('Server has been started...')
})