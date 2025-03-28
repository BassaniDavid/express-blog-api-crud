const posts = require('../data/posts')

//funzione index
function index (req,res) {
    res.send('lista dei post')
}

//funzione show
function show (req,res) {
    res.send('dettagli del post ' + req.params.id)
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
    res.send('cancellazione del post '+ req.params.id)
}

module.exports = { index, show, store, update, modify, destroy}