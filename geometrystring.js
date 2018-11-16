/*String Art
*/

function setup () {
    createCanvas(1200, 600);   
}

function draw() {
    background("navy");

        var a = 0;
        var b = 1200;
        var c = 600;
        var r = atan2(mouseY-height/2, mouseX-width/2);

   for (var i = a; i < 2500; i += 10) { //starts at 0, adds 10 to i until 640

        noFill();
        stroke("yellow");
        strokeWeight(1);

     translate(width/2, height/2);
        push();
        rotate(r);
        ellipse(a, a, 10, 10);
        pop();
        angleMode(RADIANS);
        rotate(r);//rotates lines around the center ellipse when mouse is moved

        line(a, a, width-c, b); //second line from the bottom left
        line(a, a, b, i); //line closest to the bottom right
        line(a, a, -30, i+300); //line closest to the bottom left
        line(a, a, i+600, b); //second line from the bottom right
    }
}