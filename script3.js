// Składnia `ifologii`
// if (10 == 10) {
// console.log("to co się wykona jeśli prawda")
// }
// else {
// console.log("to co się wykona jeśli fałsz")
// }
// `ifologia stosowana` - jednolinijkowy if
// const num3 = 30
// const result = (num3 > 10) ? 'jest' : 'nie jest’
// console.log(result)

// ćwiczenie Stwórz zmienne x = 100 oraz y = 50 Napisz if’a, który sprawdzi czy x jest większe od y Wynik zapisz za pomocą template string np. wartość 100 jest większa od 50
// const x = 100
// const y = 50

// if(x>y) {
//     console.log(`Wartość ${x} jest większa od ${y}`);
// }

// ćwiczenie Stwórz zmienną color i przypisz do niej wartość `blue`. Stwórz zmienną newColor i przypisz do niej wartość `red`. Za pomocą if’a sprawdź czy zmienna color przechowuje taką samą  wartość, co zmienna newColor. jeśli tak: wypisz w konsoli tekst kolory się zgadzają jeśli nie: wypisz w konsoli tekst kolory się nie zgadzają

// const color = 'blue'
// const newColor = 'red'

// if(color==newColor) {
//     console.log('kolory się zgadzają');
// }

// else{
//     console.log('kolory się nie zgadzają');
// }

// ćwiczenie b 
// Stwórz zmienną a i przypisz do niej wartość 8456. Stwórz zmienną b i przypisz do niej wartość 4654. Za pomocą instrukcji warunkowej sprawdź:
// Czy a jest większy od b,
// Czy a jest równy b,
// Czy a jest mniejszy od b,
// W zależności od wyniku w konsoli wyświetl:
// a > b
// a = b
// a < b

// const a = 8456
// const b = 4654

// if(a>b) {
//     console.log('a>b');
// }

// if(a==b) {
//     console.log('a=b');
// }

// if(a<b) {
//     console.log('a<b');
// }

// Ćwiczenie - użyj `switch`
// Stwórz zmienną promo i przypisz do niej wartość 20%. Strórz 3 case’y: 10%, 20%, 30% W konsoli wypisz zdanie „Dziś mamy 20% zniżki!” Przygotuj zdania dla pozostałych promocji. Przygotuj zapasowe zdanie na przypadek innej wartości promocji.

// let promo = '20%'

// switch (promo) {
//     case '10%':
//         console.log('dzis mamy 10% znizki');
//         break;
//     case '20%':
//         console.log('dzis mamy 20% znizki');
//         break;
//     case '30%':
//         console.log('dzis mamy 30% znizki');
//     default:
//         console.log('dzisiaj nie ma promocji');  
//          break;         
// }




// Ćwiczenie :7
// Stwórz zmienną x i przypisz do niej wartość 10 Za pomocą operatora warunkowego sprawdź czy wartość przypisana do x jest parzysta W konsoli wpisz odpowiedni komunikat np. liczba jest parzysta

// const x = 10
// if(x/2) {
//     console.log('liczba jest parzysta');
// }

// Ćwiczenie 8)
// Stwórz zmienną x i przypisz do niej wartość 50
// Za pomocą instrukcji warunkowej sprawdź czy x jest większy lub równy 
// 100, jeśli jest – wypisz w konsoli x jest duży.
// Następnie sprawdź, czy x jets mniejszy niż 100 ale większy niż 30. Jeśli 
// tak – wypisz w konsoli x średni.
// Jeśli x jest mniejszy lub równy 30, wypisz w konsoli x jest mały. 

// const x = 50
// if(x>=100) {
//     console.log('x jest duzy');
// }

// if(30<x<100) {
//     console.log('x jest sredni');
// }

// if(x<=30) {
//     console.log('x jest mały');
// }

