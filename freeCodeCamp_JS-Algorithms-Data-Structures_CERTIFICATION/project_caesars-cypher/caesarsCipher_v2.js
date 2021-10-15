function caesarCipherCharCode(string, key) {
    key = key % 26;
    let newString = '';
    string.toLowerCase().split('').forEach((c, i) => {
      if (c === ' ') {
        newString += ' ';
        return;
      }
      if (key < 0) key = 26 + key;
      let char = String.fromCharCode((c.charCodeAt(0) + key - 97 ) % 26 + 97);
  
      if (string[i] === c.toUpperCase()) newString += char.toUpperCase();
      else newString += char;
    });
    return newString;
  }
  
  // Running solution 
  console.log(caesarCipherCharCode('it is so hot mon cher', 10));