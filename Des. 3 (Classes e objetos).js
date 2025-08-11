class hero {
  constructor(heroName, heroAge, heroClass, heroWeapon) {
    this.heroName = heroName;
    this.heroAge = heroAge;
    this.heroClass = heroClass;
    this.heroWeapon = heroWeapon;
  }
  Attack() {
    //Condicionais aqui

    //Mensagemzinha customizada com Condicional
    if (this.heroAge <= 46) {
      console.log(
        `We can say that despite his age (${this.heroAge} years), ${this.heroName} is highly skilled.\n`
      );
    } else {
      console.log(
        `How is he still alive?! ${this.heroName} has been around for ${this.heroAge} years.\n`
      );
    }

    //Mensagem desafio
    console.log(
      `We've heard about a ${this.heroClass} called ${this.heroName} that killed the baron with his ${this.heroWeapon}.`
    );
    console.log(
      `Some say he's ${this.heroAge} years old. His name is ${this.heroName}, and he's incredibly powerful.`
    );
  }
}

//Variáveis

//Infos dos heróis
let heroData = [
  { name: "Garen", age: 28, class: "Paladin", weapon: "Greatsword of Demacia" }, //0

  { name: "Darius", age: 32, class: "Warlord", weapon: "Axe of Noxus" }, //1

  {
    name: "Ryze",
    age: 1315,
    class: "Sorcerer",
    weapon: "Ancient Arcane scrolls",
  }, //2

  { name: "Brand", age: 30, class: "Pyromancer", weapon: "Living flame" }, //3

  { name: "Yasuo", age: 46, class: "Swordsman", weapon: "Ionian Katana" }, //4

  {
    name: "Lucian",
    age: 37,
    class: "Shooter",
    weapon: "Sentinel's Relic Pistols",
  }, //5

  {
    name: "Viego",
    age: 1421,
    class: "Necromancer",
    weapon: "Blade of the Ruined King",
  }, //6
];

//Sorteador aleatório
function sortRandomHero() {
  let index = Math.floor(Math.random() * heroData.length);
  let choosed = heroData[index];
  return choosed;
}

//Desestruturando um objeto inteiro para que os 4 parâmetros do constructor(da classe lá em cima) sejam lidos corretamente...
let selectedHero = sortRandomHero();
let allHeroesSpecs = new hero(
  selectedHero.name,
  selectedHero.age,
  selectedHero.class,
  selectedHero.weapon
);

allHeroesSpecs.Attack();
