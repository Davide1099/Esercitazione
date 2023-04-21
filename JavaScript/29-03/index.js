// esercizio 1
let a = [ 40, 50, 60, 70]

        // sbagliato
console.log(a[3], a[2], a[1], a[0]);

        // corretto
for (let i = a.length -1; i >= 0; i--){ 
  console.log(a[i]);
}


// esercizio 2
  /*creare una variabile array 
  crontolla all'interno del mio array l'ultima ,lettera
  stampa solo i miei indici che finisco con la lettera diversa da o */

let b = [ 'mario', 'luigi', 'peach', 'daisy' ]
          // primo modo 
for (let i = 0; i < b.length; i++) {
  let valoreCorrente = b[i]
  let lunghezzaValoreCorrente = valoreCorrente.length - 1
  let ultimoCarattere = valoreCorrente.charAtlunghezzaValoreCorrente

  if(ultimoCarattere != 'o')
  console.log(valoreCorrente);
}
          //secondo modo 
for (let i = 0; i < b.length; i++)
  if(b[i].charAt( b[i].length - 1 ) != 'o') console.log( b[i] );

  for (let i = 0; i < b.length; i++){
    if(b[i].charAt( b[i].length - 1 ) != 'o') 
  console.log( b[i] );
}
          // terzo modo
for (let i = 0; i < b.length; i++) {
  if (b[i].charAt( b[i].length - 1 ) == 'o') {
  } else {
    console.log( b[i] );
  }
}


// esercizio 3:
  /*creare una variabile che contenga il seguente array
  [ 'mario', 'luigi', 'peach', 'daisy' ]
  stampare in output:
  DY
  PH
  LI
  MO
  (la prima e l'ultima lettera di ogni valore dell'array in senso invertito) */

for (let i = b.length -1; i >= 0; i--) {
  let max = b[i].charAt(0) + b[i].charAt(b[i].length -1)
  console.log(max.toUpperCase());
  // o si puo fare anche cosi 
  console.log((b[i].charAt(0) + b[i].charAt(b[i].length -1)).toUpperCase());
}


// esercizio 4 
  /*
  creare una variabile che contenga il seguente array
  [ 'mario', 'stefania', 'luca', lee' ]
  stampare in output SOLO il nome più lungo tra quelli presenti nell'array (se i valori dell'array cambiano, anche il risultato cambia senza alterare l'algoritmo)
  */
let lables = [ 'anna', 'giovanni', 'piero', 'annamari']
let currentMaxlenght = lables[0].length
let currentName = lables[0]
let result =[lables[0]]

for (let i = 1; i < lables.length; i++) {
  if (lables[i].length > currentMaxlenght ) {
    result = []
    currentMaxlenght = lables[i].length
    currentName = lables[i]
    result.push(currentName)
  } else if(lables[i].length == currentMaxlenght){
    currentName = lables[i]
    result.push(currentName)
  }
}
 console.log(result);
 //  devo chidergli se il raggionamento è giusto 


// esercizio 5 
                    // ADDIZIONE
  /*creare una variabile che contenga il seguente array
  [17, 5, 87, 14]
  stampa in output la somma totale di tutti i numeri contenuti nell'array nella modalità più modulare. */

// const debug = true/false     /*questo serve per verifica al programmatore con true mi stampa tutto ma con false mi stampa solo il risultato e gli altri li toglie */
let x = [17, 5, 87, 14]
let somma = 0         
for (let i = 0; i < x.length; i++) {  
  somma += x[i]     // somma = somma + x[i]

    /* if (debug) {
        console.log(somma);
    } */         // questo serve per verifica al programmatore
}
console.log(somma);

// esercizio 6 
// Date 3 stringhe con valori a piacere, stampare in output quante delle tre stringhe realizzate iniziano con la lettera 'a'

          // primo modo (non dinamico)
let stringa1 = 'ciao'
let stringa2 = 'bla'
let stringa3 = 'aaaaaa'
let plus = 0 
if (stringa1.charAt(0) =='a')
    plus += 1
if (stringa2.charAt(0) =='a')
    plus += 1
if (stringa3.charAt(0) =='a')
    plus += 1
console.log(plus);

          // secondo modo (dinamico)
let stringhe = ['ciao', 'bla', 'aaaa', 'aaaaaa', 'jhbwevwh', 'aasdfwh']
let cont = 0
for(let i = 0; i < stringhe.length; i++) {
    if (stringhe[i].charAt(0) =='a')
        cont += 1
}
console.log('ci sono ' + cont + ' stringhe che iniziano con la lettera a');



function invertString(str) {
    if (typeof str === 'string') {
      return str.split('').reverse().join('');
    } else if (typeof str === 'number') {
      return str * 10;
    } else {
      return 'errore';
    }
  }
  
  console.log(invertString('javascript')); // tpircsavaj
  console.log(invertString('console')); // elocsnoC
  console.log(invertString('anna')); // anna
  console.log(invertString(100)); // 1000
  console.log(invertString(true)); // errore
  
