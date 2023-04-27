                                                            // JS Date
// gli oggetti date lavorano con il temo e le date 

// creazione Date :
const j = new Date( );
//                 ^
// se inserisci una data precisa all'interno es.("July 21, 1983 01:15:00:526")

// andiamo a vedere i metodi delle date : 


// .constructor


// .getDay()
// ritorna il giorno della settimana (0...7)            //ti dara 4 
console.log(j.getDay()); 

// .getDate() 
// ritorna il giorno del mese (0...31)          //ti dara 21 
console.log(j.getDate());  

// .getMonth()
// ritorna i mesi (0...11)          //ti dara July
console.log(j.getMonth());

// .getFullYear()
// ritorna l'anno (xxxx)          // ti dara 1983
console.log(j.getFullYear()); 

// .getHours()
// ritorna le ore (0...23)          // ti dara 1
console.log(j.getHours()); 

// .getMinutes()
// ritorna i minuti (0...59)            //ti dara 15
console.log(j.getMinutes());

// .getSeconds()
// ritorna i secondi (0...59)           //ti dara 00
console.log(j.getSeconds());

// .getMilliseconds()
// ritorna i millisecondo (0...999)         //ti dara 526
console.log(j.getMilliseconds()); 

// .getTime()
// ritorna i millisecondi passati dal 1 gennaio
console.log(j.getTime());

// .getTimezoneOffset()
// ritorna la differenza tra il tempo UTC e il tempo locale 
// ritorno in minuti 
console.log(j.getTimezoneOffset());


console.log('------------------------');
// UTC (Universal Time Coordinated) e simile al GMT(Greenwich Mean Time) 
// UTC quindi e la data del tempo locale  

// .getUTCDay()
// ritorna il giorno della settimana (0 = Sunday 1 = Monday)
console.log(j.getUTCDay());

// .getUTCDate()
// ritorna il giorno del mese (0...31) 
console.log(j.getUTCDate());

// .getUTCMonth()
// ritorna il mese 
console.log(j.getUTCMonth());

// .getUTCFullYear()
// ritorna l'anno
console.log(j.getUTCFullYear());

// .getUTCHours()
// ritorna le ore
console.log(j.getUTCHours());

// .getUTCMinutes()
// ritorna i minuti 
console.log(j.getUTCMinutes());

// .getUTCSeconds()
// ritorna i secondi 
console.log(j.getUTCSeconds());

// .getUTCMilliseconds()
// ritorna i millisecondi
console.log(j.getUTCMilliseconds());

// Date.now()
// ritorna i millisecondi passati dal 1 gennaio
console.log(Date.now());

// .parse()
// analizza la stringa data 
// ritorna la differenza della stringa data con il (gennaio 1 1970)
// ritorna in millisecondi 
let x = Date.parse("March 21, 2012");
console.log(x);

// prototype

console.log('------------------');
let k = new Date(); 

// .setDate()
// impostare il giorno del mese (0...31)
// 0 = l'ultimo giorno del mese precedente 
// -1 = il giorno prima dell'ultimo giorno del mese precedente 
// 32 = il primo giorno del prossimo mese 
// 41 = il decimo giorno del prossimo mese
console.log(k.setDate(0));

// .setFullYear(year, month, day)
//          obbligatorio, opzionali
console.log(k.setFullYear(2023, 4, 24));

// .setMonth(month, day)
// -1 = l'ultimo mese dell'anno precedente 
// 12 = il primo mese dello prossimo anno           // 13,14...
console.log(k.setMonth(11,12));

// .setHours(hour, min, sec, millisec)
// -1 = la scorsa ora del giorno prima
// 24 = la prima ora del giorno dopo
console.log(k.setHours(10, 30, 40, 888));

// .setMinutes(min, sec, millisec)
// -1 = l'ultimo minuto dell'ora prima
// 60 = il primo minuto delll'ora dopo
console.log(k.setMinutes(30, 40, 888));

// .setSeconds(sec, millisec)
// -1 = l'ultimo secondo del minuto prima 
// 60 = il primo secondo del minuto dopo 
console.log(k.setSeconds(40, 888));

// .setMilliseconds(Millisec)
// -1 = l'ultimo millisecondi del seocondo prima
// 1000 = i primi millisecodni del secondo dopo             // 1002,1003...
console.log(k.setMilliseconds(888));

console.log('--------------------------');
// .setTime()
// imposta una data e un'ora aggiungendo o sottraendo un numero specificato di millisecondi 
// dalla/alla mezzanotte del 1 gennaio 1970.
console.log(k.setTime());

// .setUTCDate()
console.log(k.setUTCDate(15));

// .setUTCMonth()
console.log(k.setUTCMonth(10, 14));

// .setUTCFullYear()
console.log(k.setUTCFullYear(2015, 10,11));

// .setUTCHours()
console.log(k.setUTCHours(10,15, 30, 400));

// .setUTCMinutes()
console.log(k.setUTCMinutes(10,50,999));

// .setUTCSeconds()
console.log(k.setUTCSeconds(20, 376));

// .setUTCMilliseconds()
console.log(k.setUTCMilliseconds(888));

console.log('-------------------------');

// .toDateString()
// ti ritorna la data (non l'ora) di una stringa

// .toISOString()
// ritorna un oggetto data come stringa in ISO
// ISO-8601 = YYYY-MM-DDTHH:mm:ss.sssZ 

// .toJSON()
// ritorna un oggetto data come stringa in formato json

// .toLocaleDateString()
// ritorna un oggetto data (non l'ora) come stringa usando la conversione locale

// .toLocaleTimeString()
// ritorna la parte dell'ora di un oggetto data come stringa utilizzando la conversione locale 

// .toLocaleString(locales, options)
// locales = il linguaggio specifico in uso sul computer 
// options = e un oggetto a cui di possono settere delle proprieta 
// restituisce un oggetto Date come stringa, utilizzando le impostazioni locali

// .toString()
// ritorna un oggetto data come stringa

// .toTimeString()
// ritorna la parte dell'ora di un oggetto data come stringa

// .toUTCString()
// ritorna un oggetto data come stringa, accordato con UTC

// Date.UTC(year, month, day, hours, minutes, seconds, millisec)
// ritorna un numero in millisecondi tra la data specifica e il 1 gennai0 1970, in accordo con UTC

// .valueOf()
// restituisce il valore primitivo di un oggetto

