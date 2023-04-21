
// esercizi 1 
function ope(stringa, n1, n2) {
    if (stringa == '+') {
        return n1+n2
    } else if (stringa == '-'){
        return n1-n2
    } else if (stringa == '*' || stringa == 'x') {
        return n1 * n2 
    } else if (stringa == '/') {
        return n1 / n2
    } else {
        return 0
    }
}
console.log(ope('+', 10, 20));
console.log(ope('-', 10, 20));
console.log(ope('*', 10, 20));
console.log(ope('x', 10, 20));
console.log(ope('/', 10, 20));
console.log(ope(10, 20));

// esercizio 2 
function invertiString(stringa) {
    if (typeof stringa == 'string'){
        let x = []
        for (let i = stringa.length-1; i >= 0; i--) {
            x.push(stringa[i])
        }
        console.log(x);
    } else if (typeof stringa == 'number'){
        stringa *= 10
        console.log(stringa);
    } else{
        console.log('error');
    }
}
invertiString('javascript')
invertiString('console')
invertiString('anna')
invertiString(100)
invertiString()

// esercizio 3
function xRayArray( a ) {
    console.log('sto analizzando il seguente array: ' + a);
    // step 1: lunghezza
    if( typeof a == 'object' )
        console.log( 'Lunghezza array: ' + a.length );
    else if( typeof a == 'string' )
        console.log( 'l elemento non è un array, ma una stringa' );
    // step 2: solo numeri o meno
    let onlyNumbers = true
    for(let i = 0; i < a.length; i++) {
        if( typeof a[i] != 'number' ) {
            onlyNumbers = false
        }
    }
    if( a.length == 0 ) {
        console.log('l array non contiente nessun elemento');
    }
    else {
        if( onlyNumbers ) {
            console.log('l\'array contiene solo numeri');
        }
        else {
            console.log('l\'array non contiene solo numeri');
        }
    }
    // step 3
    if( typeof a == 'object' ) {
        if( a.length == 0 ) {
            console.log( 'l array è vuoto' );
        }
        else {
            console.log('l array non è vuoto');
        }
    }
    // step 4
    if( typeof a == 'number' || typeof a == 'string' || typeof a == 'boolean' ) {
        console.log( 'non è un array, ma è un ' + (typeof a) );
    }
    else {
        console.log( 'è un array' );
    }
    console.log('-----------------');
}

xRayArray( [10, 20, 30] )
xRayArray( [] )
xRayArray( ['ciao', 100] )
xRayArray( 'ciao' )

// esercizio 4
 function isPalindrome(str) {
    let count = 0
    let j = str.length
    for (let i = 0; i < str.length; i++) {
        j--
        if (str[i].toLowerCase() == str[j].toLowerCase()) {
            count ++
        } else {
            console.log( 'non è palindroma' );
        }
        if (count == str.length) {
            console.log( 'è palindroma' );
        }
    }
 }
isPalindrome( 'anna' )
isPalindrome( 'itopinonavevanonipoti' )
isPalindrome( 'ugo' )

function isPalindrome1 (word) {
    let stringInvert = ''
    for (let i = word.length -1; i >= 0; i--){
        stringInvert += word.charAt(i)
    }
    if (stringInvert == word) {
        console.log(word + ' non è palindroma');
    } else {
        console.log(word + ' è palindroma');
    }
}
isPalindrome1( 'anna' )
isPalindrome1( 'itopinonavevanonipoti' )
isPalindrome1( 'ugo' )

// esercizio 5 
function evenInMatrix(m) {
    let evenCounter = 0
    for(let i = 0; i < m.length; i++) {
        for(let j = 0; j < m[i].length; j++) {
            if( m[i][j] % 2 == 0 ) {
                evenCounter++
            }
        }
    }
    console.log( 'in questa matrice ci sono ' + evenCounter + ' numeri pari' );
}
const m1 =  [
    [1, 3, 3],
    [2, 3, 3],
    [4, 9, 8]
]
const m2 = [
    [2, 1, 6],
    [3, 4, -10],
    [9, 9, 240]
]
evenInMatrix(m1)
evenInMatrix(m2)