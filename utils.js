function getDistance(x1, y1, x2, y2) {
    let y = x2 - x1;
    let x = y2 - y1;
  
    return Math.sqrt(x * x + y * y);
}

function getAngle(cx, cy, ex, ey) {
    let dy = ey - cy;
    let dx = ex - cx;

    let theta = Math.atan2(dy, dx);
    theta *= 180 / Math.PI;

    return theta;
}

const scrollPercent = () => {
    const bodyST = document.body.scrollTop;
    const docST = document.documentElement.scrollTop;
    const docSH = document.documentElement.scrollHeight;
    const docCH = document.documentElement.clientHeight;
    return (docST + bodyST) / (docSH - docCH) * 100
}

  //refreshes the time
function refreshTime() {
    var dateString = new Date().toLocaleString("en-US", {
        timeZone: "America/Denver", 
        hour12: false,
    });
    
    var formattedString = dateString.replace(", ", " - ");
    document.getElementById("time").innerHTML = "timeline: " + formattedString + " MDT";
}

// listeners
window.onscroll = () => {
  document.querySelector('.scroll_circle').style.top = scrollPercent() + "%";
};