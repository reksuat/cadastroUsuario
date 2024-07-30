const { criar, atualizar, remover, listar } = require("./cadastro");

const prompt = require("prompt-sync")();
let escolha;
while (escolha != 0) {
    console.log(`
    >>>> Usuário <<<<
    1. Cadastro de Usuário
    2. Listagem de Usuários
    3. Atualização de Usuário
    4. Remoção de Usuário
    0. Encerrar
    `);
    escolha = +prompt("Escolha uma opção: ");
    switch (escolha) {
        case 1:
            console.log(criar());
            break;
            case 2:
                console.log(listar());
                break;
                case 3:
                    console.log(atualizar());
                    break;
                    case 4:
                        console.log(remover());
                        break;
                        case 0:
                            console.log("Encerrando..");
                            break;
    
        default:
            console.log("Opção inválida");
            break;
    }
}