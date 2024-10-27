export default class User {
    constructor(nome, email,nascimento, role, ativo = true){
        this.nome = nome;
        this.email = email;
        this.nascimento = nascimento;
        this.role = role;
        this.ativo = ativo;
    }

    criarPerfil(){
        return (`Perfil de ${this.nome} Criado com Sucesso`)
    }

    apagarPerfil(){
        return(`Perfil de ${this.nome} apagado com Sucesso`)    
    }
    
    exibirInfos(){
        return(`
            Nome: ${this.nome}
            Email:${this.email}
            Data de Nascimento: ${this.nascimento}`)
    }
}

const novoUser = new User("Murilo","Murilo@.com","04/04/1998","Estudante");

// console.log(novoUser.apagarPerfil());
// console.log(novoUser.criarPerfil());
// console.log(novoUser.exibirInfos());