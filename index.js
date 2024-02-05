loading_text = "Time Travel."

for (let i = 0; i < loading_text.length; i++) {
    setTimeout(function() {
        document.getElementById("load_text").innerHTML += loading_text[i];
    }, 1000 + (50 * i));
};


anime.timeline().add({
    targets: '.bar_left, .bar_right',
    width: ["0%","30%"],
    easing: 'easeInOutExpo',
    duration: 520,
    delay: 300
  });


anime.timeline().add({
    targets: '.bar_left, .bar_right',
    height: ["0%","10%"],
    easing: "cubicBezier(.5, .05, .1, .9)",
    duration: 520,
    delay: 1000
  });