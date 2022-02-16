const prompt = require("prompt-sync")();
console.clear();


let acoes = 1;
let p1;
let p2;
let p3;

const pers = 'Joaquim';
let condition =
{
    turno: [
        'Manhã',
        'Tarde',
        'Noite',
        'Madrugada', 
    ],
    status: [
        'Energia' == 100,
        'Munição' == 90,
    ],

}



function escolha1(motoca) {
    if (p1 == "moto") {
        console.log();
        console.log('Você escolheu moto ------> Durante seu trajeto, devido a confusão generalizada em plena rodovia e a falta de atenção de Joaquim, ele perde um pente de munição. ');
        condition.status[0] = 74;
        condition.status[1] = 60;
    }
    else {
        console.log();
        console.log('Você escolheu carro -------> Joaquim chegou no tempo esperado, porém um pouco cansado devido ao longo trajeto.')
        condition.status[0] = 87;
        condition.status[1] = 60;
    }
    console.log(`Energia, munição: ${condition.status}`);
    acoes++
    console.log();
}



function escolha2(tanque) {
    console.log();
    if (p1 === "moto" && p2 === "tanque") {
        console.log('Você escolheu tanque ------> Joaquim foi preciso! Acertou o tanque de combustível com apenas uma bala e explodiu o grupo de inimigos. Porém, o franco atirador o avistou e atirou, mas com sorte errou e Joaquim entrou.');
        condition.status[0] = 65;
        condition.status[1] = 59;
    }
    else if (p1 === "moto" && p2 === "atirar") {
        console.log('Você escolheu atirar ------> Joaquim matou o franco atirador, porém o grupo de inimigos ficou em alerta. Joaquim entra na mansão.');
        condition.status[0] = 70;
        condition.status[1] = 59;
    }
    else if (p1 === "carro" && p2 === "tanque") {
        console.log('Você escolheu tanque ------> Joaquim errou o tanque, foi avistado pelo franco atirador, baleado na perna e o grupo de inimigos ficou em alerta. Joaquim fugiu logo em sequência, utilizando torniquete.');
        condition.status[0] = 62;
        condition.status[1] = 88;
    }
    if (p1 === "carro" && p2 === "atirar") {
        console.log('Você escolheu atirar ------> Joaquim acerta o franco atirador, porém não o mata. Um dos integrantes do grupo de inimigos próximo, localiza Joaquim e o persegue, mas ele consegue despistá-lo, após fugir e atirar na direção do inimigo. ');
        condition.status[0] = 61;
        condition.status[1] = 82;
    }
    console.log(`Energia, munição: ${condition.status}`);
    acoes++
    console.log();
}

