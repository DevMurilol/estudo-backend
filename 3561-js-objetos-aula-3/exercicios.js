const pessoa = {
  nome: "Murilo",
  notas: [3, 5, 6, 7, 8, 10],
  calcularMediaNotas: function (){
    let media = 0
    for (let nota of this.notas){
      media += nota/this.notas.length
    }
    return  media;
  }, classificarDesempenho: function (media){
    let desempenho;
    switch (media){
      
      case(media >=9):
      desempenho = "Desempenho Execelente!"
      break
      case(media <9  ):
      desempenho = "Desempenho Execelente!"
      break
      case(media >=9):
      desempenho = "Desempenho Execelente!"
      break
   }
  }
};

console.log(pessoa.classificarDesempenho());