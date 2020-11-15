canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var last_x;
var last_y;
mouse_event = "";
radius = 3;
width = 4;
color = "green";
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(event) {
    radius = document.getElementById("radius_input").value;
    width = document.getElementById("width_input").value;
    color = document.getElementById("color_input").value;
    mouse_event = "mousedown";
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(event) {
    mouse_event = "mouseup";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(event) {
    mouse_event = "mouseleave";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(event) {
    current_x = event.clientX-canvas.offsetLeft;
    current_y = event.clientY-canvas.offsetTop;
    if (mouse_event == "mousedown") {
        console.log("Current x position = " + current_x);
        console.log("Current y position = " + current_y);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.arc(current_x, current_y, radius, 0, 2*Math.PI);
        ctx.stroke();
    }
    last_x = current_x;
    last_y = current_y;
}