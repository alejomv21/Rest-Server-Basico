const {Router} = require('express');
const { usuariosGet, 
        usuariosPost, 
        usuariosPut, 
        usuariosDelet } = require('../controllers/usuarios.controller');

const router = Router();

router.get('/', usuariosGet);

router.post('/', usuariosPost);

router.put('/:id', usuariosPut);

router.delete('/', usuariosDelet);

module.exports = router;