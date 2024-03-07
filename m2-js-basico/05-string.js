let umaString = 'Um texto';

//imprime o valor da string
console.log(umaString);

//exibe o caracter da posição 3 da string
console.log(umaString[3]);

//exibe o caracter da posição 6 da string
console.log(umaString.charAt(6));

//concatena string
console.log(umaString.concat(' ', 'grande'));

//retorna o índice no qual a palavra indicada começa
console.log(umaString.indexOf('texto'));

//retorna o índice no qual a palavra indicada começa, a partir do índice indicado no segundo argumento
console.log(umaString.indexOf('texto', 4));

//retorna o índice no qual a palavra/caracter indicada começa, a partir do índice indicado no segundo argumento (de trás pra frente)
console.log(umaString.lastIndexOf('t', 4));

//substitue um trecho do texto. Neste caso substitue 'Um' ou 'Outro'
console.log(umaString.replace('Um', 'Outro'));

//substitue todos os trechos indicados do texto. Neste caso substitue 'Um' ou 'Outro'
console.log(umaString.replaceAll('Um', 'Outro'));

//pegar um trecho do texto
console.log(umaString.slice(4, 7));

//divide a string e coloca as parte em um Array. neste caso está separando as palavras que fica entre expaço e colocando cada palavra em um array.
console.log(umaString.split(' '));

//todas as letras minúsculas
console.log(umaString.toLowerCase());

//todas as letras maiúsculas
console.log(umaString.toUpperCase());