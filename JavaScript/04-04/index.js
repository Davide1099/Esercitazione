
// esercizio 1
const m1 = new Map()
const m2 = new Map()

m1.set ('username', 'gianni')
m2.set ('username', 'piero')

const r = compareMap(m1,m2)
console.log(r);
function compareMap(map1, map2) {
    if (map1 instanceof Map == false || map2 instanceof Map == false ) {
        return false 
    }
    if (map1.size != map2.size) {
        return false
    }
    let same = true 
    m1.forEach(function(v,k) {
        // controlla che m2 abba le chiave corrente m1, se non c'è l'ha, restituisci false
        if ( !m2.has(k) ) {
            same = false
        }
        // qua dentro se m1 e m2 hanno entrambe le chiavi corrente
        else{
            // controlla che il valore della chiavi della corrente di m1 sia uguale a quello della stessa chiave di m2
            if (m1.get(k) != m2.get(k)) {
                same = false
            }
        }
    })
    return same
}

// esercizio 2
function compareSet(set1, set2) {
    if (set1 instanceof set == false ||set2 instanceof set == false) {
        return false
    }
    if (set1.size != set2.size) {
        return false
    }else {
        set1.forEach(function(v) {
            if (!set2.has(v)) {
                return false
            }
        })
    }
    return true
}

const s1 = new Set ([10, 20, 30, 40])
const s2 = new Set ([50, 60, 70, 80])
const f = compareSet(s1, s2)
console.log(f);

// esercizio 3
let a = [10, 'ciao', 20, 'ciao', 'javascript', 10]
function uniqueArray(array) {
    
}

