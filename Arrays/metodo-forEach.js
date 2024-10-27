const notas = [10, 6.5, 8, 7.5];
let somaDasNotas = 0;
let media = 0;
notas.forEach((nota, indice) =>{
    somaDasNotas += nota;
    media = somaDasNotas/notas.length;
    console.log(indice);
})
console.log(media);