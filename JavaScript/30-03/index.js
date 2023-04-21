
// esercizio 1
let a = ['ciao', 'buongiorno','miebo', 'comeva']

for (let i = a.length -1; i >= 0 ; i--) {
console.log(a[i]);
    let stringaInvertita = ''
    for (let j = a[i].length-1; j >= 0; j--) {
        stringaInvertita += a[i][j]  // a[i].charAt(j)
    }
    console.log(stringaInvertita);
}
//  chiedere il prof il ragionamento giusto 

// esercizio 2 

let b = [1, -2, 3, -4, 5, -6, 7, -8, 9, -10]
let positive = 0
let negative = 0
let even = []
let odd = []
for (let i = 0; i <= b.length -1 ; i++) {
    if (b[i] >= 0) {
        positive += 1 
    } else {
        negative += 1
    } 
    if (b[i] % 2 == 0) {
        even += b[i] 
    } else {
        odd += b[i]
    }
}
console.log('i positivi sono: ' + positive);
console.log('i negativi sono: ' + negative);
console.log('i pari sono: ' + even);
console.log('i dispari sono: ' + odd);

// esercizio 3

let c = ['ciao_', 'aomestai', 'grande', 'moreee_']

for (let i = 0; i < c.length; i++) {
    if (c[i].charAt(0) == 'a' || c[i].charAt(c[i].length-1) == '_') {
        console.log(c[i]);
    }
}
// ce un gruppo ha usato il contattore per far vedere quante parole iniziano con a e finisce con _ ma lo fa vedere in numeri come posso farlo vedere in fromato stringa e perche mi serve il contatore 

// esercizio 4

let f = 'ciao'
// vocale, _ , $ e Numero stampa ok 
// password not ok

for (let i = f.charAt(0); i < f.charAt(f.length -1); i++) {
    if (f[i] == '_') {

    }
}

// esercizio 5

const value = [ 15, 'ciao', 'albero', true, -150, false, 'javascript']

let stringhe = 0
let numbers = 0 
let boolean = 0 

for (let i = 0; i < value.length; i++) {
    if (typeof value[i] == 'number') {
        numbers ++
    } else if (typeof value[i] == 'string') {
        stringhe ++
    } else if (typeof value[i] == 'boolean') {
        boolean ++
    }
}
// cose il ++ cosa significa
console.log(boolean);
console.log(stringhe);
console.log(numbers);

if (stringhe > boolean) {
    if (stringhe > numbers) {
        console.log('le stringhe sono il valore piu presente ');
    } else {
        console.log('i booleani sono il valore piu presente ');
    }
} else {
    if (numbers > boolean) {
        console.log('i numeri sono il valore piu presente ');
    } else {
        console.log('i booleani sono il valore piu presente ');
    }
}
