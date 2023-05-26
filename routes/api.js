const router = require('express').Router();

const apiFilmsRouter = require('./api/filmsRouter')
const apiUsersRouter = require('./api/users')

router.use('/films', apiFilmsRouter)
router.use('/users', apiUsersRouter)

module.exports = router;