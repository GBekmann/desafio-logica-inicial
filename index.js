// Desafio do Felipão 
//Estudos de Lógica de Programação


//Variáveis
let heroi = "Edu"
let xp = 6500
let nivel;



//Estruturas condicionais
 if (xp >= 0 && xp <= 1000) {
    nivel= "Ferro";
}
 else if (xp >= 1001 && xp <= 2000) {
    nivel= "Bronze"
}
 else if (xp >= 2001 && xp <=5000) {
    nivel= "Prata"
}
 else if (xp >= 6001 && xp <= 7000) {
    nivel= "Ouro"
}
 else if (xp >= 7001 && xp <= 8000) { 
    nivel = "Platina"
}
 else if (xp >= 8001 && xp <= 9000) {
    nivel= "Ascendente" 
}
 else if (xp >= 9001 && xp <= 10000) {
    nivel= "Imortal"
}
 else if (xp >= 10001) {
    nivel= "Radiante"
}
 else {
    console.log("Houve um erro ao calcular o seu nível. \n O valor de XP não pode ser negativo.")
 }



console.log("\n");



//Estruturas de repetição
switch (nivel) {

    case "Ferro": 
    console.log("O herói " + heroi + " está no nível " + nivel + ". Com o total de " + xp + " pontos de Experiência(xp)");
    break;

    case "Bronze":
    console.log("O herói " + heroi + " está no nível " + nivel + ". Com o total de " + xp + " pontos de Experiência(xp)");
    break;
    
    case "Prata":
    console.log("O herói " + heroi + " está no nível " + nivel + ". Com o total de " + xp + " pontos de Experiência(xp)");
    break;

    case "Ouro":
    console.log("O herói " + heroi + " está no nível " + nivel + ". Com o total de " + xp + " pontos de Experiência(xp)");
    break;

    case "Platina":
    console.log("O herói " + heroi + " está no nível " + nivel + ". Com o total de " + xp + " pontos de Experiência(xp)");
    break;

    case "Ascendente":
    console.log("O herói " + heroi + " está no nível " + nivel + ". Com o total de " + xp + " pontos de Experiência(xp)");
    break;

    case "Imortal":
    console.log("O herói " + heroi + " está no nível " + nivel + ". Com o total de " + xp + " pontos de Experiência(xp)");
    break;
    
    case "Radiante":
    console.log("O herói " + heroi + " está no nível " + nivel + ". Com o total de " + xp + " pontos de Experiência(xp)");
    break;

    default:
    console.log("Nível indefinido. \n O seu XP está fora do intervalo esperado.");
    break;
}
