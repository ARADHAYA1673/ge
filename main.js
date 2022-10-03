canvas = document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="aqua";
width_line= 5;
var mouse_event="";
var last_position_of_x;
var last_position_of_y;
canvas.addEventListener("mousedown" , my_mousedown);
function my_mousedown(e)
{
    mouse_event="mouseDown";
}
canvas.addEventListener("mouseleave" , my_mouseleave);
function my_mouseleave(e)
{
    mouse_event="mouseLeave";
}
canvas.addEventListener("mouseup" , my_mouseup);
function my_mouseup(e)
{
    mouse_event="mouseUp";
}
canvas.addEventListener("mousemove" , my_mousemove);
function my_mousemove(e)
{
    current_position_of_mouse_x= e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y= e.clientX - canvas.offsetTop;
 if (mouse_event == "my_mousedown") {
    ctx.beginPath();
    ctx.strokeStyle =color;
    ctx.lineWidth = width_line;
    ctx.moveTo(last_position_of_x , last_position_of_y);
    ctx.lineTo(current_position_of_mouse_x , current_position_of_mouse_y);
    ctx.stroke();
 }
 last_position_of_x = current_position_of_mouse_x;
last_position_of_y = current_position_of_mouse_y;
}