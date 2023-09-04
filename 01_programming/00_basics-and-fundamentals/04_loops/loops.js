/**
 * First, print each vowel in `string` on a new line
 * The English vowels are a, e, i, o, and u, and each vowel must be printed in the same order as it appeared in `string`.
 * Second, print each consonant (i.e., non-vowel) in `string` on a new line in the same order as it appeared in `string`.
 * @param {String} string 
 */

function vowelsAndConsonants(string) {
  const VOWELS = 'aeiou';
  let consonants = '';
  for (let i = 0; i < string.length; i++) {
    if (VOWELS.includes(string[i])) {
      console.log(`the vowels are: ${string[i]}`);
    } else {
      consonants += string[i] + '\n';
    }
  }
  console.log(`the consonants are: ${consonants.trim()}`);
}

vowelsAndConsonants('puzzles web crafts');