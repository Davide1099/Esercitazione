
// ccrea una funzione getStr 
// prende in ingresso un array di stringhe 
// restituisce il valore delle stringhe 
// alla poszione due in toUpperCase() 

function getStr(arr1) {
    return arr1[2].toUpperCase()
  }
  
  let k = ['ciao', 'come', 'stai', 'pirla']
  console.log(getStr(k));
  
  
  // Creare una funzione makeObj che prende in ingresso due parametri:
  // una stringa e un numero.
  // La funzione crea e RESTITUISCE un oggetto con due proprietà: 
  //    label, che avrà come valore il valore passato come primo parametro, 
  //    rate, che avrà come valore il valore passato come secondo parametro.
  // Chiamare la funzione makeObj due volte con valori a piacere per creare e stampare in output due oggetti con i valori indicati.
  
  
  function makeObj( string, number ){
    return { label: number, rate: string}
  }
  
  console.log(makeObj('ciao', 1));
  console.log(makeObj('come', 2));
  
  // creare una funzione getMaxMinAsArray che prende in ingresso un array di 6 numeri 
  // restiuisce un array di 2 numeri: il primo, che rappresenta il numero più piccolo del primo array, e il secondo che rappresenta il numero più grande del primo array.
  // Richiamare la funzione getMaxMinAsArray con un array di 6 numeri a piacere, salvare l'array restituito dalla funzione e stampare il numero più grande e più piccolo con un apposito messaggio
  
  /*
    1 - creo la funzione che prende un array
    2 - trovo il numero piu piccolo
    3 - trovo il numero più grande
    4 - metto questi due numeri in un array e lo restituisco
    5 - chiamo la funzione con un array di 6 numeri e ottengo l'array di 2 numeri
    6 - stampo il messaggio
  */
  // step 1 
  function getMinMaxAsArray( a ) {
    if( !Array.isArray( a ) && a.length != 6 ) {
      return
    }
    // step 2
    let min = a[0], max = a[0]
    for(let i = 1; i < a.length; i++) {
       if( a[i] < min )
         min = a[i]
       if( a[i] > max )
         max = a[i]
    }
    // step 4
    return [min, max]
  }
  
  // step 5
  const numbers = [17, 5, 87, 100, 14,-10]
  const minMax = getMinMaxAsArray( numbers )
  // step 6
  console.log('il numero piu piccolo è: ' + minMax[0] + ' e il numero piu grande è: ' + minMax[1]);
  
  
  // creo la mappa m1 con le caratteristiche indicate
  // creo la mappa m2 con le caratteristiche indicate
  // faccio il primo foreach
  // faccio il secondo foreach
  // confronto le velocità massime delle due automobili e stampo ilmodellquella più veloce
  
  const m1 = new Map([
    [ 'model', 'Panda' ],
    [ 'maxSpeed', 160 ],
    [ 'price', 1000 ]
  ])
       
  const m2 = new Map([
    [ 'model', 'Audi' ],
    [ 'maxSpeed', 250 ],
    [ 'price', 50000 ]
  ])
       
  function fn(value, key) {
   return key +':'+ value
  }
       
  m1.forEach( fn )
  m2.forEach( fn )
       
  const maxSpeedM1 = m1.get('maxSpeed')
  const maxSpeedM2 = m2.get('maxSpeed')
  let macchinaPiuVeloce = null
       
  if( maxSpeedM1 > maxSpeedM2 ) {
   macchinaPiuVeloce = m1
  } 
  else {
   macchinaPiuVeloce = m2
  }
       
  console.log( 'la macchina piu veloce è: ' + macchinaPiuVeloce.get('model') );
  
  // Creare un array che è composto da 3 oggetti che rappresentano dei triangoli
  //avranno le proprietà base e altezza (numeri).
  // stampare l'area di ogni rettangolo (ad ogni iterazione)
  // con un .foreach e dopo con un for 
  
  let triangle = [
    {
      basis : 5,
      height: 10 
    },
    {
      basis : 10,
      height: 20 
    },
    {
      basis : 15,
      height: 30 
    }
  ]
  for (let i = 0; i < triangle.length; i++) {
    let area = 0 
    area = (triangle[i].basis * triangle[i].height)/2
    console.log(area);
  }
  triangle.forEach( function(element) {
    let ar = (element.basis * element.height)/2
    console.log(ar);
  })
  triangle.forEach(eleme => { console.log((eleme.basis * eleme.height)/2);})
  
  // scrivi una funzione data in ingresso un numero
  // se un numero fattoriale e uguale a 0 sara sempre 1 
  // se e un numero qualsiasi allora moltiplico il numero per il suo numero -1  
  // ritorni il fattoriale di quel numero 
  
  function fattoriale(n) {
    if (n == 0) {
      return 1;
    } else {
      return (n * fattoriale(n - 1));
    }
  }
  
  console.log(fattoriale(0));
  console.log(fattoriale(1));
  console.log(fattoriale(2));
  console.log(fattoriale(3));
  console.log(fattoriale(4));
  
  // Utilizzando un apposita strategia e utilizzando il ciclo WHILE, stampare i numeri da 20 a 15 (scalando) omettendo il numero 19
  
  let i = 20
  while (i >= 15) {
    if ( i != 19) {
      console.log(i);
    }
    i--
  }
  
  
  // Creare un array di 5 parole.
  // Iterare su questo array in 2 modi.
  // PRIMA con un while, per stampare tutte le singole parole nell'array MAIUSCOLE. In questo caso, vogliamo ciclare l'array in senso invertito.
  
  // DOPO con un foreach, per stampare tutte le parole dell'array in ordine
  
  // alterare su un array 
  
  
  function nam(params) {
    let i = params.length-1 
    while (i >= 0) {
      console.log(params[i].toUpperCase());
      i--
    }
    params.forEach(element => {
      console.log(element);
    })
  }
  
  
  let p = ['ciao', 'come', 'stai', 'hola', 'bla']
  nam(p)
  
  // creare un oggetto chiamato "language" che rappresenta un linguaggio di programmazione, e che abbia le seguenti caratteristiche:
  
  // - proprietà label, indica il nome del linguaggio
  // - proprietà tags; un array di 3 stringhe che indica le caratteristiche dell'oggetto
  // - un metodo printTags che itera sui tag dell'oggetto e li stampa con un WHILE
  // chiamare il metodo printTags per mostrare i dati in console
  
  let language = {
    label: 'javascript',
    tags: ['frontEnd', 'backEnd', 'giullariDiCorte'],
    printTags: function() {
      console.log(this.label + ' carrateristiche :');
      let i = 0 
      while (i < this.tags.length ) {
        console.log(this.tags[i]);
        i++
      }
    }
  }
  language.printTags()


