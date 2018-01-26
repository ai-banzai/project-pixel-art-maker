// Select color input
let color="#000000";
$("#colorPicker").change(function(){
  color=this.value;
})

// Select size input
let height=1;
$("#inputHeight").change(function(){
  height=this.value;
})

let width=1;
$("#inputWidth").change(function(){
  width=this.value
})

// When size is submitted by the user, call makeGrid()
$("#submit").click(function(e){
  e.preventDefault();
  makeGrid()});

function makeGrid() {

// create table of appropriate size
  console.log("submitted: " + height + ", " + width);
  $("#pixelCanvas").children().remove();
  let tableData = "";
  for (var c = 0; c < width; c++) {
    tableData = tableData + "<td></td>";
  };
  let tableRow = "<tr>" + tableData + "</tr>";
  for (var r = 0; r < height; r++) {
    $("#pixelCanvas").append(tableRow);
  };
};

// add event listener on click to every cell
$("#pixelCanvas").click("td", function(evt){
  $(evt.target).css("background-color", color);
});
