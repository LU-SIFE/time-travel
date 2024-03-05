var mouse = new Object();

// moves cursor to correct position
document.onmousemove = function(event) {
    mouse.x = event.clientX - window.innerWidth / 2;
    mouse.y = event.clientY - window.innerHeight / 2;
    document.getElementById('cursor').style.left = event.clientX + 'px';
    document.getElementById('cursor').style.top = event.clientY + 'px';
    setTimeout(function() {
        document.getElementById('cursor2').style.left = event.clientX + 'px';
        document.getElementById('cursor2').style.top = event.clientY + 'px';

    },100);
    setTimeout(function() {
        document.getElementById('cursor3').style.left = event.clientX + 'px';
        document.getElementById('cursor3').style.top = event.clientY + 'px';

    },200);
  };
 
 //changes cursor state onhover
 function ch(state) {
    if (state === true) {
      document.getElementById("cursor").classList.remove("cursor_shrink");
      document.getElementById("cursor").classList.add("cursor_expand");
    } else {
      document.getElementById("cursor").classList.remove("cursor_expand");
      document.getElementById("cursor").classList.add("cursor_shrink");
    }
  }

function calculate() {
    var x1 = parseInt(document.getElementById('cursor').style.left)
    var y1 = parseInt(document.getElementById('cursor').style.top)

    var x2 = parseInt(document.getElementById('cursor2').style.left)
    var y2 = parseInt(document.getElementById('cursor2').style.top)
    
    var x3 = parseInt(document.getElementById('cursor3').style.left)
    var y3 = parseInt(document.getElementById('cursor3').style.top)
    
    if (x1 < x2) {
        document.getElementById("sat").style.left = x1 + "px";
        document.getElementById("sat").style.top = y1 + "px";
    } else {
        document.getElementById("sat").style.left = x1 + "px";
        document.getElementById("sat").style.top = y1 + "px";
    }

    var width = getDistance(x1, y1, x2, y2);
    var angle = angleCalc(x1, y1, x2, y2);
    
    document.getElementById("sat").style.rotate = angle +"deg";
    document.getElementById("sat").style.width = width + "px";

//
//

        document.getElementById("sat2").style.left = x2 + "px";
        document.getElementById("sat2").style.top = y2 + "px";
 
    
    var width = getDistance(x2, y2, x3, y3);
    var angle = angleCalc(x2, y2, x3, y3);
    
    document.getElementById("sat2").style.rotate = angle +"deg";
    document.getElementById("sat2").style.width = width + "px";
}

function getDistance(x1, y1, x2, y2) {
    let y = x2 - x1;
    let x = y2 - y1;
  
    return Math.sqrt(x * x + y * y);
  }

  function angleCalc(cx, cy, ex, ey) {
    var dy = ey - cy;
    var dx = ex - cx;
    var theta = Math.atan2(dy, dx); // range (-PI, PI]
    theta *= 180 / Math.PI; // rads to degs, range (-180, 180]
    return theta;
  }

function parallax() {
    document.getElementById('nav').style.translate = -(mouse.x/100) + "px " + -(mouse.y/35) + "px";
    document.getElementById('bar_expand').style.translate = -(mouse.x/100) + "px " + -(mouse.y/35) + "px";
    document.getElementById('hero').style.translate = -(mouse.x/100) + "px " + -(mouse.y/35) + "px";
    document.getElementById('bottom_text').style.translate = -(mouse.x/100) + "px " + -(mouse.y/35) + "px";
    document.getElementById('time').style.translate = -(mouse.x/100) + "px " + -(mouse.y/35) + "px";
    document.getElementById('scroll_nav').style.translate = -(mouse.x/100) + "px " + -(mouse.y/35) + "px";
    document.getElementById('resolve').style.translate = -(mouse.x/100) + "px " + -(mouse.y/35) + "px";
}