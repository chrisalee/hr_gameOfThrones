/*
 * Complete the 'gameOfThrones' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function gameOfThrones(s) {
    // anagram --> is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
    // palindrome -->  is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar
    
    let letters = s.split('');
    let sortedLetters = letters.sort();
    let oddNumLetterCount = 0;
    
    let i = 0;
    while(i < sortedLetters.length) {
        let lastIdx = sortedLetters.lastIndexOf(sortedLetters[i]) + 1;
        if((lastIdx - i) % 2 !== 0) oddNumLetterCount++;
        if((sortedLetters.length % 2 !== 0 && oddNumLetterCount > 2) || (sortedLetters.length % 2 === 0 && oddNumLetterCount > 0)) {
            return 'NO'
        }

        i = lastIdx;
    }
    
    return 'YES';
}
