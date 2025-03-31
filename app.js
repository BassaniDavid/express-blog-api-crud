const express = require('express')
const app = express()
const port = 2000
const postsRouter = require('./routers/postsRouter')
app.use(express.json())

app.use('/posts', postsRouter)


app.listen(port, (req, res) => {
    console.log('server attivo su porta ' + port)
})