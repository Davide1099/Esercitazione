
// esercizio 1
let a = 'cisa'
 console.log(a);
 console.log(a.charAt(0) + '_' + a.charAt(3));
//  devo chidere perche mi ha messo cosi 
 console.log( a.charAt(0) + '_' + a.charAt(a.length - 1) );

//  esercizio 2
let b = 'pooghc'
let c = 'porc'
let d = 'co'

if( b.length < c.length ) {
    if( b.length < d.length ) {
        console.log(b);
    }
} else {
    if( c.length < d.length ) {
        console.log(c);
    } else {
        console.log(d);
    }
}
//  esercizio 3 

const x = 10
const y = 11 
const z = 4 
let max
if (x > y) {
    if (x > z) {
        max = x
    } else {
        max = z 
    }
} else{
    if (y > z){
        max = y 
    } else {
        max = z
    }
}
console.log(max);