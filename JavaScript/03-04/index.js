
// esercizio 1
function selector(s) {
    if (
        s == '#myDiv' ||
        s == '.myDiv' ||
        s == 'div' ||
        s == 'span' ||
        s == 'img'
    ) {
        sele = true 
        console.log('è un selettore valido');
    }else if(s == 'ul') {
        console.log('non è un selettore valido (non è div, span, img)');
    }else {
        console.log('non è un selettore valido');
    }
}
selector('#myDiv')
selector('.myDiv')
selector('div')
selector('paperino')
selector('ul') 

// esercizio 2
console.log('----------------------');
function checkArray(numbers) {
    let odd = 0
    let even = 0
    let numberTen = false 
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 == 0) {
            even ++
        }else {
            odd ++
        }
        if (numbers[i] == 10) {
            numberTen = true
        }
    }
    console.log('numeri pari: ' + even );
    console.log('numeri dispari: ' + odd );
    if (numberTen == true) {
        console.log('il numero 10 è presente');
    } else {
        console.log('il numero 10 non è presente');
    }
    console.log('è un array' );
    console.log('non è un array');
}

checkArray([90, 78, 45, 34])
checkArray([0, 0, 0])
checkArray([10])
checkArray(10)

// esercizio 3
function makeElement(el, id, content, closeTag) {
    let res = '<' + el + 'id= '+ id +''+'>'
    if (content != '') {
        res += content
    } 
    if (closeTag) {
        res +='</' + el + '>'
    }
    return res
}
console.log(makeElement('input', 'myInput','', false));
console.log(makeElement('div', 'box','javascript', true));
    
// esercizio 4
function treeStr(input) {
    let s = input.length / 2 - 1

    for (let k = 0; k < input.length/2+1 ; k++) {
        let a = ''
        for (let i = 0; i < input.length; i++) {
            if (i > (s - k) && i <= (s + k) || i == s) {
                if (i == s && k == 0) {
                    a += ' '
                }
                a += ' ' + input[i] + ' '
            }
            else
                a += '   '
        }
        console.log(a);
    }
}

let string = 'javascript'
treeStr(string)

// esercizio 5
 console.log('-------------------------');
function makeMatrix(array) {
    if (typeof array == 'object' && array.length == 10) {
        let firstArray = []
        let secondArray = []
        let matrix = [[], []]
        for (let i = 0; i < array.length; i++) {
            if (array[i] >= 6) {
                firstArray.push(array[i])
            } else {
                secondArray.push(array[i])
            }
        }
        matrix = [ firstArray, secondArray ]
        return matrix
    }else {
        console.log('i dati di ingresso non sono corretti');
    }
}
function mediumValue(array) {
    if (typeof array == 'object') {
        let sum = 0 
        for (let i = 0; i < array.length; i++) {
            sum += array[i]
        }
        return sum / array.length
    }
}

array1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
array2 = [10, 21, 52, 63, 49, 45, 66, 77, 98, 09]
array3 = [4, 29]
matrix1 = makeMatrix(array1)
console.log(matrix1);
console.log(matrix1[0]);
console.log(mediumValue(array1));
console.log(mediumValue(matrix1[0]));
console.log('la prima media è ' + mediumValue(matrix1[0]) + ' e la seconda media è ' + mediumValue(matrix1[1]));


function makeMatrix(array) {
    if (typeof array == 'object' && array.length == 10) {
        let firstArray = []
        let secondArray = []
        let matrix = [[], []]
        for (i = 0; i < array.length; i++) {
            if (array[i] >= 6) firstArray.push(array[i])
            else secondArray.push(array[i])
        }
        matrix = [firstArray, secondArray]
        return matrix
    }
    else console.log('i dati in ingresso non sono corretti')
}

function mediumValue(array) {
    if (typeof array == 'object') {
        let sum = 0
        for (i = 0; i < array.length; i++) {
            sum += array[i]
        }
        return sum / array.length
    }
}

array1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
array2 = [3, 9, 4, 6, 15, 789, 2, 99, 8, 48]

matrix1 = makeMatrix(array1)
matrix2 = makeMatrix(array2)

console.log('la prima media è ' + mediumValue(matrix1[0]) + ' e la seconda ' + mediumValue(matrix1[1]))
console.log('la prima media è ' + mediumValue(matrix2[0]) + ' e la seconda ' + mediumValue(matrix2[1]))
