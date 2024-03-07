window.onload = function() {
    setInterval(calculate,0);
    setInterval(parallax,0);
    refreshTime();
    setInterval(refreshTime, 1000);

    anime({
        targets: '#bar_expand',
        width: "40em",
        duration: 600,
        delay: 500
    });

    anime({
        targets: "#hero",
        opacity: ["0", "1"],
        duration: 7000
    });

    anime({
        targets: "#bottom_text",
        opacity: ["0", "1"],
        duration: 7000,
        delay: 1000
    });

    anime({
        targets: '#point1',
        right: ["4.675em", "1.675em", "1.675em", "4.675em", "4.675em"],
        top: ["2.325em", "2.325em", "5.325em", "5.325em", "2.325em"],
        easing: 'easeInOutCirc',
        duration: 5000,
        loop: true
    });

    anime({
        targets: '#point2',
        right: ["1.675em", "1.675em", "4.675em", "4.675em", "1.675em"],
        top: ["2.325em", "5.325em", "5.325em", "2.325em", "2.325em"],
        easing: 'easeInOutCirc',
        duration: 5000,
        loop: true
    });

    anime({
        targets: '#point3',
        right: ["1.675em", "4.675em", "4.675em", "1.675em", "1.675em"],
        top: ["5.325em", "5.325em", "2.325em", "2.325em", "5.325em"],
        easing: 'easeInOutCirc',
        duration: 5000,
        loop: true
    });
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

const scrollPercent = () => {
  const bodyST = document.body.scrollTop;
  const docST = document.documentElement.scrollTop;
  const docSH = document.documentElement.scrollHeight;
  const docCH = document.documentElement.clientHeight;
  return (docST + bodyST) / (docSH - docCH) * 100
}