console.clear();
const prompt = require('prompt-sync')();


var vezes;
let escolhas = ['pedra', 'papel', 'tesoura'];
let tamanho_array = escolhas.length;
let n_aleatorio ;
let vitoriaJ = 0;
let vitoriaPc = 0;
let empate = 0;

let pc;
var jogador;


do{
    console.log();
    vezes = +prompt('Digite o número de rodadas para ser declarado um campeão: ');
    for( var i=0; i < vezes; i++){
        console.log();
        jogador = prompt('Escolha com sabedoria: pedra, papel ou tesoura? ');
        n_aleatorio = Math.floor(Math.random() * tamanho_array)
        pc = (escolhas[n_aleatorio]).toString();
        console.log(`O computador escolheu ${pc}`);
        console.log();
    
        if(jogador === 'pedra' && pc ==='tesoura' || jogador === 'papel'&& pc === 'pedra' || jogador === 'tesoura' && pc === 'papel' ){
            console.log('VOCE GANHOU!');
            vitoriaJ++
        }
        else if(jogador===pc){
            console.log('Empate!')
            empate++
        }
        else{
            console.log('PC GANHOU!')
            vitoriaPc++
        }
    }
    
    console.log();
    console.log(`Total de rodadas: ${i}. Rodadas empatadas: ${empate}. Você ganhou: ${vitoriaJ} e o computador ganhou: ${vitoriaPc}.`);
    if(vitoriaJ>vitoriaPc){
        console.log();
        console.log('O grande campeão foi... você JOGADOR! ');
        console.log("PARABÉNS!!!")
        console.log();
    }
    else if(vitoriaJ<vitoriaPc){
        console.log();
        console.log('COMPUTADOR foi o grande campeão!');
        console.log('Quem sabe na próxima, hein?!');
        console.log();
    }
    else{
        console.log();
        console.log('EMPATAMOS, jogador. Não houve um campeão geral!');
        console.log();
    }
    var reinicia= prompt('Deseja jogar novamente? Digite sim ou nao: ')
} while(reinicia==='sim')
