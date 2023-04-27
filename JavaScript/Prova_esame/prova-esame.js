// esercizio 1 


// scrivere una funzione che prende in ingresso 3 stringhe
//      1. 'ciao, come vuoi ?'
//      2. 'come' (essa cerchera la parola nel testo)
//      3. 'cazzo' (sara la parola che sostituira la stringa 2.)
// prendere le stringhe 2. - 3. e le tolgo gli spazi estremi 
// creo un if che se la stringa 2. e contenuta nella stringa 1. la sostituisco 
// stampo la frase nuova

// non so come togliere gli spazi interni per verificare che sia una sola parola e non una frase 

function replaceWord(phrase, findWord, replaceWor) {
    let a = findWord.trim()
    let b = replaceWor.trim()
    if (phrase.includes(a)) {
        console.log(phrase.replaceAll(a, b));
    }
}
let phrase = "ciao,cosa vuoi ?"
let findWord = "         cosa        "
let replaceWor = "        cazzo       "
replaceWord(phrase, findWord, replaceWor );
  

// creare una funzione che prende in ingresso un array 
// bisogna iterare sull'array per andare a prendere gli oggetti 
// bisogna andare a aprendere all'internp dei mie oggetti la chiave di tipo 'type' 
// se gli oggetti hanno questo tipo di valore torneranno questo : 
// 'object' => {}
// 'array' => []
// “number” => 0
// “boolean” =>  false
// 'string' => ''


function valueDefault(arr) {
    arr.forEach(element => {
        let b = element.type
        let a = Object.keys(element);
        if (b == 'boolean' ) {
            console.log(b.replaceAll(b,'false'));
        }
        if (b == 'string') {
            console.log(b.replaceAll(b,' '));
        }
        if (b == 'number') {
            console.log(b.replaceAll(b,0));
        }
        if (b == 'object') {
            console.log(b.replaceAll(b,{}));
        }
        if (b == 'array') {
            console.log(b.replaceAll(b,[]));
        }
    })
}

let a = [
    {
        'maggiorenne': null,
        'type': 'boolean'
    },
    {
        'nome': null,
        'type': 'number'
    },
    {
        'cognome': 'Rossi',
        'type': 'string'
    }
]

valueDefault(a)
