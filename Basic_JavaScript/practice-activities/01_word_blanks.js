/**
 * Build a "Mad Libs" style word game we're calling "Word Blanks"
 * Create an (optionally humorous) "Fill in the Blanks" style sentence.
 * 
 * In a "Mad Libs" game, you are provided sentences with some missing words, like nouns, verbs, adjectives and adverbs. 
 * You then fill in the missing pieces with words of your choice in a way that the completed sentence makes sense.
 * ***
 * EXAMPLE RUN
 *  - wordBlanks will be changed to string composed of the concatenated strings “dog”, “big”, “ran”, “quickly” through the variables myNoun, myAdjective, myVerb, myAdverb respectively; the order is changed and whitespace added.
 * 
 * Code Examples
 *  - Use wordBlanks to concatenate the given variables;
 *  - Separate words with whitespace and appropriate words to form the full sentence.
 */

let noun = 'dog';
let adjective = 'big';
let verb = 'ran';
let adverb = 'quickly';

let wordBlanksConcatenation = 'The ' + adjective + ' ' + noun + ' ' + verb + ' ' +  adverb + '.';
let wordBlanksStringInterpolation = `The ${adjective} ${noun} ${verb} ${adverb}.`;

console.log('concatenation - ', wordBlanksConcatenation);
console.log('string interpolation - ', wordBlanksStringInterpolation);