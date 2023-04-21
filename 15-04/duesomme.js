// scrivere una funzione data in ingresso un array e un numero ritorna gl'indici la cui la somma fa quel numero 

// pseudocodice
 
// ALBERTO

// ho una funzione che prende in ingresso un array ARR e un numero N
// creo un primo ciclo che visitera' tutti gli elementi, indice I
//   creo un secondo ciclo che cerchera' il "compagno", partendo una posizione a dx, indice J
//     se il numero puntato da I sommato al numero puntato da J == N
//       allora ritorno [I, J]
// se arrivo qui vuol dire che non ho trovato un compagno e ritorno []

function numbers( arr, n ) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i +1; j < arr.length; j++) {
            if ((arr[i] + arr[j]) == n ) {
                return [i, j]
            }
        }
        
    }
    return []
}
console.log( numbers( [10, 20, 30, 40, 50], 80) );

// scrivere una funziona che prende in ingresso una stringa che contiene un numero in notazione romana, deve tradurlo in notazione araba 

// pseudocodice 

// creo una funzione 
// come parametro di ingresso ha una striga 




// dato un array a1 con valori [10, 'true', true, 20, 'js', 4]
// usare un .foreach per calcolare la somma degli elementi numerici e stamparla in aoutput 


// creare un array 
// prendere soltanto i valori numerici all'interno dell'array 
// sommare i valori presi 
// stamparli 

const a1 = [10, 'true', true, 20, 'js', 4]

function sum(arr) {
    arr += arr
}

a1.forEach(typeof numbers, sum(arr) )
