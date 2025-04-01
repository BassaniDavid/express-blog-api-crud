function notFound (req, res, next) {
    console.log('se il percorso è sbagliato, il middleware funziona')

    res.status(404)
    res.json({
        error: 'not found',
        message: 'pagina non trovata'
    })
}

module.exports = notFound