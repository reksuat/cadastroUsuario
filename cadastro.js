const prompt = require("prompt-sync")();
module.exports={
    criar, atualizar, remover, listar
}
const usuarios = [];
let ultimoIdInserido = 1;

const emailNaoDuplicado = (email) => {

}
function modelo() {
    const nome = prompt("Nome: ");
    const email = prompt("E-mail: ");
    const telefones = prompt("Tipo Variavel: ")
    let id  
    if (nome !== "" && email !== "" && telefones !=="") {
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
    usuario.id = ultimoIdInserido++
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
    if (usuario !== undefined) {
        usuarios.forEach((pessoa, indice) => {
            if (pessoa.id == id) { // se o id informado for igual ao id do registro, é nesse registro que ocorrerá a atualização/substituição
            usuarios[indice] = usuario;
            }
        });
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
    E-mail: ${usuario.email}
    Telefones: ${usuario.telefones}
    ` );
    });
    return true;
    }
}