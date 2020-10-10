## Programação Para Dispositivos Móveis

Prova 1 da disciplina "Programação para Dispositivos Móveis" (IFTM).

Conteúdo: JavaScript ES6+.

## Enviando as soluções dos exercícios

1. Faça o Fork desse repositório conforme ensinado na primeira aula;
2. Faça o clone do repositório que foi criado no seu **perfil** após o Fork, na sua máquina;
3. Dentro da pasta "src", crie uma nova pasta com o seu NomeSobrenome. Ex: ./src/LucasMoura
4. Dentro da pasta criada,  adicione um arquivo index.js, você deverá adicionar todos os exercícios na forma de funções (arrow functions).
5. No arquivo `package.json`, você deverá criar criar uma nova linha em scripts, sendo o nome do script igual ao nome da pasta criada (tudo minúsculo), exemplo:

Considere que a seguinte pasta foi criada:
`./src/LucasMoura/index.js`

Arquivo package.json
```
  ...
  "scripts": {
    "dev": "babel ./main.js -o ./bundle.js -w",
    "lucasmoura": "babel ./src/LucasMoura/index.js -o ./bundle.js -w"
  }
```


6. Após concluído, faça o envio dos commits com o comando push. 
Obs: você deverá fazer os commits e o push no repositório que está na sua conta do GitHub, criado através do botão Fork.
7. Após confirmar os commits, faça uma "Pull request" do seu repositório selecionando o repositório original como destino. Informar o nome completo do aluno na descrição da PR (pull-request).

## Exercícios
Todos os exercícios abaixo deverão ser feitos em funções separadas, utilizando arrow functions. As funções que apenas retornam uma informação, deverão utilizar a forma simplificada de arrow function (1 linha).

1- Crie uma função (com arrow function e desestruturação) que dado o objeto no formato a seguir:
```javascript
const tvShow = {
	name: "Cobra Kai",
	platform: 'Netflix',
	details: {
	    seasons: 2,
	    episodes: 10,
	}
};
```

Retorne (`return`) o seguinte conteúdo:
`Terminei de assistir a série Cobra Kai na Netflix que contém 2 temporadas (10 episódios cada).`

É obrigatório o uso de desestruturação.

2- Crie uma classe `Matematica` que contém os seguinte métodos estático:

```javascript
...
gerarPares(x, y) {
    // Imprime no console os números pares no intervalo de x até y (incluindo eles)
}

gerarImpares(x, y) {
    // Imprime no console os números ímpares no intervalo de x até y (incluindo eles)
}

somarTudo(/* deverá permitir aceitar vários números como parâmetros */) {
    // A quantidade de parâmetros aqui deverá ser ilimitado
    // Returna a soma dos números passados por parâmetro
    // Utilizar o operador rest
}

descartarOsDoisPrimeiros(meuVetor) {
    /*  Utilizando o operador rest, descarte os dois primeiros valores e retorne 
        o restante.
    */
}

juntarArrays(array1, array2) {
    // Utilizando o operador Spread, crie um novo array que seja a concatenação
    // do array1 com o array2. Retorne esse array.
}

...
```

```
// Exemplo de testes (usar o console.log para imprimir os resultados abaixo)
Matematica.gerarPares(5, 200);
Matematica.gerarImpares(1, 100);
Matematica.somarTudo(1, 2, 3, 4);'
Matematica.somarTudo(1, 2, 3, 5, 10, 25, 100);
Matematica.descartarOsDoisPrimeiros([100, -5, 10, 20, 3, 9]);
Matematica.juntarArrays([4, 2], [1, 2, 3]); // retorna [4, 2, 1, 2, 3];
```

Não é necessário utilizar arrow functions em classes.

3- Crie uma arrow function que deverá fazer o uso do `Spread operator` para substituir o valor de uma propriedade em um objeto qualquer.


4- Crie uma arrow function que deverá receber um array de objetos no formato abaixo:
```
const users = [
    { id: 1, name: 'Lucas', lastName: 'Moura', createDate: '2020-10-09' },
    { id: 5, name: 'Son', lastName: 'Goku', createDate: '2019-08-07' },
    { id: 8, name: 'Mestre', lastName: 'Yoda', createDate: '2015-10-10' },
];

console.log(formatUsers(users));
```

Deverá retornar um novo array com os objetos mapeados (`map`):
```
[
    { fullName: 'Lucas Moura', createDate: '09/10/20' },
    { fullName: 'Son Goku', createDate: '07/08/19' },
    { fullName: 'Mestre Yoda', createDate: '10/10/15' },
]
```

5- Utilizando o array do exercício anterior, faça uma busca qualquer (ex: por `id`) que deverá utilizar a função `find` (com arrow function). Caso o usuário tenha sido encontrado, deverá exibir uma mensagem no console dizendo que o usuário foi encontrado. Também deverá exibir uma mensagem se o usuário não for encontrado. 

