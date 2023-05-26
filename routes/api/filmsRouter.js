const router = require('express').Router();

const { Film } = require('../../db')

router.get('/', async (req, res) => {
    const films = await Film.findAll();
    res.json(films)
})

router.post('/', async (req, res) => {
    await Film.create(req.body)
    res.json('se envio correctamente')
})

router.put('/:filmId', async (req, res) => {
    await Film.update(req.body, {
        where: { id: req.params.filmId}
    })
    res.json('se modifico correctamente')
})

router.delete('/:filmId', async (req, res) => {
    await Film.destroy({
        where: { id: req.params.filmId }
    })
    res.json('se elimino correctamente')
})

module.exports = router;