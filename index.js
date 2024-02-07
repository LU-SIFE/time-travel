loading_text = [
  "Time Travel.",
  "Is it possible?",
  "Scroll down to find out."

];

disableScroll();
setTimeout(function() {change_text(0)}, 1000);
setTimeout(function() {change_text(1)}, 3000);
setTimeout(function() {change_text(2)}, 5000);
setTimeout(function() {enableScroll()}, 6500);



function change_text(index) {
  //clears text for re-use
  document.getElementById("load_text").innerHTML = "";

  for (let i = 0; i < loading_text[index].length; i++) {
    setTimeout(function() {document.getElementById("load_text").innerHTML += loading_text[index][i];}, 50 * i);
  }
}


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


  
function disableScroll() {
    // Get the current page scroll position in the vertical direction
   scrollTop =
       window.pageYOffset || document.documentElement.scrollTop;
        
        
// Get the current page scroll position in the horizontal direction 

 scrollLeft =
   window.pageXOffset || document.documentElement.scrollLeft;
   
   
  // if any scroll is attempted,
 // set this to the previous value
 window.onscroll = function() {
  window.scrollTo(scrollLeft, scrollTop);
 };
}

  function enableScroll() {
     window.onscroll = function() {};
 }