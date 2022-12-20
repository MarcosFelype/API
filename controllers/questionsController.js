//const ObjectId = require('mongoose').Types.ObjectId;
const Questoes = require('../models/questoes');
const listaQuestoes = require('../bancoQuestoes')();
const express = require('express');
const router = express.Router();
const app = express();



/*imagem: "oi",
titulo: "b",
alternativa1: "1",
alternativa2: "2",
alternativa3: "4",
alternativa4: "5",
alternativa5: "10",
alternativaCerta: 3,
assunto: "Astronomia",
nivel: 3 */
    var i=0;
    function insertQuestions(req, res){
    //router.post("/create", (req, res) => {
        //var questionsDocument = new Questoes();
        do{
            const questionsDocument = new Questoes({
                imagem: listaQuestoes[i].imagem,
                titulo: listaQuestoes[i].titulo,
                alternativa1: listaQuestoes[i].alternativa1,
                alternativa2: listaQuestoes[i].alternativa2,
                alternativa3: listaQuestoes[i].alternativa3,
                alternativa4: listaQuestoes[i].alternativa4,
                alternativa5: listaQuestoes[i].alternativa5,
                alternativaCerta: listaQuestoes[i].alternativaCerta,
                assunto: listaQuestoes[i].assunto,
                nivel: listaQuestoes[i].nivel
            });
            //console.log(listaQuestoes[i]);
            console.log(questionsDocument);
            questionsDocument
            .save()
            .then(() => {
                res.status(201).json({
                        msg: 'Questão cadastrada com sucesso!'
                    });
                    exports.list(req, res);
                })
                .catch(err => {
                    res.status(500).json({
                        error: err
                    });
                })
                //});  
                
            }while(i!=3);
            }

exports.list = async (req, res) => {
    await Questoes.find({}).exec(function(err, docs) {
        //console.log(docs.length);
        if (docs.length==0){
            console.log("Entrou aqui");
            //res.send("Enviando questões");
            insertQuestions(req, res);
        }
        else{
            res.status(200).json(docs);
        }
    });
}

// Falta criar método para envio de questões
//   --> ideia: usar uma função de calback acionada quando a api for enviada 