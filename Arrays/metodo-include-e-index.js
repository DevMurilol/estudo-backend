const alunos = ["João","Juliana", "Ana", "Caio"];
const medias = [ 10,8,7.5,9];

const listaDeAlunosEMedias = [alunos, medias];

function exibeNomeENota(aluno){

        let indice;
        const [alunos,medias] = listaDeAlunosEMedias
        
        if(alunos.includes(aluno))
        {
        
        indice = alunos.indexOf(aluno);    
        const mediaAluno = medias[indice]
        console.log(`${aluno} está cadastrado!`);

        console.log(mediaAluno);    
        }
        else(
            console.log("Aluno não está cadastrado!")
        )
        
        }


exibeNomeENota("caio")