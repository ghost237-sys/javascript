
function generatePassword(length,includelowercase,includeuppercase,includenumbers,includesymbols){
    
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "1234567890";
    const symbols = '!@#$%^&*()_~';

    let allowedchars = '';
    let password = ''

    allowedchars += includelowercase ? lowercase : "";
    allowedchars += includeuppercase ? uppercase : "";
    allowedchars += includenumbers ? numbers : "";
    allowedchars += includesymbols ? symbols : "";

    if (length < 0){
        return 'Please write a valid password';
    }
    if(allowedchars.length === 0){
        return `(Atleast one set of characters needs to be selected)`
    }

    for(let i=0;i < length;i++){
        const passIndex = Math.floor(Math.random() * allowedchars.length);
        password += allowedchars[passIndex];
    }

    return password;
}

const passwordlength= 12;
const includelowercase = true;
const includeuppercase = true;
const includenumbers = true;
const includesymbols = true;


const pass = generatePassword(passwordlength,includelowercase,includeuppercase,includenumbers,includesymbols);
console.log(`Generated password:  ${pass}`);