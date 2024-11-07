function logItems(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(`${i + 1} ${array[i]}`);
    }
}
let array = ['Mango', 'Poly', 'Ajax']
logItems(array)

function calculateEngravingPrice(message, pricePerWord) {
    let count = message.split(' ').join('').length * pricePerWord;
    console.log(count)
}

calculateEngravingPrice("Hi lets count", 1)

function findLongestWord(string) {
    let words = string.split(" ");
    let longest = '';
    for (let word of words) {
        if (word.length > longest.length) {
            longest = word
        }
    }
    console.log(longest)
}
findLongestWord("not longest word")

function formatString(string) {
    if (string.length > 40) {
        console.log(string.slice(0, 40))
    } else {
        console.log(string)
    }
}
formatString("reallyloooooooooooooooooooooooooooooooooongstring")
formatString("hi")

function checkForSpam(message) {
    return message.includes("spam") || message.includes("sale");
}
console.log(checkForSpam("spam"));
console.log(checkForSpam("sale"));
console.log(checkForSpam("how are you?"));

let input;
const numbers = [];
let total = 0;

while (true) {
    input = prompt("Введіть число")
    if (input === null) {
        break;
    }

    if (isNaN(input)) {
        alert("Введіть число а не букву");
    } else {
        numbers.push(Number(input));
    }
}

for (let number of numbers) {
    total += number;
}

console.log(`Загальна сума ${total}`)


let logins = ['user1', 'admin', 'guest'];
function isLoginValid(login) {
    return login.length >= 4 && login.length <= 16;
}
function isLoginUnique(allLogins, login) {
    return !allLogins.includes(login);
}
function addLogin(allLogins, login) {
    if (!isLoginValid(login)) {
        return 'Помилка! Логін повинен бути від 4 до 16 символів';
    }
    if (!isLoginUnique(allLogins, login)) {
        return 'Такий логін уже використовується!';
    }
    allLogins.push(login);
    return 'Логін успішно доданий!';
}

console.log(addLogin(logins, 'accept'));
console.log(addLogin(logins, 'admin'));
console.log(addLogin(logins, 'usr'));
console.log(addLogin(logins, 'imsupperloooooongggggg'));
console.log(logins);
