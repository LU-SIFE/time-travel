window.onload = () => {
    setInterval(particles,0);
    setInterval(parallax_items,0);
    animate();

    //initial call so it's not blank for a second
    refreshTime();
    setInterval(refreshTime, 1000);
}

function particles() {
    calculate('cursor', 'cursor2', 'sat');
    calculate('cursor2', 'cursor3', 'sat2');
    calculate('point1', 'point2', 'pline1');
    calculate('point2', 'point3', 'pline2');
    calculate('point3', 'point1', 'pline3');
}

function parallax_items() {
    parallax('scroll_nav');
    parallax('bar_expand');
    parallax('bottom_text');
    parallax('resolve');
    parallax('point1');
    parallax('point2');
    parallax('point3');
    parallax('pline1');
    parallax('pline2');
    parallax('pline3');
    parallax('hero');
    parallax('time');
    parallax('nav');
}