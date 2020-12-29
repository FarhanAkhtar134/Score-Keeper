// const button1 = document.querySelector("#p1Button");
// const button2 = document.querySelector("#p2Button");
// const p1Display = document.querySelector("#p1Display");
// const p2Display = document.querySelector("#p2Display");
const reset = document.querySelector("#reset");
const winningToSelect = document.querySelector("#playto");

const p1 = {
    score : 0,
    button: document.querySelector("#p1Button"),
    display: document.querySelector("#p1Display"),

}

const p2 = {
    score: 0,
    button: document.querySelector("#p2Button"),
    display: document.querySelector("#p2Display"),

}


// let p1Score = 0;
// let p2Score= 0;
let winingScore = 3; // default score is 5 
let isGameOver = false;


function updateScores(player,opponent) {

    if (!isGameOver) {

        player.score += 1;
        if (player.score === winingScore) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;


        }

        player.display.textContent = player.score;
    }


}

p1.button.addEventListener('click' , function () {

   updateScores(p1,p2);
})

p2.button.addEventListener('click', function () {

   updateScores(p2,p1);
    
})


winningToSelect.addEventListener('change' , function () {
    winingScore = parseInt (this.value);
    res();


})

reset.addEventListener('click' , res );


function res () {

    isGameOver = false;
    for(let p of [p1,p2])
    {
        p.score = 0;
        p.display.textContent = p.score;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }


   

}