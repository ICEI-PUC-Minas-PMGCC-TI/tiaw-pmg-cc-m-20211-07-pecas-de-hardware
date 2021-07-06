var db_usuariospecas = {};

var usuarioCorrente = {};

const dadosIniciais = {
    "data": [
        {
            "id": 1,
            "nome": "Marlene",
            "sobrenome": "Silva",
            "cep": "30520000",           
            "email": "marleneflor@gmail.com",
            "celular": "3193334455",
            "senha": "123456",
            "status": ""
        },
        {
            "id": 2,
            "nome": "Leonardo",
            "sobrenome": "Gomes",
            "cep": "30520000",           
            "email": "leonardo@gmail.com",
            "celular": "3193334455",
            "senha": "123456",
            "status": ""
        },
        {
            "id": 3,
            "nome": "Paulo",
            "sobrenome": "Batista",
            "cep": "30520000",           
            "email": "paulo@gmail.com",
            "celular": "3193334455",
            "senha": "123456",
            "status": ""
        },      
    ]
}

function initLoginApp () {
    // PARTE 1 - INICIALIZA USUARIOCORRENTE A PARTIR DE DADOS NO LOCAL STORAGE, CASO EXISTA
    usuarioCorrenteJSON = sessionStorage.getItem('usuarioCorrente');
    if (usuarioCorrenteJSON) {
        usuarioCorrente = JSON.parse (usuarioCorrenteJSON);
    }
    
    // PARTE 2 - INICIALIZA BANCO DE DADOS DE USUÁRIOS
    // Obtem a string JSON com os dados de usuários a partir do localStorage
    var usuariosJSON = localStorage.getItem('db_usuariospecas');

    // Verifica se existem dados já armazenados no localStorage
    if (!usuariosJSON) {  // Se NÃO há dados no localStorage
        
        // Informa sobre localStorage vazio e e que serão carregados os dados iniciais
        alert('Dados de usuários não encontrados no localStorage. \n -----> Fazendo carga inicial.');

        // Copia os dados iniciais para o banco de dados 
        db_usuariospecas = dadosIniciais;

        // Salva os dados iniciais no local Storage convertendo-os para string antes
        localStorage.setItem('db_usuariospecas', JSON.stringify (dadosIniciais));
    }
    else  {  // Se há dados no localStorage
        
        // Converte a string JSON em objeto colocando no banco de dados baseado em JSON
        db_usuariospecas = JSON.parse(usuariosJSON);   
    }


 
};
function loginUser (email, senha) {
    
    // Verifica todos os itens do banco de dados de usuarios 
    // para localizar o usuário informado no formulario de login
    for (let i = 0; i < db_usuariospecas.data.length; i++) {
        let usuario = db_usuariospecas.data[i];
        
        // Se encontrou login, carrega usuário corrente e salva no Session Storage
        if (email == usuario.email && senha == usuario.senha) {
            usuarioCorrente.id = usuario.id;
            usuarioCorrente.nome = usuario.nome;
            usuarioCorrente.sobrenome = usuario.sobrenome;
            usuarioCorrente.cep = usuario.cep;
            usuarioCorrente.email = usuario.email;
            usuarioCorrente.celular = usuario.celular;
            usuarioCorrente.senha = usuario.senha;
            usuarioCorrente.status = usuario.status;
            
            // Salva os dados do usuário corrente no Session Storage, mas antes converte para string
            sessionStorage.setItem ('usuarioCorrente', JSON.stringify (usuarioCorrente));

            // Retorna true para usuário encontrado
            return true;
        }
    }

    // Se chegou até aqui é por que não encontrou o usuário e retorna falso
    return false;
}

initLoginApp ();