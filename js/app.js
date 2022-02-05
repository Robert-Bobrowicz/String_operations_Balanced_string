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