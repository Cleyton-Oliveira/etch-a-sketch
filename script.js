
function setupSquares(containerFather, NUM_ROWS=16, NUM_COLUMNS=16){
    let newSquare;
    console.log(NUM_ROWS, NUM_COLUMNS);
    for(let i = 0; i < NUM_ROWS; i++){
        for(let j = 0; j < NUM_COLUMNS; j++){
            newSquare = document.createElement("div");
            newSquare.setAttribute("style",`width: ${Math.floor(100/(NUM_ROWS))}%; height: ${100/(NUM_COLUMNS)}%; margin: 0; padding: 0;`);
            containerFather.appendChild(newSquare);
        }
    }
}
function resetSquares(containerFather){
    while(containerFather.firstChild){
        containerFather.firstChild.remove();
    }
}

function draw(){
    let pixels = document.querySelectorAll("#container > *");
    pixels.forEach((pixel)=>{
        pixel.addEventListener("mouseover",()=>{
            if(mousePressed){
                if(drawingMode)
                    pixel.classList.add("pen");
                else{
                    pixel.classList.remove("pen");
                }
            }
        });
    });
}
function reset(container){
    
}

let mousePressed = false;
let drawingMode = true;

window.addEventListener("mousedown", ()=> {
    mousePressed = true;
    console.log("pressed");
});
window.addEventListener("mouseup", ()=> {
    mousePressed = false;
    console.log("unpressed");
});
let container = document.querySelector("#container");
setupSquares(container);
draw();
let resetButton = document.querySelector("#reset-button");
resetButton.addEventListener("click",()=>{
    resetSquares(container);
    let newDimension = prompt("Insira a dimensão que deseja:\nFormato:linha x coluna\n  max:100 x 100 min:16 x 16");
    newDimension = newDimension.toLowerCase().split("x");
    let row = parseInt(newDimension[0]);
    let column = parseInt(newDimension[1]);
    row = row > 100? 100 : row < 16? 16 : row;
    column = column > 100? 100 : column < 16? 16 : column;
    if(!row || !column){
        setupSquares(container);
        alert("Formato inválido!\nO canvas foi redefinido no padrão 16 x 16.")
    }else{
        setupSquares(container, row, column);
    }

    draw();
});

document.querySelector("#pen-button").addEventListener("click", () =>{
    drawingMode = true;
});
document.querySelector("#erase-button").addEventListener("click",()=>{
    drawingMode = false;
});