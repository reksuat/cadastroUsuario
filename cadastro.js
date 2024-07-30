const prompt = require("prompt-sync")();
module.exports={
    criar, atualizar, remover, listar
}
const usuarios = [];
let ultimoIdInserido = 1;

const emailNaoDuplicado = (email, id) => {
    if(usuarios.find(usuario => usuario.email == email && usuario.id != id)) {
        console.log("Email duplicado")
        return false
    }

    return true
};
function modelo(id = ultimoIdInserido++) {
    const nome = prompt("Nome: ");
    const email = prompt("E-mail: ");
    const telefones = [];
    while (true) {
        const telefone= prompt("Digite seu número ou 0 para sair: ");
        if (telefone==0) {
            break
        }else{
            telefones.push(telefone)
        }
    }  
    if (nome !== "" && email !== "" && telefones !=="" && emailNaoDuplicado(email, id)) {
        return {
            nome,
            email,
            telefones,
            id
        }
    }else{
        console.log("Dados inválidos");
        return undefined
    }
}
function criar() {
    let usuario = modelo()
    if (usuario!=undefined ) {
        usuarios.push(usuario)
        console.log("Usuário cadastrado com sucesso");
    }else {
        console.log("não foi possivel cadastrar");
    }
}
function atualizar() {
    const prompt = require("prompt-sync")();
    listar()
    const id = +prompt("Qual id deseja atualizar? ");
    const usuario = modelo(id) 
    const indice = usuarios.findIndex(usuario => id == usuario.id) //continuar daqui 
    if (usuario !== undefined && indice!= -1) {
        usuarios[indice] = usuario
        console.log("usuario atualizado com sucesso. ");
 
    } else {
        console.log("Falha na atualização");
        }
}
    

function remover() {
    const prompt = require("prompt-sync")();
    listar()
    let certeza= prompt ("Você tem certeza? ");
    if (certeza=="sim") {
        let id =+prompt("Qual ID você deseja remover? ")-1;
        usuarios.splice(id, 1);
        console.log("Usuário removido com sucesso");
    }else if (certeza=="não") {
        console.log("Usuário não foi removido");
    }
}
function listar() {
    if (usuarios.length === 0) {
    console.log("Nenhum usuário encontrado ");
    return false;
    } else {
    usuarios.forEach((usuario) => { 
    console.log(`
    ID: ${usuario.id}
    Nome: ${usuario.nome }
    E-mail: ${usuario.email}` );
    usuario.telefones.forEach((telefone) => {
        console.log(`Telefone: ${telefone}`);
      });
    });
    return true;
    }
}