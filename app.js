// This project was developed during programming logic training with javascript

alert ("Boas vindas ao jogo do número secreto");
let numeroSecreto = parseInt(Math.random()*100+1)
console.log(numeroSecreto);
let chute;
let cont=0;

while(numeroSecreto!=chute){
    chute=prompt("Escolha um número inteiro que esteja no intervalo de 1 a 100");
 if(numeroSecreto==chute){
    alert(`Você acertou o número secreto que é ${numeroSecreto} e você fez isso em ${cont} tentativas`);
 } else {
    if(numeroSecreto>chute){
        alert(`O número secreto é maior que ${chute}` );
        cont=cont+1
    } else{
        alert(`O número secreto é menor que ${chute}`);
        cont=cont+1
    }
 }

}
