// scrivere una funzione chiamata addUpFromNumber che 
// dato un numero positivo in input
// ritorni la somma di tutti i numeri da 1 fino al numero passato
// ad esempio: con 4 ritornerebbe 1 + 2 + 3 + 4 = 10

function addUpFromNumber(n) {
    let w = []
    for (let i = 1; i <= n; i++) {
      w.push(i) 
    }
    let e = 0
    for (let i = 0; i < w.length; i++) {
      e += w[i]
    }
    console.log(w + '= ' + e );
  }
  
  addUpFromNumber(4)
  
  
  
                                                                                                            // giada chiedere al prof 
  // scrivere una funzione chiamata alfabetoStrambo che 
  // data una stringa in ingresso
  // ritorni una copia della stringa modificata come negli esempi
  // ad esempio con "ciao a tutti" ritorna "ciaoro ara tuttiri"
  // ad esempio con "" ritorna ""
  // ad esempio con "ad esempio" ritorna "ad esempioro"
  // ad esempio con "funziona solo con vocali alla fine" ritorna 
  // "funzionara soloro con vocaliri allara finere"
  
  // pseudocodice 
  // devo prendere la mia stringa e dividerla in piu elemeti
  // devo creare una variabile che all'interno contiene tuti le vocali 
  // devo alterare il mio array in modo tale che lo posso metter in confronto con
  // lo posso mettere in contro con lultima parola della mia stringa che e divisa in piu elelemti 
  // se l'ultimo cararttere della mi astringa e uguale e una lettera del mio array 
  //  allora mi stampera la parola con laggionta della 'r' + lultima lettera
  
  
  
  
  function alfabetoStrambo(s) {
  
  }
  
  alfabetoStrambo('ciao a tutti')
  alfabetoStrambo('')
  alfabetoStrambo('ad esempio')
  alfabetoStrambo('funziona solo con vocali alla fine')
  
  // scrivere una funzione chiamata algebra che 
  // dato un array di interi
  // ritorni il prodotto degli elementi di indice pari a cui vengono
  // sottratti tutti gli elementi di indice dispari
  // ad esempio: con [1, 2, 3, 4] ritornerebbe 8 - 3 -1 = 4
  
  function algebra(arr) {
    let sum = 1
    let diff = 0
    arr.forEach(element => {
      if (element % 2 == 0 ) {
         sum *= element 
      }
      if (element % 2 != 0 ) {
        diff += element 
      }
    })
    console.log(sum - diff );
  }
  let arr9 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  algebra( arr9) 
  
  // scrivere una funzione chiamata arraySwap che 
  // dato un array di interi
  // ritorni un nuovo array dove, partendo da 0, il valore alla posizione i
  // e il valore alla posizione i + 1 sono invertiti di posizione
  
  // ad esempio: con [5, 6] ritornerebbe [6, 5]
  // ad esempio: con [1, 2, 3, 4] ritornerebbe [2, 1, 4, 3]
  // ad esempio: con [7, 8, 9] ritornerebbe [8, 7, 9] perche' il 9 non puo'
  // essere scambiato con niente siccome l'array e' terminato
  
  
  // creare una funzione che entr aun array 
  // creare un varaiabile array dove vengono inseriti i nuovi ellemtni invvertiti
  // creare un ciclo che inizia da 0 e finisci alla fine del mio array va avanti di 2 
  // push gli elementi interbo al mio array e stampa 
  
  function arraySwap(arr) {
    var swappedArray = [];
    for (var i = 0; i < arr.length - 1; i += 2) {
      swappedArray.push(arr[i + 1], arr[i]);
    }
    if (arr.length % 2 === 1) {
      swappedArray.push(arr[arr.length - 1]);
    }
    console.log(swappedArray);
  }
  
  arraySwap([5, 6])
  arraySwap([1, 2, 3, 4])
  arraySwap([7, 8, 9])
  
  
                            // giada ma chiedere al prof 
  
  
  // scrivere una funzione chiamata concatAll che 
  // dato in ingresso un numero variabile di array
  // ritorni un nuovo array che e' la concatenazione di tutti gli array
  // passati
  
  // ad esempio: con [1] [2] [3] ritornerebbe [1,2,3]
  // ad esempio: con [1, 2, 3, 4] ritornerebbe [1, 2, 3, 4]
  // ad esempio: con [1, 2, 3] [1, 2] [3] ritornerebbe [1, 2, 3, 1, 2, 3]
  
  function concatAll(...arrs) {
    let arr11 = []
    arrs.forEach(element => {
      element.forEach(el => {
      })
    })
  }
  
  concatAll([[1], [2], [3]])
  concatAll([1, 2, 3, 4])
  concatAll([[1, 2, 3], [1, 2], [3]])
  
  
  
                            // non ho capito chiedere al prof  
  
  
  
                          
  // scrivere una funzione chiamata createRandomSortedArray che 
  // dato un numero n in ingresso
  // ritorni un array ordinato in
  // modo crescente lungo n che
  // contiene numeri casuali compresi tra 0 e 1,
  // estremi esclusi
  
  // ad esempio per 3 puo' ritornare
  // [0.29576384904091846, 0.8219993580808898, 0.99213923917851]
  // "puo'" perche' i numeri devono essere casuali
  // ad esempio per 0 ritorna []
  // ad esempio per -1 ritorna []
  
  // Math.random() ha detto il prof di utilizzare questo 
  
  function createRandomSortedArray(n) {
  
  }
  
  // scrivere una funzione chiamata firstMatrix che 
  // dato un array e un numero n
  // ritorni una matrice con l'array riprodotto n volte
  
  // ad esempio con [1,2,3] e 3 ritorna [[1,2,3],[1,2,3],[1,2,3]]
  // ad esempio con [1,2] e 1 ritorna [1,2]
  // ad esempio con [1,2,3,4] e 0 ritorna []
  
  // creare una funzione che dato in ingresso un arrai e un numero 
  // prendo l'array e lo moltiplico per il numero 
  // stampa 
  
  function firstMatrix(arr, n) {
    let h = []
    for (let i = 0; i < n; i++) {
      h.push(arr)
    }
    console.log(h);
  }
  firstMatrix([1,2,3], 3)
  firstMatrix([1,2], 1)
  firstMatrix([1, 2, 3, 4], 0)
  
  
  // scrivere una funzione chiamata intersection che 
  // dati due array di interi
  // ritorni un array che rappresenti l'intersezione di questi array
  
  // ad esempio con [1,2,3] e [4,5,6] ritorna []
  // ad esempio con [1,2] e [2,3] ritorna [2]
  
  
  function intersection(a, b) {
    let p = []
    //filtra il primo array e verifica se i valori contenuti sono presenti sul secondo array 
    p = a.filter(value => b.includes(value))
    console.log(p) 
  }
   
  intersection([1, 2, 3], [4, 5, 6])
  intersection([1, 2], [2, 3])
  
  // scrivere una funzione chiamata isHomogeneous che 
  // dato un array di elementi in ingresso
  // ritorni true se l'array contiene elementi tutti dello stesso tipo
  // o false altrimenti
  
  function isHomogeneous(arr4) {
    let p = new Set(arr4.map(x => typeof x) ).size <= 1; 
    console.log(p);
  }
  
  
  isHomogeneous(['ciao', 0, true])
  isHomogeneous([20, 0, 10])
  
  // scrivere una funzione chiamata largestSwap
  // che prende in ingresso un numero di due cifre,
  // ritorna true se e' il piu' grande dei due possibili scambi di
  // cifre, false altrimenti
  
  // ad esempio per 27 deve ritornare false perche' posso invertire 
  // le due cifre per ottere 72
  // ad esempio per 43 deve ritornare true perche' 34 sarebbe minore
  
  function ah(n){
    // stampa n 
    console.log(n)
    // converti un numerlo in una stringa 
    let toString = n.toString()
    console.log(toString)
    // divido la stringa in base a quello che passo, e deposito i risultati in un array 
    let split = n.toString().split('')
    console.log(split)
    // inverto l'array 
    let reverse = n.toString().split('').reverse()
    console.log(reverse);
    // unisco l'array invertito in una stringa 
    let join = n.toString().split('').reverse().join('')
    console.log(join);
    // trasformo la stringa in un numero 
    console.log(Number(join))
  
  }
  ah(27)
  ah(43)
  
  function ch(n){
    let join = n.toString().split('').reverse().join('')
    let number = Number( join )
    if (n > number) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
  ch(27)
  ch(43)