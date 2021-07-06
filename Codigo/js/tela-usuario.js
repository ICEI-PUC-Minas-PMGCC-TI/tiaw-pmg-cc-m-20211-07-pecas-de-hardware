const dadosIniciais = {
    "data":
    {
        "id": 1,
        "nome": "Marlene",
        "sobrenome": "Silva",
        "cep": "30520000",
        "email": "marleneflor@gmail.com",
        "celular": "3193334455",
        "senha": "123456",
        "status": "",

    },
};
const usertest = '{"id": 1,"tipo": 1, "nome": "Matheus","sobrenome": "Augusto","foto": "null","cep": "51346587","email": "Sincere@april.biz","celular": "31 992221287","senha": "teste123","status": 2}';

function setName() {
    $("#sidebar_username").html(user.nome + ' ' + user.sobrenome);
}