                                    // js error gestione degli errori 
// si utilizza questa tecnica per andare a capire e individuare quali possono essere gli errori 

// si usa : 

// try {
            /* verifica dell'errore
             un blocco di codice da testate 
             se si verifica l'errore me o esegue il catch */
// }

// catch (error) {
            /* gestione dell'errore
            se si verifica un errore nel try si puo definire il codice da eseguire */
// }

// throw 
            /* se utilizzati con tri e catch puoi controllare il flusso del programma  
            permette la personalizzazione di un errore */

// finally{
            /*consente l'esecuzione del codice dopo try e catch indipendentemente dal risultato */
// }



// err.name : 
// questa proprieta fa fuori uscire un messaggio di errore 

// RangeError => si è verificato un numero "fuori intervento"
let num = 1;
try {
  num.toPrecision(500);   // A number cannot have 500 significant digits
}
catch(err) {
  document.getElementById("demo").innerHTML = err.name;
}


// ReferenceError => Si è verificato un riferimento non valido
let x = 5;
try {
  x = y + 1;   // y cannot be used (referenced)
}
catch(err) {
  document.getElementById("demo").innerHTML = err.name;
}


// SyntaxError => Si è verificato un errore di sintassi
try {
    eval("alert('Hello)");   // Missing ' will produce an error
  }
  catch(err) {
    document.getElementById("demo").innerHTML = err.name;
  }


// TypeError => Si è verificato un errore di tipo
let num = 1;
try {
  num.toUpperCase();   // You cannot convert a number to upper case
}
catch(err) {
  document.getElementById("demo").innerHTML = err.name;
}


// URIError => Si è verificato un errore in encoderURI()
try {
    decodeURI("%%%");   // You cannot URI decode percent signs
  }
  catch(err) {
    document.getElementById("demo").innerHTML = err.name;
  }

//   err.message

// e una proprieta che ti fa ritornare indietro il messaggio 