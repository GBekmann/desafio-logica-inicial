//Desafio Lógica 2 (Calculador de partidas ranqueadas){ DIO }
// CTRL + : Gera uma anotação

/*Como posso fazer para gerar um laço de repetição no código.
gerar um disparador de nomes aleatórios dentro de uma matriz e então fazer com
que ele gere vários results e crie as tabelinhas com os results

Também, posso fazer com que este algoritmo gere um número x de results e escolha
um valor Y de reesultados para mostrar e por ai vai...
*/

//Função Ranqueadora
function ranker(victories = 0, defeats = 0, result = 0, totalMatches = 0) {
  let ranking = [
    "Noob",
    "Iron",
    "Bronze",
    "Silver",
    "Gold",
    "Diamond",
    "Legendary",
    "Immortal",
  ];

  totalMatches = victories + defeats;
  result = victories - defeats;

if(result <   0){
  ranking = ranking [0] //Noob
  } else if (result >= 0 && result <= 10) {
    ranking = ranking[1]; //Iron
  } else if (result >= 11 && result <= 20) {
    ranking = ranking[2]; // Bronze
  } else if (result >= 21 && result <= 50) {
    ranking = ranking[3]; //Silver
  } else if (result >= 51 && result <= 80) {
    ranking = ranking[4]; //Gold
  } else if (result >= 81 && result <= 90) {
    ranking = ranking[5]; //Diamond
  } else if (result >= 91 && result <= 100) {
    ranking = ranking[6]; //Legendary
  } else if (result > 100) {
    ranking = ranking[7]; //Immortal
  }
  return {
    ranking,
    totalMatches,
    result,
  };
}

function randomPlayer() {
  //14 nomes Masculinos e Femininos

  const femaleNames = [
    "Letícia",
    "Fernanda",
    "Eduarda",
    "Carla",
    "Júlia",
    "Cristina",
    "Evelin",
    "Ana",
    "Paula",
    "Priscila",
    "Luana",
    "Laura",
    "Débora",
    "Bruna",
  ];

  const maleNames = [
    "Lucas",
    "Carlos",
    "João",
    "Luan",
    "Eduardo",
    "Antônio",
    "Jean",
    "Gabriel",
    "Emanuel",
    "Marcos",
    "Natan",
    "Pedro",
    "Paulo",
    "Cristian",
  ];

  const allNames = [...maleNames, ...femaleNames]; //'...(Spread Operator) Mescla os arrays em um só
  const indice = Math.floor(Math.random() * allNames.length);
  const name = allNames[indice];
  return name;
}

const player = randomPlayer();

function generateRankMessage() {
  const player = randomPlayer();
  const victories = Math.floor(Math.random() * 160);
  const defeats = Math.floor(Math.random() * 130);
  const totalMatches = victories + defeats;
  const result = victories - defeats;

  const stats = ranker(victories, defeats, totalMatches, result); // Chama a função ranker e guarda os dados
  if(stats.result >= 0) {
    console.log(`Congratulations ${player}! Your current ranking is ${stats.ranking};`);
    console.log(`On this season, you've already played ${stats.totalMatches} total matches.`);
    console.log(`You've already won ${victories} and lost ${defeats} matches.`);
    console.log(`You're with a ${stats.result} win-loss record at this moment.`);
  } 
  else if (stats.result < 0) {
    console.log(`Hey ${player} here's all the infos about your season till today`);
    console.log(`Your current rank is ${stats.ranking};`);
    console.log(`You've won ${victories} matches and lost ${defeats} times`);
    console.log(`You're with a ${stats.result} win-loss record at this moment`);
  }
}

//Cinco execuções do código
for(let i= 0; i <= 4; i++){ 
  
  console.log(`Execução ${i}`);
  generateRankMessage();
  console.log('\n');
}
