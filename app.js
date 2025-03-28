const express = require('express')
const app = express()
const port = 2000

app.listen(port, (req, res) => {
    console.log('server attivo su porta ' + port)
})