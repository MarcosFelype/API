const Questoes = require('./models/questoes');

var questoes = new Questoes({});
var questoes = 
    [

        {
            imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Size_planets_comparison.jpg/1280px-Size_planets_comparison.jpg',
            titulo: 'Vivemos no planeta Terra. Além dele, existem outros sete girando em torno do Sol, cujos nomes esperamos que já saiba. Então, responda: Quantos planetas têm somente 5 letras em seu nome? Assinale a única alternativa correta.',
            alternativa1:'4',
            alternativa2:'3',
            alternativa3:'2',
            alternativa4:'5',
            alternativa5:'6',
            alternativa_certa:1,
            assunto:'Planetas',
            nivel:1
        },

        {
            imagem: 'https://1.bp.blogspot.com/-g0sTX70IkYE/XqMWxgrVPqI/AAAAAAAAdS4/3GW2FyrxmA4at_WzndS3Q9SD-yFGsFAbACLcBGAsYHQ/s1600/dia-e-noite-003.jpg',
            titulo: 'Tudo no Universo se move. O que explica a alternância entre a noite e o dia claro? Assinale a única alternativa correta. ',
            alternativa1:'À noite a Terra entra na sombra da Lua.',
            alternativa2:'A rotação do Sol.',
            alternativa3:'A rotação da Terra.',
            alternativa4:'À noite o Sol não brilha',
            alternativa5:'À noite um Buraco Negro bloqueia a luz do Sol.',
            alternativa_certa:3,
            assunto:'Movimento dos astros',
            nivel:2
        },

        {
            imagem: 'https://www.eusemfronteiras.com.br/wp-content/uploads/2020/02/81863403_s-810x519.jpg',
            titulo: 'Vamos fazer uma viagem espacial. Vamos começar indo para o mesmo local onde foram os astronautas, em 1969. Qual é o nome deste lugar? Uma dica: este lugar fica “pertinho”, ou seja, só cerca de 400.000 quilômetros. Assinale a única alternativa correta.',
            alternativa1:'Plutão',
            alternativa2:'Urano',
            alternativa3:'Marte',
            alternativa4:'Vênus',
            alternativa5:'Lua',
            alternativa_certa:5,
            assunto:'Tópicos de astronáutica',
            nivel:2
        }
    ];


function getQuestions(){
    return questoes;
}


module.exports = getQuestions;



/*

sqlquestion =
        "INSERT INTO QUESTOES (imagem, titulo, alternativa1, alternativa2, alternativa3, alternativa4, alternativa5, alternativa_certa) VALUES ('https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Size_planets_comparison.jpg/1280px-Size_planets_comparison.jpg', 'Vivemos no planeta Terra. Além dele, existem outros sete girando em torno do Sol, cujos nomes esperamos que já saiba. Então, responda: Quantos planetas têm somente 5 letras em seu nome? Assinale a única alternativa correta.', '4', '3', '2', '5', '6', 1);";
    await db.execute(sqlquestion);

    sqlquestion =
        "INSERT INTO QUESTOES (imagem, titulo, alternativa1, alternativa2, alternativa3, alternativa4, alternativa5, alternativa_certa) VALUES ('https://1.bp.blogspot.com/-g0sTX70IkYE/XqMWxgrVPqI/AAAAAAAAdS4/3GW2FyrxmA4at_WzndS3Q9SD-yFGsFAbACLcBGAsYHQ/s1600/dia-e-noite-003.jpg', 'Tudo no Universo se move. O que explica a alternância entre a noite e o dia claro? Assinale a única alternativa correta. ', 'À noite a Terra entra na sombra da Lua.', 'A rotação do Sol.', 'A rotação da Terra.', 'À noite o Sol não brilha', 'À noite um Buraco Negro bloqueia a luz do Sol. ', 3);";
    await db.execute(sqlquestion);

    sqlquestion =
        "INSERT INTO QUESTOES (imagem, titulo, alternativa1, alternativa2, alternativa3, alternativa4, alternativa5, alternativa_certa) VALUES ('https://www.eusemfronteiras.com.br/wp-content/uploads/2020/02/81863403_s-810x519.jpg', 'Vamos fazer uma viagem espacial. Vamos começar indo para o mesmo local onde foram os astronautas, em 1969. Qual é o nome deste lugar? Uma dica: este lugar fica “pertinho”, ou seja, só cerca de 400.000 quilômetros. Assinale a única alternativa correta.', 'Plutão', 'Urano', 'Marte', 'Vênus', 'Lua', 5);";
    await db.execute(sqlquestion);

*/

