/*Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;*/

const playButton = document.getElementById("play-button");
const difficultySelector = document.querySelector("select");

function play() {
    let squareNumbers = setMode(difficultySelector.value);
    let squarePerRow = Math.sqrt(squareNumbers);


}

function setMode(difficulty) {//Imposta difficoltà
    let squareNumbers;
    switch (difficulty) {//Dipendentemente dal valore di difficoltà che riceve, ritornerà un int differente di cicli da fare
        case "easy":
            return squareNumbers = 100;
        case "medium":
            return squareNumbers = 81;
        case "hard":
            return squareNumbers = 49;


    }
} 

function drawSquare (index, numSquares) {
    const square = document.createElement("div");//Crea un div
    square.classList.add("square");//Assegna la classe square
    square.style.width = `calc(100% / ${numSquares})`;//Dagli larghezza 100% / numero di quadratini che saranno creati al termine del ciclo
    square.style.height = square.style.width;//La larghezza è uguale all'altezza (quadrato)
    return square;//Ritorna il quadratino 
}