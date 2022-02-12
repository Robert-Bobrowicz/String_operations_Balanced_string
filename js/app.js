//balanced string
//swoje rozwiązanie oparłem na porównaniu długości i równości podstringów zawierających małe i duże litery

const string = 'HOLLYWOODwoodholly';
console.log('start operation');
console.log('original string to be tested for balance of letters: ', string);

let lowerCaseSubstring = '';
let upperCaseSubstring = '';

for (let i=0; i < string.length; i++) {
    if (string.charAt(i) === string.charAt(i).toUpperCase()) {
        console.log(string.charAt(i));
        upperCaseSubstring = upperCaseSubstring.concat(string.charAt(i));
    } else if (string.charAt(i) === string.charAt(i).toLowerCase()) {
        console.log(string.charAt(i));
        lowerCaseSubstring = lowerCaseSubstring.concat(string.charAt(i));
    }
}

console.log('uppercase substring: ', upperCaseSubstring);
console.log('lowercase substring: ', lowerCaseSubstring);

//jeśli litery są takie same w substringach ale w różnej kolejności, to na początku uporządkowuje tablicę substringów
const arrUpper = upperCaseSubstring.split("");
arrUpper.sort();
const arrUpperSet = [...new Set(arrUpper)];
upperCaseSubstring = arrUpperSet.join('');
console.log('uppercase reduced substring: ', upperCaseSubstring);

const arrLower = lowerCaseSubstring.split("");
arrLower.sort();
const arrLowerSet = [...new Set(arrLower)];
lowerCaseSubstring = arrLowerSet.join('');
console.log('lowercase reduced substring: ', lowerCaseSubstring);

if (lowerCaseSubstring.toUpperCase() === upperCaseSubstring) {
    console.log('string is balanced: ', string);
} else {
    console.log('string is not balanced: ', string);
}

console.log('end of operation');

//inne rozwiązanie
function checkTextBalance(txt) {
    const arr = [...txt].sort((a, b) => a.localeCompare(b));
    const set = new Set(arr);
    const newArr = [...set];
    console.log(newArr);

    if (newArr.length % 2 === 0) {
        let balance = true;
        for (let i=0; i<newArr.length; i+=2) {
            if (newArr[i].toUpperCase() !== newArr[i+1]) {
                balance = false;
                break;
            }
        }
        return balance;
    }
    return false;
}

console.log("start new method");
console.log(checkTextBalance("HOLLYWOODwoodhaolly"));
console.log(checkTextBalance("HOLLYWOODwoodholly"));
console.log(checkTextBalance("ALLEbella"));
console.log(checkTextBalance("ALLEella"));
console.log(checkTextBalance("aaAddDeEkkkK"));
console.log('end of a new method');
//--------------------------------------------------------------------------------------------------------------------//

//test dla sumy kontrolnej stringów (pozwoli to na ominięcie sortowania w powyższych rozwiązaniach)
let a = "abcdefgh";
let B = "ACBDEHGF";

let A = a.toUpperCase();

let sum = 0;
let SUM = 0;

for (let i = 0; i < A.length; i++) {
    sum += A.charCodeAt(i);
}

for (let i = 0; i < B.length; i++){
    SUM += B.charCodeAt(i);
}

console.log(sum);
console.log(SUM);
//--------------------------------------------------------------------------------------------------------------------//

//jeszcze inne rozwiązanie od Pawła

function fn(string) {
    let lowerStr = "";
    let upperStr = "";
    const good = [];

    for (let i = 0; i < string.length; i++) {
        if (string[i] >= "A" && string[i] < "a") upperStr = upperStr + string[i];
        else lowerStr = lowerStr + string[i];
    }

    //tutaj nie chciałem robić pętli
    // aby usunąć duplikaty
    // więc zastosowałem ES6 i Set kolekcje
    [...new Set(lowerStr.split(""))].forEach(function (letter) {
        if (upperStr.includes(letter.toUpperCase())) {
            good.push(letter);
        }
    });

    if (!good.length) return -1;

    const result = good.reduce(function (prev, curr) {
        prev[curr] = charCount(string, curr);
        return prev;
    }, []);

    return sortObject(result)[0];
}

function charCount(string, letter) {
    const str = string.toLowerCase();
    let letter_Count = 0;
    for (let position = 0; position < str.length; position++) {
        if (str.charAt(position) === letter) {
            letter_Count += 1;
        }
    }
    return letter_Count;
}

function sortObject(obj) {
    const sortable = [];
    for (let el in obj) {
        sortable.push([el, obj[el]]);
    }

    return sortable.sort(function (a, b) {
        return b[1] - a[1];
    });
}

console.log(fn("abaAB"));
console.log(fn("aB"));
//--------------------------------------------------------------------------------------------------------------------//