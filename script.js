document.getElementById('generate').addEventListener('click', function() {
    const length = document.getElementById('length').value;
    const lowercase = document.getElementById('lowercase').checked;
    const uppercase = document.getElementById('uppercase').checked;
    const numbers = document.getElementById('numbers').checked;
    const specialChars = document.getElementById('specialChars').checked;
    
    const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
    const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numChars = '0123456789';
    const special = '!@#$%^&*()_+{}[]|:;<>,.?/~';
    
    let allChars = '';
    if (lowercase){
        allChars += lowerChars;
    } 
    if (uppercase) {
        allChars += upperChars;
    }
    if (numbers) {
        allChars += numChars;
    }
    if (specialChars) {
        allChars += special;
    }
    
    if (allChars === '') {
        alert('Please select at least one option!');
        return;
    }
    
    let password = '';
    for (let i = 0; i < length; i++) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    document.getElementById('password').value = password;
});

document.getElementById('copy').addEventListener('click', function() {
    const passwordField = document.getElementById('password');
    passwordField.select();
    document.execCommand('copy');
    alert('Password copied to clipboard!');
});