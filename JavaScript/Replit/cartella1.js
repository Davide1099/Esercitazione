// scrivere una funzione chiamata between che
// dati due numeri a e b in ingresso
// ritorni un array che contiene tutti i numeri compresi tra a e b, estremi esclusi

let array = [];
function between(a, b) {
  for (let i = ++a; i < b; i++) {
    array.push(i);
  }
  console.log(array);
}

between(0, 10);

// scrivere una funzione chiamata biggerString che
// date due stringhe in ingresso
// ritorni la piu' lunga

function biggerString(a, b) {
  if (a.lenght > b.lenght) {
    return a;
  } else {
    return b;
  }
}

let string1 = "hello";
let string2 = "buongiu";
let result = biggerString(string1, string2);

console.log(result);

// scrivere una funzione chiamata countNoSpaces che
// data una stringa come parametro
// ritorni un intero n che rappresenti i caratteri presenti nella
// string passata, senza contare gli spazi

function countNoSpaces(string) {
  let space = string.trim();
  console.log(space.length);
}

let str = "     porcodio";

countNoSpaces(str);

// scrivere una funzione chiamata countUndefinedKeys che
// dato un oggetto come parametro
// ritorni un intero che rappresenti il numero di chiavi, presenti
// nell'oggetto, che hanno valore undefined o null

function countUndefinedKeys(obj) {
  let a = Object.keys(obj).map((e) => obj[e]);
  console.log(a);
  a.forEach((v) => {
    if (v == "undefined" || v == "null") {
      array1.push(v);
    }
  });
  console.log(array1);
}

let object = { chiave: "ciao", chiave1: "undefined", chiace2: "null" };
let array1 = [];
countUndefinedKeys(object);

// scrivere una funzione chiamata createArray che
// dato un numero n in ingresso
// ritorni un array lungo n che contiene tutti n

// ad esempio per 3 ritorna [3, 3, 3]
// ad esempio per 5 ritorna [5, 5, 5, 5, 5]
// ad esempio per 0 ritorna []
// ad esempio per -1 ritorna []

function createArray(n) {
  let array2 = [];
  for (let i = 0; i < n; i++) {
    array2.push(n);
  }
  console.log(array2);
}

createArray(5);

// scrivere una funzione chiamata even che
// dato un array di numeri in ingresso
// ritorni un array che contiene solo i numeri pari

function even(arr) {
  let arreven = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % /*modulare(diviso)*/ 2 == 0) {
      arreven.push(arr[i]);
    }
  }
  console.log(arreven);
}

let array3 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
even(array3);

// scrivere una funzione chiamata isDivisible che
// dato un numero a e un numero b
// ritorni true se a e' divisibile per b, false altrimenti

function isDivisible(a, b) {
  if (a % b == 0) {
    return true;
  } else {
    return false;
  }
}

let a = isDivisible(0, 5);
console.log(a);

// scrivere una funzione chiamata isInArray che
// dato un array di numeri e un numero in ingresso
// ritorna true se il numero e' presente nell'array
// false altrimenti

function isInArray(n, ns) {
  if (n.includes(ns)) {
    return true;
  } else {
    return false;
  }
}
let array4 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let b = isInArray(array4, 10);
console.log(b);

// scrivere una funzione chiamata isInString che
// date due stringhe in ingresso
// ritorna true se la seconda stringa e' contenuta nella prima
// false altrimenti

function isInString(s, t) {
  if (s.includes(t)) {
    return true;
  } else {
    return false;
  }
}

let c = isInString("ciao come", "porcodio");
console.log(c);

// scrivere una funzione chiamata larger che
// dati due numeri a e b che ritorna il maggiore

function larger(a, b) {
  let d = Math.max(a, b);
  console.log(d);
}
larger(0, 20);

// scrivere una funzione chiamata lessThan che
// dati due numeri a e b che ritorna true se a e' minore di b
// false altrimenti

function lessThan(a, b) {
  if (a < b) {
    return true;
  } else {
    return false;
  }
}
let n = lessThan(130, 20);
console.log(n);

// scrivere una funzione chiamata stringConcat che
// date due stringhe
// ritorni una stringa risultato della concatenazione
// delle due, con in mezzo il simbolo #

// ad esempio per "link" e "query" ritorna "link#query"

function stringConcat(a, b) {
  let h = a.concat("#", b);
  console.log(h);
}

stringConcat("link", "query");

// scrivere una funzione chiamata sum che
// dato un array di numeri in ingresso
// ritorni la somma dei numeri contenuti nell'array

function sum(arr) {
  let a = 0;
  for (let i = 0; i < arr.length; i++) {
    a += arr[i];
  }
  console.log(a);
}

let array5 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
sum(array5);