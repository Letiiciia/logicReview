//Contrução do Objeto
const pessoa1 = {
  nome: 'Ariel',
  idade: 25,
  profissao: 'desenvolvedora',
};

const pessoa2 = new Object();

pessoa2.nome = 'Ariel';
pessoa2.idade = 25;
pessoa2.profissao = 'desenvolvedora';


//Acessando valores - notação de ponto
console.log(pessoa1.idade);

console.log("--------------------------------")

//Acessando valores - notação de colchetes
console.log(pessoa1["profissao"]);

console.log("--------------------------------")

//Métodos
//assign
const target = { a: "Lais", b: "Gabriel" };
const source = { b: "Letícia", c: "Igor" };
const outro = { b: "Paola", c: "Luiza" };

const returnedTarget = Object.assign(target, source, outro);

console.log(target);

console.log(returnedTarget);

console.log("--------------------------------")

//entries

console.log(Object.entries(target));
//Ele mostra pares de chaves e valores de cada objeto

console.log("--------------------------------")

//freeze
var obj = {
  tamanho: 1,
  peso: 2
}

//Object.freeze(obj);

obj.material = "ferro"; //não insere na estrutura, pois está imutavél

console.log(obj);

console.log("--------------------------------")

//hasOwnProperty

console.log(obj.hasOwnProperty("peso")); //Retorna True ou False;

console.log("--------------------------------")

//keys

console.log(Object.keys(obj)); //Retorna as propriedades/chaves



//seal

Object.seal(obj); // Não permite a inserção de nada, só permite a alteração dos existentes

obj.preco = 1;

console.log(obj);

console.log("--------------------------------")

//values

console.log(Object.values(obj));
