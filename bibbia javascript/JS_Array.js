function end(pars) {
    console.log('---------------------------');
}                                                                                                           
                                                            // JS Array
// un array sono una locazione di valori multipli di vario tipo
// andiamo a vedere quali sono i metodi degli array : 

// .at()
// ritorna come elememto un valore dell'array
// come ?     indicizzando l'array 
//         [0,     1,      2,     3]
let a = ['ciao', 'come', 'stai', '?']
console.log(a.at(1));     // = a[1]
console.log(a.at(-1)); //prende l'ultimo

end()  
// .concat() 
// concatena 2 o più array 
//  mi ritorna un unico array 
let b = [10, true]
console.log(a.concat(b)); // (b, ..., ...)

end()  
// construction

end()  
// .copyWithin()
//   defout              0     0
// .copyWithin(target, start, end)
// da quello che ho capito copia un elemtno e lo copia su un'altro 
// mi ritorna un nuovo array modificato 
console.log(a.copyWithin(0, 2, 3));

end()  
// .entries()
// ritorna un array iterato sottoforma di 
// un oggeto con key : valore 
console.log(a.entries());

end()  
// .every()

end()  
// .fill()
// defout (change, 0, array.lenght)
//   .fill(value, start, end)
// ritorna un nuovo array 
console.log(a.fill('error', 2, 3));  //mi mette il 10 nella posizione due e finisce nella posizione 3 
console.log(a.fill(10)); // sostituisce tutti i miei indici con quel valore 

end()  
// .filter()

end()  
// .find()

end()  
// .findIndex()

end()  
// .flat()
// concatena una matrice 
// il numero all'interno prende la profondita della matrice 
// ritorna un array 
let c = [[10, 20],['ciao', 'come'],['pirla', 'ma', 'sei', 'tu', '?']]
console.log(c.flat()); // defoult 1 (un array dentro un array)
let d = [[10, 20],['ciao', 'come'],['pirla', ['ma', ['sei'], 'tu'], '?']]
console.log(d.flat(3)); // in questo metto 3 perche ci sono 3 array dentro un array 

end()  
// .flatMap()

end()  
// .forEach
// .forEach(el => {el ...})
// il return è sottointeso 
// itera sugli elementi in maniera i++
// ritorna undefined 
c.forEach( element => {
    console.log(element);
})

end()  
// .from()

end()  
// .includes()
//           search, where (defout 0)
// .includes(element, start)
// return boolean (false no found) (true it found)
console.log(c.includes('ciao'));

end()  
// .indexOf()
//        search, position (defout 0) (-1 start al contrario)
// .indexOf(item, start)
// ritorna un numero 
// quando trova il primo valore 
// mi ritorna -1 quando non lo trova 
let e = ['ciao', 'come', 'stai', '?']
console.log(e.indexOf('stai', 0));

end()  
// Array.isArray()
//   ^ un altro valore = undefined
// ritorna un boolean (true se è un array) (false se non lo è)
console.log(Array.isArray(e));

end()  
// .join( )
//       ^ di defoul ( , )
//  trasforma un array in una stringa 
//  ritorna una stringa separata da cosa inserisco nelle parentesi 
console.log(e.join('#'));

end()  
// .keys()

end()  
//.lastIndexOf()
//.lastIndexOf( item, start )
//          search, (defout: lenght -1)
// ritorna il numero della posizione dell'ultimo elemento 
console.log(e.lastIndexOf('stai'));

end()  
// .lenght 
// ritorna in forma numerica la lunghezza della stringa
console.log(e.length);
console.log(e.length = 2);  // lo metto su w3school ma non funziona 

end()  
// .map()

end()  
// .push()
// aggiunge un nuovo elemento alla fine dell'array
// ritorna in forma numerica il nuovo array 
let f = ['ciao', 'come', 'stai', '?']
console.log(f.push('porco', '?'));

end()  
// .pop()
// rimuove l'ultimo elemento dell'array 
// ritorna l'elemento tolto 
console.log(f.pop());

end()  
// .shift()
// rimuove il primo elemento dell'array
// ritorna un nuovo array 
console.log(f.shift());

end()  
// prototype

end()  
// .reduce()

end()  
// .reduceRight()

end()  
// .reverse()
// gira in senso contrario l'ordine dell'array
// ritorna un array contrario 
console.log(f.reverse());

end()  
//.slice()
// .slice(start, end)
//     position, fine
// defout   0, last element
// inserisco dei valori negativ cambio il senso di lettura
// ritorna l'elemento selezionato 
//        0     1         2         3     4
let g = ['10', 'ciao', 'maracahs', 'birba', '20']
console.log(g.slice(1, 4)); // ciao, birba

end()  
// .some()

end()  
// sort()

end()  
// .splice()
// .splice(index, howmany, items1, ..., ...)
// index = position to add o remove 
// howmany = number of items remove 
// items1 = new element to add 
// ritorna un array parole tolte
console.log(g.splice(1, 2));
console.log(g.splice(1, 3, 'kiwi', 'mango'));
console.log(g);

end()  
// .toString()
// ritorna una stringa
let h = ['10', 'ciao', 'maracahs', 'birba', '20']
console.log(h.toString());

end()  
// .unshift()
// aggiunge un nuovo elelemnto all'inizio 
// ritorna l'array
console.log(h.unshift('ciao'));
console.log(h);

end()  
// .valueOf()
// mi richiama l'array
let j = h.valueOf()
console.log(j);