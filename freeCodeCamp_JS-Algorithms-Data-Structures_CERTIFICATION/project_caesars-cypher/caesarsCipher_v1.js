function caesarCipher (string, key) {
    key = key % 26;
    const alphabetsArr = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const lowerCaseString = string.toLowerCase();
    let newString = '';
    const charCount = lowerCaseString.length;
  
    for(i = 0; i < charCount; i++) {
      let currentLetter = lowerCaseString[i];
      if(currentLetter === ' ') {
        newString += currentLetter;
        continue;
      }
      let charIndex = alphabetsArr.indexOf(currentLetter);
      let newIndex = charIndex + key;
     
      if (newIndex > 25) newIndex = newIndex - 26;
      if (newIndex < 0) newIndex =  26 + newIndex;
       
      if (string[i] === lowerCaseString[i].toUpperCase()) {
        newString += alphabetsArr[newIndex].toUpperCase();
      } else {
        newString += alphabetsArr[newIndex];
      }
    }
    return newString;
  }
  
  // Running solution 
  console.log(caesarCipher('it is so hot mon cher', 10));