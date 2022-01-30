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