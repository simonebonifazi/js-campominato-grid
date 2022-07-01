/*
Traccia:
# BONUS
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
Note:
- questo bonus richiederà una riflessione extra per quel che riguarda il calcolo della larghezza delle celle ;)
Consigli del giorno:
Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
Ad esempio:
Di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Le validazioni e i controlli possiamo farli anche in un secondo momento


*/

/*
steps milestone 2-- generazione celle
0. creazione variabili globali connesse al DOM
1. aggiungo evento allo scatenarsi del quale si generano le mie celle tramite |<=
2.|=> ciclo for per creare elementi da inserire nel testo (con metodo appendChild)
3. ? può servirmi una funzione? ? prma faccio funzionare tutto, poi refacturing
*/
/*
steps milestone 3-- numerazione celle
1. per far apparire il numero, mi servirà la i; come?
2. posso aggiungere del testo con il valore della i per ogni cella
3. do un po' di stile tramite css in fase refactoring
*/
/*
steps milestone 4
al click sulla cella, mi fa pensare ad un eventlistener sulla singola cella
dove poi stamperò in console il suo numero e tramite css la coloro di azzurro.
0. eventlistener sulla singola cella MA la vedo solo nel ciclo for!
*/

/* *********************************************
creo la funzione per creare celle */
function createCell(cellNumber) {
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.innerText = cellNumber;
    return cell;
}



// milestone 2. 0.
const gameStarter = document.getElementById('game-starter');
const gameArea = document.getElementById('perimeter');

//1. 
//2.bis rinomino e creo delle costanti in funzione della traccia del bonus:
let rows = 10;
//poichè la mia griglia sarà sempre quadrata
let cols = rows;
let totalRowsCols = rows * cols;
gameStarter.addEventListener('click', function () {
    //2.
    //per non fargli stampare tutte le celle di volta in volta
    gameArea.innerHTML = '';

    for (let i = 1; i <= totalRowsCols; i++) {

        //milestone 3. 
        const cellElement = createCell(i);


        //milestone 4.
        cellElement.addEventListener('click', function () {

            if (cellElement.classList.contains('clicked')) {
                return;
            }


            console.log(i);
            cellElement.classList.add('clicked');
        })

        gameArea.appendChild(cellElement);
    }
})

    // #MILESTONE 4
    // Al click sulla cella, stampiamo il numero della cella cliccata in console, poi coloriamo la cella d'azzurro!