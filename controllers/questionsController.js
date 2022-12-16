//const ObjectId = require('mongoose').Types.ObjectId;
//const Questoes = require('../models/questoes');
const listaQuestoes = require('../bancoQuestoes');

function insertQuestions(req, res){
    for (var i=0; i<listaQuestoes.length; i++){

        const questionsDocument = listaQuestoes[i];

        questionsDocument
        .save()
        .then((result => {
            res.status(201).json({
                msg: 'Questão cadastrada com sucesso!'
            });
        }))
        .catch(err => {
            res.status(500).json({
                error: err
            });
        })
    }
}

exports.list = async (req, res) => {
    await listaQuestoes.find({}).exec(function(err, docs) {
        if (!docs){
            insertQuestions(req, res);
        }
        else{
            res.status(200).json(docs);
        }
    });
}

// Falta criar método para envio de questões
//   --> ideia: usar uma função de calback acionada quando a api for enviada 