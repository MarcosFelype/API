const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const QuestoesSchema = new mongoose.Schema({
    imagem: {
        type: String,
        required:  true,
    },
    titulo: {
        type: String,
        required:  true,
    },
    alternativa1: {
        type: String,
        required:  true,
    },
    alternativa2: {
        type: String,
        required:  true,
    },
    alternativa3: {
        type: String,
        required:  true,
    },
    alternativa4: {
        type: String,
        required:  true,
    },
    alternativa5: {
        type: String,
        required:  true,
    },
    alternativaCerta: {
        type: Number,
        required:  true,
    },
    assunto: {
        type: String,
        required:  true,
    },
    nivel: {
        type: Number,
        required:  true,
    },
})

module.exports = mongoose.model("quesTest", QuestoesSchema, "quesTest");