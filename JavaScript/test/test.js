// esesrcizio 1 

// creare una funzione chiamata sumAndCompare()
// che prende in ingresso una matrice 
// creare due variaile :
//      maxSum = il numero piu alto
//      object = dove inserisco i nomi dei reparti
// creo un ciclo che itera all'interno del mio array 
// creo una variabile sum = tiene in memoria la somma
// cre un ciclo che mi itera all'interno dei miei elementi
// se il valore è una stringa allora me lo metti su un array nuovo
// se il valore è una numero mi fai la somma
// se il valore sum e maggiore al valore maxSum allora sostituisci il valore interno con sum 
// ritornami il valore piu alto maxSum

function sumAndCompare(arr) {
    let object = []
    let maxSum = 0 
    arr.forEach(departement => {
        let sum = 0
        departement.forEach(sume => {
            if (typeof sume === 'string') {
                object.push(sume)
            } else if (typeof sume === 'number'){
                sum += sume
            }
        })
        if (sum > maxSum ) {
            maxSum = sum
        }
    });
    console.log(maxSum);
}
sumAndCompare([['Cancelleria', 500, 40, 60],[ 'Servizi Igenici',1000, 1, 200],['vendite', 400, 80]])

// creare una funzione chiamata sumAndCompar()
// che prende in ingresso un oggetto
// creo un nuovo oggetto vuoto (result) che sara il mio oggetto nuovo
// creo un ciclo per andare a iterare sui miei oggetti chiamati (item)
// estraggo il parametro 'spesa' dal mio oggetto
/* con il metodo reduce vado a sommare i valori all'interno del mio array dandogli una partenza di 0 
e andando a sommare i valori*/
// se il mio nuovo oggetto ha come chiave un valore e sistente mi sommi la somma fatta 
// altrimenti ne crei una nuova 
// ritorna l'oggetto nuovo

function sumAndCompar(string) {
    let result = {}; 
    string.forEach(item => {
      let { spesa } = item;
      const sum = spesa.reduce((call, curr) => call + curr, 0);
      let { reparto } = item;
      if (result[reparto]) {
        result[reparto] += sum;
      } else {
        result[reparto] = sum;
      }
    });
    
    return result;
  }
let a = [
    {
    'reparto': 'Cancelleria',
    'spesa': [500, 40, 60],
    }, 
    {
    'reparto': 'Servizi Igenici',
    'spesa': [1000, 1, 200],
    }, 
    {
    'reparto': 'Vendite',
    'spesa': [0]
    }
]
console.log(sumAndCompar(a));

// esercizio 2

// creare una funzione che prende in ingresso una stringa


function isPazza(str) {
    if (str.includes('Church') || str.includes('mare')) {
        console.log('non e mai pazza');
    } else {
        if (str.endsWith('?!?')) {
            console.log('pazza')
        }
        if (str.includes('Cthulhu')) {
            console.log('pazza')
        }
        let firstCharat = str.charAt(0);
        if (['.', ',', '!', '?', ':', ';', '-', '~'].includes(firstCharat)) {
            console.log('pazza')
        }
    }
}
  

// esempi stringhe pazze :
isPazza('Papa’, come sta Cthulhu')
isPazza('Papa’, come sta ?!?')
isPazza('.Quando guardi a lungo nell’abisso, l’abisso ti guarda dentro.')
isPazza('Andare a rimirare');

// esempi di stringhe non pazze : 
isPazza('Lui e’ pazzo.')
isPazza('~ Pensava sempre al mare come a la mar, come lo chiamano in spagnolo quando loamano ~')
isPazza('~ Papa’, come sta Church? ~')