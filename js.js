const body = document.body



createGrid()







function createGrid() {
    let i = 0;
    while (i <= 255) {
        
        const grid = document.querySelector('.grid-16x16');
        const div = document.createElement('div');
        div.classList.add("canvas")
        grid.append(div);
        i ++;
    }
}

let paint = document.getElementsByClassName("canvas");
paint.addEventListener("mouseover", paintCanvas);

function paintCanvas() {
    paint.setAttribute("style", "background-color:white;")
}
