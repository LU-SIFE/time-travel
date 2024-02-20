function begin() {
    anime.timeline().add({
        targets: '.behind_expand',
        translateX: ["0em", "-75vw"], 
        easing: "easeOutElastic(0,1)",
        duration: 500,
      });
}