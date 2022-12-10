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

const numbers = [5, 8, 10, 23, 48, 60]

for(const number of numbers) {
    if((number / 5) % 2==0) {
        console.log(`liczba ${number} jest parzysta`);
    }
    else {
        console.log(`liczba ${number} nie jest parzysta`);   
    }
}