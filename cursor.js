var mouse = new Object();

// moves cursor to correct position
document.onmousemove = function(event) {
    mouse.x = event.clientX - window.innerWidth / 2;
    mouse.y = event.clientY - window.innerHeight / 2;

    move_item(event, 'cursor', 0);
    move_item(event, 'cursor2', 100);
    move_item(event, 'cursor3', 200);

  };

function move_item(event, el, delay) {
    if (!(delay === 0)) {

        setTimeout(() => {
            document.getElementById(el).style.left = event.clientX + 'px';
            document.getElementById(el).style.top = event.clientY + 'px';
        }, delay);

    } else {
        document.getElementById(el).style.left = event.clientX + 'px';
        document.getElementById(el).style.top = event.clientY + 'px';
    }
}

function parallax(el) {
    document.getElementById(el).style.translate = -(mouse.x/100) + "px " + -(mouse.y/35) + "px";
}
 
 //changes cursor state onhover
 function ch(state) {
    if (state === true) {
        document.getElementById("cursor").classList.remove("cursor_shrink");
        document.getElementById("cursor").classList.add("cursor_expand");

        anime({
            targets: '#cursor2',
            width: "4.5em",
            height: "4.5em",
            duration: 200
        });

    } else {
        document.getElementById("cursor").classList.remove("cursor_expand");
        document.getElementById("cursor").classList.add("cursor_shrink");

        anime({
            targets: '#cursor2',
            width: "0.75em",
            height: "0.75em",
            duration: 200
        });
    }
  }

function calculate(el1, el2, line) {
    
    var p1 = new Object();
    var p2 = new Object();

    // first point
    p1.x = parseInt(document.getElementById(el1).offsetLeft);
    p1.y = parseInt(document.getElementById(el1).offsetTop);

    // second point
    p2.x = parseInt(document.getElementById(el2).offsetLeft);
    p2.y = parseInt(document.getElementById(el2).offsetTop);

    
    // checks if either points are outside the range of the screen boundaries
    // this prevents long lines being drawn from in bound to out bound.
    if (!(p1.x < 0 || p1.y < 0 || p2.x < 0 || p2.y < 0)) {

        // get width between points
        var width = getDistance(p1.x, p1.y, p2.x, p2.y);

        // calculate angle between points
        var angle = getAngle(p1.x, p1.y, p2.x, p2.y);
        
        // assign position of the line
        document.getElementById(line).style.left = p1.x + "px";
        document.getElementById(line).style.top = p1.y + "px";

        // assign width of the line
        document.getElementById(line).style.width = width + "px";

        // assign rotation towards the second point
        document.getElementById(line).style.rotate = angle +"deg";
    }
}