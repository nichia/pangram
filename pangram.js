//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (sentence) => {
  // throw new Error("Remove this statement and implement this function");
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f',
  'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
  'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  if (sentence.length < alphabet.length) {
    return false;
  } else {
    const sentenceLowerCase = sentence.toLowerCase().split('');
    for (let idx=0; idx < alphabet.length; idx++) {
      if (sentenceLowerCase.indexOf(alphabet[idx]) === -1) {
        return false;
      }
    }
    return true;
  }
};
