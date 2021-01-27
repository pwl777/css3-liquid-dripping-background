/* ------ JavaScript - Liquid Dripping Background ------ */
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.heigth = window.innerHeight;
ctx.font = "'Nosifer', cursive;";
ctx.fillStyle = "black";
ctx.textAlign = "center";
ctx.fillText("", canvas.width/2, canvas.height/2);

//-----------------------------------------------------------
// measure title element 
let titleElement = document.getElementById('title1');
titleMeasurements = titleElement.getBoundingClientRect();
let title = {
    x: titleMeasurements.left,
    y: titleMeasurements.top,
    width: titleMeasurements.width,
    height: 10,
}

//-----------------------------------------------------------

window.addEventListener('resize', function(){ // this allows the particles to react correctly with responsive screen size.
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    titleMeasurements = titleElement.getBoundingClientRect();
    title = {
        x: titleMeasurements.left,
        y: titleMeasurements.top,
        width: titleMeasurements.width,
        height: 10,
    }
    //init();
});