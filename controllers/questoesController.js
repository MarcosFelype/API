//const ObjectId = require('mongoose').Types.ObjectId;
const Questoes = require('../models/questoes');

exports.list = async (req, res) => {
    await Questoes.find({}).exec(function(err, docs) {
        res.status(200).json(docs);   
    });
}

// Falta criar método para envio de questões
//   --> ideia: usar uma função de calback acionada quando a api for enviada 