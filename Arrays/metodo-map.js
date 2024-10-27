const notas = [10,9.5,8,7,6];

const notasAtualizadas = notas.map((nota)=>{

    return nota + 1 >= 10 ? 10 : nota + 1;
})

console.log(`As notas antigas são:` + notas)

console.log(`As novas notas são:` + notasAtualizadas);

//Alterando Strings com Map()

const nomes = ['ana Julia', 'Caio vinicius', 'BIA silva'];

const nomesPadronizados = nomes.map((nome) => nome.toUpperCase())

console.table(nomesPadronizados);