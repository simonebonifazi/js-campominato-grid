
/*
Traccia:
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
Procediamo milestone per milestone senza invertire l'ordine.
Cerchiamo di fare almeno un commit per ogni milestone!
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

#MILESTONE 2
Rimuoviamo le celle che abbiamo inserito nell'HTML in modo da generarle tramite JS.
Al click del bottone play, vengono generate 100 celle in 10 righe da 10 celle ciascuna.
#MILESTONE 3
In ogni cella, deve comparire il numero corrispondente, in ordine da 1 a 100;
#MILESTONE 4
Al click sulla cella, stampiamo il numero della cella cliccata in console, poi coloriamo la cella d'azzurro!

*/

/*
steps milestone 2-- generazione celle
0. creazione variabili globali connesse al DOM
1. aggiungo evento allo scatenarsi del quale si generano le mie celle tramite |<=
2.|=> ciclo for per creare elementi da inserire nel testo (con metodo appendChild)
3. ? può servirmi una funzione? ? 
*/
//0.
const gameStarter = document.getElementById('game-starter');
const gameArea = document.getElementById('perimeter');

//1. in questo caso mi chiedo: mi può tornare utile il .this? per stabilire se adottare arrow f o f ; non lo so, non ho ben capito .this
gameStarter.addEventListener('click', function () {
    for (let i = 1; i <= 100; i++) {
        const cellElement = document.createElement('div');
        cellElement.className = 'cell';

        gameArea.appendChild(cellElement);
    }
})
