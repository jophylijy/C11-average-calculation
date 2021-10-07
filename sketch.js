var marks = [35,38,42,45,43,34,36,41,48,32];
var average;
function marks_average() {
  var sum = 0;
  for (var i = 0; i<marks.length; i = i+1) {
    var sum = sum + marks [i];
  }
  var average = sum/marks.length;
  console.log(average);
}
function setup() {
  createCanvas(400,400);
  marks_average();
}
function draw() 
{
  background(30);
}

 

