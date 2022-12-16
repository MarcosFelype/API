const ObjectId = require('mongoose').Types.ObjectId;
const User = require('../models/users');

exports.list = async (req, res) => {
    await User.find({}).exec(function(err, docs) {
        res.status(200).json(docs);   
    });
}

exports.create = (req, res) => {
    const userDocument = new User({
    });
    userDocument
        .save()
        .then(result => {
            res.status(201).json({ msg: 'Usuário cadastrado com sucesso.'});
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
}

exports.update = async (req, res) => {
    const filter = { _id: new ObjectId(req.body.id) };
    console.log(filter);
    //Dados a serem atualizados (ex: nome, cidade...) 
    //padrão:  req.body.nome_atributo
    const update = {
        nome: req.body.nome,
        email: req.body.email,
        password: req.body.password,
        age: req.body.age,
        country: req.body.country,
        office: req.body.office,
        preferenceArea: req.body.preferenceArea
    };
    console.log(update);
    await User
    .findOneAndUpdate(filter, update)
    .then(function (err, result) {
        //console.log(req.body.nome);
        msg = "Usuário atualizado com sucesso!";
        // res => response => resposta 
        res.msg = msg;
        exports.list(req, res);
    });
}

exports.delete = async (req, res) => {
    var msg;
    await User
    .findOneAndDelete({ _id: new ObjectId(req.params.usersId) })
    .then(function (err, data) {
        msg = "Usuário excluído com sucesso!";
        res.msg = msg;
        exports.list(req, res);
    });
}