/*
Добавление переменных к строкам
Точно так же, как мы можем построить строку из нескольких строк из строковых литералов , мы также можем добавлять переменные к строке, используя +=оператор плюс равно ( ).

Пример:

const anAdjective = "awesome!";
let ourStr = "freeCodeCamp is ";
ourStr += anAdjective;
ourStrбудет иметь значение freeCodeCamp is awesome!.

Установите someAdjectiveстроку из не менее 3 символов и добавьте ее к myStrоператору +=.

*/

// Change code below this line
const someAdjective = "intrigues";
let myStr = "Learning to code is ";
myStr += someAdjective

console.log(myStr)