function reverseNumber(a) {
    let rev = 0, res;
    while (a) {
        res = a % 10;
        a = Math.floor(a / 10);
        rev *= 10;
        rev += res;
    }
    return rev;
}

reverseNumber(123); 
reverseNumber(-456); 
reverseNumber(10000); 
