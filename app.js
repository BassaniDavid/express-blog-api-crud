const express = require('express')
const app = express()
const port = 2000
const postsRouter = require('./routers/postsRouter')
const notFound = require('./middleware/middlewareRoute')
app.use(express.json())

app.use('/posts', postsRouter)

app.use(notFound)

app.listen(port, (req, res) => {
    console.log('server attivo su porta ' + port)
})
