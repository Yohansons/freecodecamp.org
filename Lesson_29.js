/*
Объединение строк с помощью оператора «плюс равно»
Мы также можем использовать +=оператор для присоединения строки к концу существующей строковой переменной. Это может быть очень полезно, чтобы разбить длинную строку на несколько строк.

Примечание: следите за пробелами. Конкатенация не добавляет пробелов между конкатенированными строками, поэтому вам нужно будет добавить их самостоятельно.
Пример:

let ourStr = "I come first. ";
ourStr += "I come second.";
ourStrтеперь имеет значение строки I come first. I come second..

Создайте myStrнесколько строк, соединив эти две строки: This is the first sentence.и This is the second sentence.используя +=оператор. Используйте +=оператор аналогично тому, как он показан в примере, и убедитесь, что между двумя строками есть пробел. Начните с присвоения первой строки myStr, затем добавьте вторую строку.
*/
let myStr = "This is the first sentence. ";
myStr += "This is the second sentence."