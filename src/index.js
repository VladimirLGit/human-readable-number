module.exports = 
function toReadable (number) {
    const digits = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 
                    'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const digitTens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    
    if (number === 0) {
        return 'zero';
    }

    let numberReadable = number;
    let strNumber = '';
    let nReadable = Math.floor(numberReadable / 100);
    if (nReadable > 0) {
        strNumber += digits[nReadable - 1] + ' hundred';
        numberReadable = numberReadable - (nReadable * 100);    
    }        
    nReadable = Math.floor(numberReadable / 10);
    if ((nReadable >= 2)) {
        if (strNumber.length > 0) {
            strNumber += ' ';
        }
        strNumber += digitTens[nReadable - 1];
        numberReadable = numberReadable - (nReadable * 10);    
    }       
    if (numberReadable > 0) {
        if (strNumber.length > 0) {
            strNumber += ' ';
        }
        strNumber += digits[numberReadable - 1];     
        numberReadable = numberReadable - numberReadable;
    }

    return strNumber;
}

//console.log(toReadable(914));
