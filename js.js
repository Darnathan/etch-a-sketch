let grid = document.querySelector('.grid');
let button = document.querySelector('button');


function refreshPage(){
    window.location.reload();
} 

function randomHsl() {
    return 'hsla(' + (Math.random() * 360) + ', 100%, 50%, 1)';
}

function createGrid() {
    let gridSize = prompt("Add a number 5-100!")
    if (gridSize <= 100) {
        grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
        grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
        for (let i = 0; i < (gridSize * gridSize); i++) {
            
        
            let div = document.createElement('div');
            div.style.backgroundColor ="black"
            div.classList.add("canvas")
            grid.append(div);
            div.addEventListener("mouseover", function(event) {
                event.target.style.backgroundColor = `${randomHsl()}`
        })
        
    }
} else {
    refreshPage()

}
    
}


createGrid()
button.addEventListener("click", refreshPage);