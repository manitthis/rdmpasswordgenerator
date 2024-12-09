const passbox= document.getElementById("password");
const len=12;
const uc="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lc="abcdefghijklmnopqrstuvwxyz";
const num="1234567890";
const sym="!@#$%^&*()_+~|<>{}[]/-=";
const allch=uc+lc+num+sym;

function create(){
    let password ="";
    password+=uc[Math.floor(Math.random()*uc.length)];
    password+=lc[Math.floor(Math.random()*lc.length)];
    password+=num[Math.floor(Math.random()*num.length)];
    password+=sym[Math.floor(Math.random()*sym.length)];

    while(len>password.length){
        password+=allch[Math.floor(Math.random()*allch.length)];
    }
    passbox.value=password;
}

function copy(){
    passbox.select();
    document.execCommand("copy");
}