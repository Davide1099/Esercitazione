// scrivere una funzione AND 
// che si comporta come gli and nei booleani (&&)   

// pseudocodice 
// noi abbiamo un array 
// prendiamo il primo elemento del array e lo mettiamo in una variabile = result 
// cicliamo sull'array i restenti elementi dell'array e li mettiamo in AND con il result 
// il risultao del AND andra messo ogni volta su result 

function AND(...t) { // ...t = è un array in posizione 0 = true e in posizione 1 = false
    let result = t[0]
    for (let i = 1; i < t.length; i++) {
        result = result && t[i]
    }
    console.log(result);
}

AND(false, true, false)

// scrivere una funzione
// che prende in ingresso un oggetto 
// si devo stampare solo i seguenti valori delle seguenti chiavi 
// chiave 1 e chave 2 a prescrindere da quante ce ne sono in un oggeto 
// non si possono utilizzare gli if e l'operatore punto 
// cercate di utilizzare lo spred operatione 

function print( {chiave1, chiave2} ) {  // destructuring
    console.log(chiave1, chiave2);
}

function print2(obj) {
    let {chiave1, chiave2} = obj // destructuring
    console.log(chiave1, chiave2);
}
print( {chiave1: 1, chiave2: 2, chiave3: 3} )
print2( {chiave1: 1, chiave2: 2, chiave3: 3} )