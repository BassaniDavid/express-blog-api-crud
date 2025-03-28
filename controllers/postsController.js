
const posts = require('../data/posts')

//funzione index
function index (req,res) {
    res.json(posts)
}

//funzione show
function show (req,res) {

    const post = posts.find((element) => element.title === req.params.id)

    if(!post) {

        res.status(404)

        return res.json({
            error: "not found",
            message: "post non trovato"
        })
    }

    res.json(post)
}

//funzione store
function store (req,res) {
    res.send('creazione nuovo post')
}

//funzione update
function update (req,res) {
    res.send('modifica integrale del post '+ req.params.id)
}

//funzione modify
function modify (req,res) {
    res.send('modifica parziale del post '+ req.params.id)
}

//funzione destroy
function destroy (req,res) {
    const post = posts.find((element) => element.title === req.params.id)

    if(!post) {

        res.status(404)

        return res.json({
            error: "not found",
            message: "post non trovato"
        })
    }

    posts.splice(posts.indexOf(post), 1)

    console.log(posts)

    res.sendStatus(204)
}

module.exports = { index, show, store, update, modify, destroy}