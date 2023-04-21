// esercizio 1
let a = 'ciao'
let b = 'come stai'
let c = 'la stringa più lunga è: '
let d = 'la stringa è uguale'
let e
if (a.length > b.length){
    console.log(c + a);
} else {
    console.log(c + b);
}
// esercizio 1 + corretto
if (a.length > b.length) {
    e = c + a;
} else if ( b.length > a.length) {   //se invece inverto la x con la y devo cambiare il maggiore in minore
    e = c + b;
} else{
    e = d
}
console.log(e);

// esercizio 2 

let word = 'ciaoo'

console.log( 
    word.charAt(4) + '-' + 
    word.charAt(3) + '-' +
    word.charAt(2) + '-' +
    word.charAt(1) + '-' +
    word.charAt(0));

// esercizio 3

let x = 10 
let y = 0 

if ( x >= y) {
    console.log('green');
    if (y == 0) {
        console.log('red');
    }
} else{
    console.log('blue');
}

// esercizio 4

let word1 = 'kiwi'
let word2 = 'banana'

console.log( word1 + word2);

console.log(word1.charAt(0) + word1.charAt(2) + '_' + word2.toUpperCase());

// esercizio 5

let k = 0
let g = 10
let l = 'ciao'

if (g < k) {
    console.log(g);
}else if ( k < l.length) {
    console.log(k);
    if ( k == 0 ) {
        console.log('red');
    }
}else{
    console.log(l.length);
}