// const numbers = [0, 0, 1, 1, 2, 2, 2]
// const colors = ['red', 'green', 'blue', true, 123]
// const cars = [123, true, 'audi', 'bmw', 'mercedes', 'ferrari', '🤷‍♂️', '👀']

// const numbers2 = numbers.slice(2)
// console.log(numbers2);

// const numbers3 = numbers.slice(0,4)
// console.log(numbers3);

// const randomStuff = colors.splice(0, 3)
// console.log(randomStuff);

// const newCars = cars.splice(2, 4, 'test')
// console.log(cars);
// console.log(newCars);

// const numbers = [0, 23, 48, 175, 2, 34, 11]

// function number(x) {
//     return x%2!==0
// }
// console.log(numbers.filter(number));

// const numbers = [2,23,48,175,2,34,11]
// numbers.forEach(number => console.log(number*2))

// console.log(numbers.includes(23));
// console.log(numbers.indexOf(34));

// const letters = ['c', 'd']
// letters.unshift('a', 'b')
// letters.push('e', 'f')

// console.log(letters);
// console.log(letters.includes('c'));

// const numbers = [2,3,1,4,8,5,9,754,390]
// const food = ['chicken', 'chips', 'fish', 'carrot', 'potato', 'pizza']
// const mix = [...food, ...numbers]
// console.log(mix);

// const numbers = [1,5,13,26,48]
// function multiply(x){
//     return x*5
// }
// const number = numbers.map(multiply)
// console.log(number);

// for (const num of number) {
//     if (num%2===0){
//         console.log(`${num}`);
//     }
// }
 
// const color = ['black']
// color.unshift('white')
// color.push('blue')

// console.log(color);

// for(let i = 0; i<color.length; i++) {
//     console.log(`Mój ulubiony kolor to ${color[i].charAt
//         (0).toUpperCase() + color[i].slice(1)}`);
// }

// Stwórz stringa (jednego) z rakietami ”SLS, Falcon, Starship, Ariane 5, Delta Heavy”​

// Za pomocą metody na stringu zrób z niego tablicę I przypisz do nowej zmiennej (jest taka metoda, która ma w nazwie coś wspólnego z dzieleniem/podziałem)​

// Za pomocą operatora warunkowego sprawdź czy sługość tablicy jest większa niż 3. Jeśli tak wypisz w konsoli “Jest OK” ,jeśli nie – wydrukuj w konsoli “Nie jest OK”​

// Za pomocą instrukcji warunkowej I odpowiedniej metody sprawdź, czy tablica zawiera rakietę SLS.​
// ​
// Jeśli tak – za momocą odpowiedniej metody dodaj rakietę “Saturn V”​
// Jeśli nie za pomocą odpowiedniej metody usuń ostatni element z tablicy.

// const rocket = 'SLS, Falcon, Starship, Ariane 5, Delta Heavy'
// const newRocket = rocket.split(',')
// console.log(newRocket);
// if (newRocket > 3) {
//     console.log(`jest ok`);
// }
// else {
//     console.log('nie jest ok');
// }

// if(newRocket.includes('SLS')) {
//     newRocket.push('Saturn V')
// }
// else {
//     newRocket.shift(5)
// }
// console.log(newRocket);

