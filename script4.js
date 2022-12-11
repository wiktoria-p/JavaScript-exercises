// Ćwiczenie `for`Stwórz tablicę z nazwami miastZa pomocą pętli for (nie for of) w konsoli wypisz miasta w zdaniu:`To miasto nazywa się: [nazwa_miasta]`

// const cities = ['Krakow', 'Katowice', 'Rybnik']

// for (let i = 0; i<cities.length; i++) {
//     console.log(`To miasto nazywa się ${cities[i]}`);
// }

// Stwórz zmienną xiprzypisz do niej wartość 0Stwórz pętlę while, która będzie zwiększała x o 2 (2, 4, 6, 8, 10).Pętla ma się wykonywać do momentu, w którym x będzie większe lub rowne 10

// let x = 0

// while (x < 10) {
//     x=x+2
//     console.log(x)
// }

// Ćwiczenie ` do … while`
// Stwórz zmienną x i przypisz do niej wartość 20
// Stwórz pętlę do … while, która będzie zmniejszała x o 3.
// Pętla ma się wykonywać do momentu, w którym x będzię większy od 0
// W konsoli wypisz tylko ostatnią cyfrę, którą zwróci nam pętla!/

// let x = 20

// do {
//     x=x-3
// } while (x>3)
// console.log(x);

// Ćwiczenie `for of` 
// Stwórz tablicę z liczbami 5, 8, 10, 23, 48, 60
// Stwórz pętlę for of, która podzieli liczby przez 5 I wypisze je w konsoli.
// `niemożliwy` dodatek :D 
// Za pomocą for of oraz instrukcji warunkowej if, sprawdź które cyfry I
// liczby są parzyste, a które nie.
// W konsoli wypis: 
// Liczba [liczba] jest parzysta.
// Liczba [liczba] jest nieparzysta.

// const numbers = [5, 8, 10, 23, 48, 60]

// for(const number of numbers) {
//     if((number / 5) % 2==0) {
//         console.log(`liczba ${number} jest parzysta`);
//     }
//     else {
//         console.log(`liczba ${number} nie jest parzysta`);   
//     }
// }

// 1) Stwórz przykładową tablicę zawierającą nazwy zwierząt, a następnie dodaj i usuń elementy na początku.​
// .unshift()​
// .shift()​
// 2) Stwórz przykładową tablicę zawierającą nazwy producentów sprzętu komputerowego, a następnie dodaj i usuń elementy na końcu.​
// .push()​.pop()

// let animals = ['cat', 'dog', 'bird', 'tiger']
// animals.unshift('hamster')
// animals.shift()

// let cumputers = ['acer', 'asus', 'microsoft']
// computers.push()
// computers.pop()

// const numbers = [1, 2, 3, 4]

// function termos(mleko) {
//     return mleko*2
// }

// const newNumbers = numbers.map(termos)

// console.log(numbers);
// console.log(newNumbers);

// const list = [1, 2, 2, 'hello', 5, 7, 'bye']
// const list2 = [2, 5, 7, 'bonjour', 3, 4, 'lol']

// const newList = list.concat(list2)
// console.log(newList);

// const abc = ['a', 'b', 'c']

// console.log(abc);
// console.log(...abc);

// const christmasThinks = ['tree', 'lights', 'presents']
// console.log(...christmasThinks);

// const colors = ['red', 'black', 'blue']
// const names = ['Wiktoria', 'Rafał', 'Paweł']
// const both = [...colors, ...names]
// console.log(both);

// const christmasThinks = ['tree', 'lights', 'presents', 'cookies', 'candles']
// // console.log(christmasThinks.slice(4));
// christmasThinks.splice(2, 2, 'candies')
// console.log(christmasThinks);
