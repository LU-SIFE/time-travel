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
    '<b>Beginning of Time</b><br>',

    '<b>End of Time</b><hr><br>A popular place, witness the final moments before the destruction of everything, safely through a time loop, and enjoy a dinner at the resteraunt at the end of time™',

    '<b>Signing of the Magna Carta</b><hr><br>Travelers often visit this time to witness the signing of one of history\'s most important documents.',

    '<b>Treaties of Peace</b><hr><br>After the \'Magna Carta\', a series of peace treaties were signed, because of the invention of time travel. Solving conflicts by time travel is an effective path towards world peace.',

    '<b>Building of the pyramids</b><hr><br>The pyramids weren\'t built by aliens, they were built by time travelers who traveled back to help with construction.<br><br>Help out today!',

    '<b>Life Preservation Sanction</b><hr><br>Life from another timeline has been relocated to this one, leaving an empty space for testing purposes.',

    '<b>Intergalactic Space Travel</b><hr><br>After major progression, space travel became a thing anyone can do. Visit distant stars and solar systems, in the future.',

    '<b>Accidental Timeline Branch</b><hr><br>This branch of time is disconnected from the others, and is mostly used for research purposes. All life has been carefully transported to another.',

    '<b>World Peace Achieved</b><hr><br>Witness the moment where world peace has finally been achieved, wit hthe signing of the \'Pax mundi\' Treaty.<br><br>Sign your own name!',

    '<b>Intergalactic Peace</b><hr><br>With the signing of the \'spatium pacis\', Intergalactic Peace was established. A safer time to travel the stars has never been known.',

    'Disease from the future brought to the past.<br>Timeline reset.<br>',

    '<b>Nuclear Fallout</b><hr><br>After a country broke the treaty, a nuclear fallout occured. If you would like to live in a post-apocalyptic wasteland, this timeline is for you!',
];

function info(index) {
    document.getElementById('info_container').innerHTML = info_array[index-1];
}