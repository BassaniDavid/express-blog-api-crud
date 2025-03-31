
const posts = require('../data/posts')


//funzione index
function index(req, res) {

    let filterTag = posts

    if (req.query.tag) {
        filterTag = posts.filter(element => element.tags.includes(req.query.tag))
    }

    if (filterTag.length <= 0) {
        res.status(404)

        return res.json({
            error: "not found",
            message: "tag del post non trovato"
        })
    }
    res.json(filterTag)
}

//funzione show
function show(req, res) {

    const post = posts.find((element) => element.title === req.params.id)

    if (!post) {

        res.status(404)

        return res.json({
            error: "not found",
            message: "post non trovato"
        })
    }

    res.json(post)
}

//funzione store
function store(req, res) {

    const newId = posts[posts.length - 1].id + 1

    const newPost = {
        id: newId,
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags
    }

    posts.push(newPost);

    console.log(posts);
    
    res.status(201);

    res.json(newPost);
}

//funzione update
function update(req, res) {
    res.send('modifica integrale del post ' + req.params.id)
}

//funzione modify
function modify(req, res) {
    res.send('modifica parziale del post ' + req.params.id)
}

//funzione destroy
function destroy(req, res) {
    const post = posts.find((element) => element.title === req.params.id)

    if (!post) {

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

module.exports = { index, show, store, update, modify, destroy }