//const ObjectId = require('mongoose').Types.ObjectId;
const Questoes = require('../models/questoes');
const listaQuestoes = require('../bancoQuestoes')();
const express = require('express');
const router = express.Router();
const app = express();



        //const questionsDocument = new Questoes({});
    /*function insertQuestions(){
        router.post("/create", (req, res) =>{
            for (var i=0; i<listaQuestoes.length; i++){
                listaQuestoes[i]
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
        });
            

    }*/
    


exports.list = async (req, res) => {
    await Questoes.find({}).exec(function(err, docs) {
        //console.log(docs.length);
        if (docs.length==0){
            console.log("Entrou aqui");
            //res.send("Enviando questões");
            insertQuestions();
        }
        else{
            res.status(200).json(docs);
        }
    });
}

// Falta criar método para envio de questões
//   --> ideia: usar uma função de calback acionada quando a api for enviada 