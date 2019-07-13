function formatTime(a) {
    let min = a % (60);
    let hours = parseInt(a / (60)) % 24;
    let days = parseInt(a / (60) / 24);
    return days + ' day(s) ' + hours + ' hour(s) ' + min + ' minute(s) ';
}

formatTime(120); 
formatTime(59); 
formatTime(3601); 

