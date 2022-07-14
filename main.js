canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
rover_x = 50;
rover_y = 50;
rover_width = 100;
rover_height = 100;
images = ["img1.jpeg", "img2.jpeg", "img3.jpeg", "img4.jpeg", "img5.jpeg", "img6.jpeg", "img7.jpeg", "img8.jpeg", "img9.jpeg"];
r = Math.floor(Math.random()*9);
console.log(r);
background_image = images[r];
rover_image = "rover.png";

function add()
{
background_imgTag = new Image();
background_imgTag.onload = uploadBackground;
background_imgTag.src = background_image;
rover_imgTag = new Image();
rover_imgTag.onload = uploadRover;
rover_imgTag.src = rover_image;
}
function uploadBackground()
{
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}
function uploadRover()
{
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if (keyPressed == '38')
    {
        up();
        console.log("up");
    }

    if (keyPressed == '40')
    {
        down();
        console.log("down");
    }

    if (keyPressed == '37')
    {
        left();
        console.log("left");
    }
    
    if (keyPressed == '39')
    {
        right();
        console.log("right");
    }
}
function up()
{
 if (rover_y>=0)
 {
     rover_y = rover_y - 10;
    console.log("When up arrow key is pressed, x = "+ rover_x + ", y = "+rover_y);
    uploadBackground();
    uploadRover();
 }
}
function down()
{
    if (rover_y<=500)
    {
        rover_y = rover_y + 10;
        console.log("When down arrow key is pressed, x = " + rover_x + ", y = " + rover_y);
        uploadBackground();
        uploadRover();
    }
}
function left()
{
    if(rover_x>=0)
    {
        rover_x = rover_x - 10;
        console.log("When left arrow key is pressed, x = " + rover_x + ", y = " + rover_y);
        uploadBackground();
        uploadRover();
    }
}
function right()
{
    if(rover_x<=700)
    {
        rover_x = rover_x + 10;
        console.log("When right arrow key is pressed, x = " + rover_x + ", y = " + rover_y);
        uploadBackground();
        uploadRover();
    }
}