function escolha3(esconder) {
    console.log();
    if (p1 === "moto" && p2 === "tanque" && p3 === "esconder") {
        console.log('Você escolheu esconder ------> Joaquim entra no meio da multidão e recupera parte de sua energia');
        condition.status[0] = 75;
        condition.status[1] = 55;
        console.log(`Energia, munição: ${condition.status}`);
        console.log();
        console.log('Logo após, Joaquim avista o multimilionario, o mata mas no fim acaba sendo morto pelos capangas.')
        console.log();
        console.log('GAME OVER!');
    }
    else if (p1 === "moto" && p2 === "atirar" && p3 === "esconder") {
        console.log('Você escolheu esconder ------> Joaquim, no meio da multidão, recupera em partes sua energias');
        condition.status[0] = 80;
        condition.status[1] = 55;
        console.log(`Energia, munição: ${condition.status}`);
        console.log();
        console.log('Ao despersar da multidão, Joaquim foi visto pelos capagangas que estavam lhe procurando. Joaquim atira e mata alguns, porém é terrivelmente assassinado');
        console.log();
        console.log('GAME OVER!')
    }
    else if (p1 === "carro" && p2 === "tanque" && p3 === "esconder") {
        console.log('Você escolheu esconder ------> Joaquim foi visto entrando na multidão,identificado por sua perna baleada. O multimilionário, ordenou sua morte.');
        condition.status[0] = 0;
        condition.status[1] = 0;
        console.log();
        console.log(`Energia, munição: ${condition.status}`);
        console.log();
        console.log('GAME OVER!');
        
    }
    else if (p1 === "carro" && p2 === "atirar" && p3 === "esconder") {
        console.log('Você escolheu esconder ------> Joaquim, após pensar que havia despistado do integrante, foi visto pelo mesmo entrando na multidão. Este por sua vez, comunicou ao multimilionário que armou uma emboscada e assassinou Joaquim.');
        console.log();
        condition.status[0] = 0;
        condition.status[1] = 0;
        console.log(`Energia, munição: ${condition.status}`);
        console.log();
        console.log('GAME OVER!');
        
    }
    else if (p1 === "moto" && p2 === "tanque" && p3 === "arriscar") {
        console.log('Você escolheu arriscar ------> Joaquim se arrisca para tentar matar o multimilionário, mas foi surpreendido por um golpe fatal');
        condition.status[0] = 0;
        condition.status[1] = 0;
        console.log(`Energia, munição: ${condition.status}`);
        console.log();
        console.log('GAME OVER!');
    }
    else if (p1 == "moto" && p2 == "atirar" && p3 == "arriscar") {
        console.log('Você escolheu arriscar ------> Joaquim foi impreciso, errou o tiro e acabou sendo baleado de maneira cruel.');
        condition.status[0] = 0;
        condition.status[1] = 0;
        console.log(`Energia, munição: ${condition.status}`);
        console.log();
        console.log('GAME OVER!');
    }
    else if (p1 === "carro" && p2 === "tanque" && p3 === "arriscar") {
        console.log('Você escolheu arriscar ------> Devido a sua perna baleada, Joaquim não consegiu não resistiu ao sangramento tendo em vista que seu torniquete não foi suficiente');
        condition.status[0] = 0;
        condition.status[1] = 0;
        console.log(`Energia, munição: ${condition.status}`);
        console.log();
        console.log('GAME OVER!');
    }
    if (p1 === "carro" && p2 === "atirar" && p3 === "arriscar") {
        console.log('Você escolheu arriscar ------> Joaquim foi negligente, o multimilionário o avistou e o matou antes que pudesse chegar a uma distância favorável');
        condition.status[0] = 0;
        condition.status[1] = 0;
        console.log(`Energia, munição: ${condition.status}`);
        console.log();
        console.log('GAME OVER!');
    }
    acoes++

}

do {
    console.log('Joaquim, morador de periferia, 42 anos, recebe proposta de agiota para quitar sua dívida. O mesmo aceita sem pensar duas vezes.');
console.log('Alguns minutos depois, Joaquim fica perplexo ao ser levado para uma espécie de "treinamento". Espantado, ele questiona ao agiota qual sua missão: "Matar o multimilionário temido do nosso país." - respondeu.')
console.log();
console.log('O agiota entrega ao Joaquim uma submetralhadora, três pentes de 30 balas, totalizando 90, e ainda disponibiliza que Joaquim escolha entre uma moto e um carro para assim, começar sua missão.');



while (acoes <= 3) {
    console.log();
    if (acoes == 1) {
        console.log(`Turno: ${condition.turno[0]}`)
        p1 = prompt('Escolha por Joaquim, carro ou moto?  ')
        escolha1(p1);
    }
    else if (acoes == 2) {
        console.log(`Turno: ${condition.turno[1]}`)
        console.log('Depois de tanto procurar, Joaquim finalmente encontra a mansão de seu alvo e de imediato já encontra uma oportunidade de entrar no recinto. Suas opçôes: matar o franco atirador na janela e nela entrar ou atirar em um tanque grande de gasolina na entrada principal para matar os capangas e assim poder entrar')
        p2 = prompt('Digite "tanque" para Joaquim explodi-lo ou "atirar" para matar franco atirador:  ');
        escolha2(p2);
        
    }
    else {
        console.log(`Turno: ${condition.turno[2]}`)
        console.log('Minutos depois, Joaquim recebe informações através de seu dispositivo que o multimilionário está em um evento em área pública. Ele só não sabe que o multimilionário está ciente da última ação de Joaquim e que ele quer matá-lo');
        console.log('Chegando lá, nosso personagem avista seu alvo em um camarote e encontra outras duas opções: se esconder no meio da multidão e em seguida matar o multimilionário ou se arriscar e chegar uma distância segura do alvo e assim poder disparar.');
        p3 = prompt('Qual ação de ver realizada? "esconder" ou "arriscar"  ');
        escolha3(p3);
        }
}
    var reinicia = prompt('Jogar novamente? sim ou não  ')
    acoes = 1
}
while (reinicia === "sim")