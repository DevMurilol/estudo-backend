import User from "./User.js";

class Admin extends User {
    constructor(nome, email,nascimento, role = "Admin", ativo = true){
        super(nome, email,nascimento, role, ativo)
    }
    criarCurso(curso, vagas){
        return (console.log(`O Curso ${curso} gerado com ${vagas} vagas`))
    }
}

const novoAdmin = new Admin("MuriloL ","MuriloADM@.com","04/04/1998");

console.log(novoAdmin.apagarPerfil());
console.log(novoAdmin.criarPerfil());
console.log(novoAdmin.exibirInfos());
novoAdmin.criarCurso("Javascript", 20);