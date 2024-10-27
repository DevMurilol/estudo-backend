let notas = [8, 6.3, 7, 9.30];

let media = 0;
notas.forEach(nota =>{
    console.log(nota)
  media += (nota/notas.length);
  console.log(media);
})

console.log(media);
if (media >= 7){
    media += media*0.1;
}

console.log( `A média é ${media.toFixed(2)}`);