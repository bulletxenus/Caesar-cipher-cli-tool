function caesarShipherEncode(str, shift, mode) {
    const ALPHABET_UPPER = ['A' , 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I' ,'J', 'K', 'L', 'M' ,'N' ,'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const ALPHABET_LOWER = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    if (!(mode === 'encode' || mode === 'decode')) throw new Error('invalid action')

    shift = mode === 'decode' ? -shift : shift;
    shift = shift % (ALPHABET_LOWER.length);
    //console.log(shift)
    const finalShift = shift < 0 ? (ALPHABET_UPPER.length) - Math.abs(shift) : Math.abs(shift)
    //console.log(ALPHABET_LOWER[finalShift])
    const arrFromStr = [...str];

    const newStr = arrFromStr.map(el => {
        let alphabet;
        let index;

        if (ALPHABET_LOWER.includes(el)) {
            alphabet = ALPHABET_LOWER;
            index = ALPHABET_LOWER.indexOf(el);
        } else if (ALPHABET_UPPER.includes(el)) {
            alphabet = ALPHABET_UPPER;
            index = ALPHABET_UPPER.indexOf(el);
        } else return el
        let newIndex = index + finalShift;
        newIndex = newIndex > alphabet.length - 1
            ? newIndex - (alphabet.length)
            : newIndex
        return alphabet[newIndex]
    })
   return newStr.join('');
}


module.exports = caesarShipherEncode;
