let lvEmail = '', lvPass = '', lvChange = '', lvPassOld = '', lvPassNew = '', lvPassNewAgain = '';
const six = 6, five = 5;

lvEmail = prompt('Enter, please, your email!', '');
if (lvEmail === '') {
    alert('Canceled.');
} else if (lvEmail.length < six) {
    alert('I don\'t know any emails having name length less than 6 symbols.');
} else if (lvEmail === 'user@gmail.com' || lvEmail === 'admin@gmail.com') {
    lvPass = prompt('Enter, please, your password!', '');
} else {
    alert('I don’t know you.');
}

if (lvPass === '') {
    alert('Canceled.');
} else if (lvEmail === 'user@gmail.com' && lvPass === 'UserPass' 
    || lvEmail === 'admin@gmail.com' && lvPass === 'UserPass') {
    lvChange = confirm('Do you want to change your password?')
    if (lvChange === false) {
        alert('You have failed the change.');
    } else {
        lvPassOld = prompt('Enter, please, your old password!', '');
        if (lvPassOld === '') {
            alert('Canceled.');
        } else if (lvEmail === 'user@gmail.com' && lvPassOld === 'UserPass'
            || lvEmail === 'admin@gmail.com' && lvPassOld === 'UserPass') {
            lvPassNew = prompt('Enter, please, your new password!', '');
            if (lvPassNew.length < five) {
                alert('It’s too short password. Sorry.');
            } else {
                lvPassNewAgain = prompt('Enter, please, again your new password!', '');
                if (lvPassNewAgain.length < five) {
                    alert('It’s too short password. Sorry.');
                } else {
                    alert('You have successfully changed your password.');
                }
            }
        } else {
            alert('Wrong password');
        }
    }
} else {
    alert('Wrong password');
}