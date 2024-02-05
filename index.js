loading_text = "Time Travel."



for (let i = 0; i < loading_text.length; i++) {
    setTimeout(function() {
        document.getElementById("load_text").innerHTML += loading_text[i];
    }, 300 + (50 * i));
};