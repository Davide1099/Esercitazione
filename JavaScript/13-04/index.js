
// scrivere una funzione che prende in ingresso una stringa e ritorna il numero di occorenza di ogni singolo carattere della stringa  

// creo una funzione che prende una stringa 
// creo una mappa
// creo un ciclo della lunghezza della stringa 
// nel ciclo creo un if (verifico se string[i] == )


console.log(count('abaco'));

function count(string) {
    const map = new Map( )
    for (let i = 0; i < string.length; i++) {
        if (map.has(string[i])) {
            map.set(string[i], map.get(string[i])+1 )
        } else {
            map.set(string[i], 1)
        }
        
    }
    return map
}
count('abaco')

// scrivere una funzione che data in ingresso una stringa rimuove tutti i caratteri duplicati 

// creo una funzione
// creo un ciclo che corre la stringa da sinistra a destra 
// 



// creo una funzione chiamata chessboard
// essa prrende in ingresso un numero chessboard(l)
// l deve essere il numero di posti dedicati per riga 
// creo un ciclo for per far alterare fino a una altezza di l 
// allinternio devo dargli una lunghezza di l 
// poi devo incatenarli che uno deve essere diverso all'altro guardango anche la riga sopra 
// dandogli una partenza 

// creo una funzione chiamata chessboard
// essa prrende in ingresso un numero chessboard(l)
// creo due variabili che contengono '#' + ' '
// creo una variabile contatatore dove inserira quello che stampa if 
// creo  un ciclo che mi limita l'altezza delle righe in concole (l)
// creo una lunghezzza della righa che deve essere lunga (l)
// creo un if che se (la stringa e uguale a quello di prima) mi entra e stampa il simbolo contrario 
// return la variabile contatore 


// per stampare una riga :
// stampa una riga no una chiacchiera semplifica il problema 
// inizio con il cancelletto e lo memorizzo in riga 
// ultimo è true
// ciclo da 0 a l escluso
//     metto dentro la riga un cerchio se ultimo è true 
//     metto dentro la rriga un cancelletto se ultimo è false 
//     inverto ultimo 
// ho finito 

//  end = false in modo tale che quando arriva al if(end) if(false) e quindi va sul else e il contatore riga inserisce come prima valore #
// arriva end = !end che equivale che il mio end cambia false = contrario di false (false = true) cambia il mio end e 
// quando arriva su if ora è vero ed entra e mi stampa lo spazio 
function row(l){
    let end = false
    let riga = ' '
    for (let i = 0; i < l; i++) {
        if (end){
            riga += ' '
        } else {
            riga += '#'
        }
        end = !end
    }
    return riga
}
console.log(row(5));

console.log('------------------------');

//  disegno la schacchiera 
//  utilizzo row chiamando l volte 
// detto in altro modo : ciclo l volte e ad ogni iterazione chiamo row passandogli e stampo il risultato 
function chessboard(l) {
    for (let i = 0; i < l -1 ; i++) {
        console.log(row(l));
    }    
}

console.log(chessboard(5));


// data una stringa in ingresso la funzione deve calcolare 
// la sottostringa palindroma piu lunga
// es. abba 1abba1 c ''

// PSEUDOCODICE 
// data in ingresso una funzione che prende in ingresso un variabile stringa
// con un ciclo itero la stringa partendo dall'ultimo carattere della stringa
// inverto la stringa 
// confronto la stringa con quella data in funzione
// a ogni ciclo scrivo la lettera corrente del ciclo in una nuova variabile 

function palindromo(name) {
    let pali = ''
    for (let i = name.length -1; i >= 0; i--) {
        pali += name[i]
    }
    return pali 
}

function name(barba) {
    // if (params == palindromo(name)) {
    //     return true 
    // } else {
    //     return false
    // }
    return barba == palindromo(barba)
}