// creare un array in cui occorre includere 5 dati di tipi diversi:
// - un letterale oggetto con proprietà x: 10 e y: 5
// - un numero (100)
// - una stringa ("javascript")
// - una mappa ("label" -> "sono una mappa")
// - un array [40, 50, 60]

// Iterare sull'array esterno con un foreach e...
// se l'elemento corrente è...

// un letterale oggetto, stampa la somma delle sue proprietà x e y

// un numero, controlla se è > 100 scrivi red, altrimenti blue

// una stringa, stampa il suo primo carattere

// una mappa, stampa il valore della sua proprietà "label", se ce l'ha

// un array, stampa i numeri in ordine inverso


function na(params) {
    a.forEach(elemenet => {
        if (elemenet == Object) {
          console.log(x + y);
        }
        if (elemenet == Number && elemenet > 100) {
            console.log('red');
        } else {
            console.log('blue');
        }
        if (elemenet == String) {
            console.log(elemenet.charAt(0));
        }
        if (elemenet == Map) {
            console.log(elemenet.get('label'));
        }
        if (elemenet == Array) {
            elemenet.forEach(el => {
                el.reverse()
            })
        }
    })
}
let params = [100, 
    'javascript', 
    { x: 10, y:5}, 
    [40, 50, 60], 
    new Map(arguments).set('label', 'sono una mappa')
    ]
na(params)