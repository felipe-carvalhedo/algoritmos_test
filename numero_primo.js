function primo(numero){
let n = numero;
    let c = 0;
    for (i=n; i>0; i--){
        if (n%i == 0){
            c++;
        }
    }
    if (c > 2){
        return "não é primo"
    }    
    else{
        return "é primo"
    }  }

module.exports = primo