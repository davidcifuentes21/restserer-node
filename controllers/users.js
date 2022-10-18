const {response} = require('express');

const usersGet = (req, res = response) =>{
    const {id, nombre, edad} = req.query;

    res.json({
        msg: 'get API xd',
        id,
        nombre,
        edad
    });
}

const usersPut = (req, res = response) => {
    const id = req.params.id;

    res.json({
        msg: 'put API xd',
        id
    });
}

const usersDelete = (req, res = response) => {
    res.json({
        msg: 'delete API xd'
    });
}

const usersPost = (req, res = response) => {
    const {nombre,edad} = req.body;

    res.json({
        msg: 'post API xd',
        nombre,
        edad
    });
}

const usersPatch = (req, res = response) => {
    res.json({
        msg: 'patch API xd'
    });
}


module.exports ={
    usersGet,
    usersPut,
    usersDelete,
    usersPost,
    usersPatch
}