const container = document.getElementById('container');
const clear = document.getElementById('clear');
const color = document.getElementById('color');
const create = document.getElementById('create');

function createGrids(num){

    num = prompt('Enter a number');
    table = num*num;
    container.setAttribute('style', `grid-template-columns: repeat(${num}, 1fr)`);
    for (let i = 0; i < table; i++){
        let grid = document.createElement('div');
        grid.setAttribute('class', 'op');
        grid.onmouseover = function(){
        grid.style.backgroundColor = "black";
        };
        container.appendChild(grid);
    }

    
    
}

function getRandomColor () {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }

color.addEventListener('click', function(){
    const gridDivs = document.querySelectorAll(".op");
    gridDivs.forEach(grid => {
        grid.onmouseover = function(){
            grid.style.backgroundColor = getRandomColor();
        }
    })        
});

clear.addEventListener('click', function() {
    const gridDivs = document.querySelectorAll('.op')
    gridDivs.forEach(grid => {
      grid.remove();
    })
  });

create.addEventListener('click', function(){
    createGrids()
});