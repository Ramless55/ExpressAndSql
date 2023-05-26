const router = require('express').Router()
const bcrypt = require('bcryptjs')
const { User } = require('../../db')
const { check, validationResult } = require('express-validator')

router.post('/register',[
    check('username', 'username is required').not().isEmpty(),
    check('password', 'password is required').not().isEmpty(),
    check('email', 'mail is required and must be correct').isEmail()
], async (req, res) => {

    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(422).json({ errors: errors.array() })
    }

    req.body.password = bcrypt.hashSync(req.body.password, 10)
    await User.create(req.body)
    res.json('Usuario Creado')
})

router.post('/login', async (req, res) => {
    const user = await User.findOne({ where: { email: req.body.email }})
    if(user) {
        const equal = bcrypt.compareSync(req.body.password, user.password)
        if(equal){
            //aca va el token
        }else{
            res.json({ error: 'user or password incorrected' })
        }
    }else{
        res.json({ error: 'user or password incorrected' })
    }
})

module.exports = router;