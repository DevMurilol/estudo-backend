const alunos = ["João","Juliana", "Ana", "Caio"];
const medias = [ 10,8,7.5,9];

const listaDeAlunosEMedias = [alunos, medias]

console.table(listaDeAlunosEMedias);

console.log(
    `O aluno da primeira posição é:${listaDeAlunosEMedias[0][0]}
    e sua média é: ${listaDeAlunosEMedias[1][0]}`
)