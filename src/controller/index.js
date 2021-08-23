
let counterHTML = document.getElementById("count_col");
let lapsCompleted = 0;

function incriment(){
    lapsCompleted++;
    console.log(lapsCompleted);
    counterHTML.textContent = lapsCompleted;
}

function save(){
    console.log(lapsCompleted);
}
