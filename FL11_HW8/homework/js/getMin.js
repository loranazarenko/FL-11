function getMin(...args) {
    let min = 0;
    for (let i = 0; i < args.length; i++) {
        if (min > args[i]) {
            min = args[i];
        }
    }
    return min;
}
getMin(3, 0, -3); 