console.clear();
const prompt = require('prompt-sync')();

//background TTULO: brotherhood
console.log('Imagine que você é um bruxo e precisa salvar a magia passando por 5 situações. Sendo assim, decida em cada situação o que deverá fazer para concretizar seu destino:')

const r1 = 1;
const r2 = 0;
const result = 0;
let result1 = 0;
let result2 = 0;
let result3 = 0;
let result4 = 0;
let result5 = 0;

console.log('Passaram por elfos?');
let p1 = +prompt(`Digite ${r1} para sim e ${r2} para não: `);
console.log(p1);

if (p1 == r1) {
    result1 = (result + 1);
} else {
    result1 = result;
}


console.log('Foi aberto algum portal?');
let p2 = +prompt(`Digite ${r1} para sim e ${r2} para não: `);
console.log(p2);

if (p2 == r1) {
    result2 = ( result1 + 1);
} else{
    result2 = result1 ;
   
}

console.log('Duelou contra alguém?');
let p3 = +prompt(`Digite ${r1} para sim e ${r2} para não: `);
console.log(p3);

if (p3 == r1) {
    result3 = (result2 +1);
} else{
    result3 = result2 ;
}


console.log('Conseguiu escapar da situação? (Morte)');
let p4 = +prompt(`Digite ${r1} para sim e ${r2} para não: `);
console.log(p4); 
if (p4 == r1) { 
    result4 = (result3 + 1);
} else{
    result4 = result3 ;
}

console.log('Encontrou a pedra fundamental para o renascimento da magia? ');
let p5 = +prompt(`Digite ${r1} para sim e ${r2} para não: `);
console.log(p5) ;
if (p5 == r1) { 
    result5 = (result4 + 1);
} else{
    result5 = result4 ; 
}
console.log(`Seu resultado foi de ${result5} estrelas.`);


if (result5 >= 5){
    console.log('Você triunfa de maneira inquestionável e seus feitos serão lembrados por muitas gerações.');
}
else if(result5 > 3 && result5 <= 4){
    console.log('Depois de muito esforço você conquista seu objetivo, embora não de maneira perfeita.');
}
else if(result5 > 2 && result5 <= 3){
    console.log('Você chega perto de conseguir alcançar seu objetivo, mas acaba falhando por pouco.');
}
else if(result5 >= 1 && result5<= 2){
    console.log('Você falha, mas ainda consegue fugir da situação.');
}
else {
    console.log('Você falha miseravelmente.');
}
