//select required methods to get input
var canvas = document.getElementById("pixelCanvas");
var color = document.getElementById("colorPicker");
var sizePicker = document.getElementById("sizePicker");
var height = document.getElementById("inputHeight");
var width = document.getElementById("inputWidth");

//function to create grid
function makeGrid(height, width) {
    for (let y = 0; y < height; y++) {
        let row = canvas.insertRow(y);
        for (let x = 0; x < width; x++) {
            let cell = row.insertCell(x);
            cell.addEventListener("mousedown", function(event) {
                cell.style.backgroundColor = color.value;
            cell.addEventListener("contextmenu", function(event) {
                event.preventDefault();
                cell.style.backgroundColor = "white";
            } )
            } )
        }
    }
}
//function for submit button
sizePicker.addEventListener("submit", function(event) {
    event.preventDefault();
    while (canvas.hasChildNodes()) {
        canvas.removeChild(canvas.lastChild);
    }
    makeGrid(height.value, width.value);
});
