// js global

// queste proprieta possono essere utilizzati con qualsiasi oggetto 

// undefined 
// indica una variabile che none stata assegnata o non dichiarata del tutto 
let x;
if (x === undefined) {
  text = "x is undefined";
} 
if (typeof x === "undefined") {
  text = "x is undefined";
} 

// String()
// è un metodo che converte un valore a una stringa 
String(12345)
String(Boolean(0))
String(Boolean(1))
String([1, 2, 3, 4, 5])

// perseInt(value, radix)
// value = valore da analizzare 
// radix = defout(10) specificare il sistema numerico 
// sistema numerico : 
// 2 = binario 
// 8 = ottale 
// 16 = esadecimale 
// analizza una stringa e restituisce il primo numero intero
// ignora gli spazi 
// se non riesce a convertire il primo carattere restituisce NaN
parseInt("10", 10);
parseInt("010");
parseInt("10", 8);
parseInt("0x10");  // come fa a restituirmi 16 ???
parseInt("10", 16);


// parseFloat(value)
// value = valore da analizzare 
// analizza una stringa e restituisce il primo numero intero
// ignora gli spazi 
// se non riesce a convertire il primo carattere restituisce NaN
parseFloat(10);
parseFloat("10");
parseFloat("10.33");
parseFloat("34 45 66");
parseFloat("He was 40");

// Number(value)
//converte un valore in un numero
// Se il valore non può essere convertito, viene restituito NaN.
Number();      //0 
Number(true);  //1
Number(false);   //0
Number(new Date());     //1682375322838
//                              ^/  millisecondi dal 1 gennaio 1970 00:00:00.
Number(999);          // 999
Number("999");          // 999
Number('ciao');         // Nan

// isNaN(value) 
// è l'abbreviazione di "Not-a-Number"
// se un valore è Nan = true 
// converte il valore in un numero e dopo testa 
isNaN('Hello');         //true

// Number.isNaN() 
// se un valore è Nan = true 
Number.isNaN('Hello');          //false