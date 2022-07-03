const {response, request} = require('express')

const usuariosGet =(req= request, res= response)=>{
    const {q, nombre ='no name', apikey} = req.query;
    res.json({
        ok: true,
        msg: "get API - controlador",
        q,
        nombre, 
        apikey
    })
}

const usuariosPost =(req = request, res= response)=>{
    const {nombre, edad} = req.body;

    res.json({
        ok: true,
        msg: "post API - controlador",
        nombre: nombre,
        edad: edad
    })
}

const usuariosPut =(req= request, res= response)=>{
    const {id} = req.params;
    res.json({
        ok: true,
        msg: "put API - controlador",
        id
    })
}

const usuariosDelet =(req= request, res= response)=>{
    res.json({
        ok: true,
        msg: "delet API - controlador"
    })
}
module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut, 
    usuariosDelet
}