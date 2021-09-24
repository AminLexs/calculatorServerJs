const express = require('express')
const cors = require('cors')
const config = require('config')
const Router = require('./routes/calculator')

const PORT = config.get('port') || 3000
const domainName = config.get('domainName') || 'localhost'
const app = express() // initialization server
app.use(express.urlencoded({ extended: true }))
app.use(cors({
    origin: `http://${domainName}:${PORT + 1}`,
    credentials: true
}))
app.use(Router)

app.listen(PORT, () => {
    console.log(`Server has been started on a port ${PORT}...`)
})
