window.onload = () => {
    setInterval(particles,8);
    setInterval(parallax_items,8);
    animate();

    //initial call so it's not blank for a second
    refreshTime();
    setInterval(refreshTime, 1000);

    
    calculate('p1', 'p2', 'l1');
    calculate('p3', 'p4', 'l2');
    calculate('p5', 'p6', 'l3');
    calculate('p4', 'p7', 'l4');
    calculate('p4', 'p8', 'l5');
    calculate('p9', 'p10', 'l6');
    calculate('p10', 'p11', 'l7');
    calculate('p7', 'p9', 'l8');
    calculate('p9', 'p12', 'l9');
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
    parallax('sect2');
    parallax('hero');
    parallax('time');
    parallax('nav');
}

function form_appear() {
    anime({
        targets: '#form',
        translateX: ['100vw', '0vw'],
        easing: 'easeOutExpo',
        duration: 750,
        delay: 0

    })
}

function form_disappear() {
    anime({
        targets: '#form',
        translateX: ['0vw', '100vw'],
        easing: 'easeOutExpo',
        duration: 750,
        delay: 0

    })
}

var info_array = [
    'Beginning of Time<br>',
    'End of Time<br>',
    'Initial Break<br>',
    'Split Testing<br>',
    'Main Split Testing<br>',
    '6',
    'Merge Preperations',
    '8',
    'Merge Testing',
    '10',
    '11',
    '12',
];

function info(index) {
    document.getElementById('info_container').innerHTML = info_array[index-1];
}