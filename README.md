# logicReview
<h1 align="center">
    <a> Semana1- Módulo1 (Introdução a programação)</a>
</h1>
<p align="center">🚀 Tema: Objetos </p>
<br>
<h3>Conteúdos gerais abordados:</h3><br>
-Objeto<br>
-Classes <br>
-Principais Métodos
<br><br>
<h3>Resumo aula:</h3><br>
O que é objeto = É um um tipo de dado que contém uma coleção de propriedades a respeito do objeto, organizados em pares de "chaves" e "valores".
<br>
-Quais as características que o compoe = Chaves e Valores dentro do simbolo "{}" (chaves);
<br>
-Quais as formas de se construir um objeto??
<h3>Contrução do Objeto</h3>
const pessoa1 = {<br>
  nome: 'Ariel',<br>
  idade: 25,<br>
  profissao: 'desenvolvedora',<br>
};<br><br>

const pessoa2 = new Object();<br>

pessoa2.nome = 'Ariel';<br>
pessoa2.idade = 25;<br>
pessoa2.profissao = 'desenvolvedora';<br>
<br>
-Para que serve = O objeto é útil para agrupar caracteristicas, descrições ou ações de um objeto.
<br>

-Sintaxe de contrução do objeto = <br>
const nome = {<br>
  chave: 'valor',<br>
  chave: 'valor',<br>
  chave: 'valor'<br>
};
<br><br>
-Quais as formas de acessar um objeto = <br>
console.log(pessoa1.idade); <br>
console.log(pessoa1["idade"]);<br>

-Sitaxe de acesso de um objeto = <br>
console.log(objeto.chave); <br>
console.log(objeto["chave"]);<br>

O que é chave/propriedade = são os pares dentro do simbolo "{}" <br>
-Para que serve =  descrever ou caracterizar um objeto<br>
-Sintaxe =<br>
const nome = {<br>
  chave: 'valor',<br>
  chave: 'valor',<br>
  chave: 'valor'<br>
};<br><br>

O que é valor = É a parte que descreve a chave.<br>
-Quais as características que o compoe = <br>
const nome = {<br>
  chave: <strong>'valor',</strong><br>
};<br><br><br>
-Para que serve = para descrever as atribuições de um objeto.<br>
-Sintaxe = <br>
const nome = {<br>
  chave: <strong>'valor',</strong><br>
};
<br><br>


-O que é método = são açoes/auto modificações dentro do objeto.<br>
-Quais as características que o compoe = Function(){}<br>
-Quais os principais métodos que podem ser usados com objetos em JS?<br>
### Principais métodos

- `assing` copia todas as propriedades enumeráveis de um objeto para outro.
- `entries` retorna uma lista contendo todos os pares (chave, valor) das propriedades enumeráveis do objeto.
- `freeze` impede que as propriedades do objeto sejam excluídas ou alteradas.
- `hasOwnProperty` retorna um _booleano_ indicando se o objeto possui a propriedade especificada
- `keys` retorna uma lista contendo os nomes de todas as propriedades enumeráveis do objeto.
- `seal` impede que as propriedades do objeto sejam excluídas.
- `values` retorna uma lista com todos os valores que correspondem a todas as propriedades enumeráveis do objeto.<br><br>

