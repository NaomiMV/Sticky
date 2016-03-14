var omhoog;
var omlaag = 0;
var naviMenu = $('nav');
var menuHoogte = naviMenu.outerHeight();

function verschuifmenu() {
    omhoog = $(this).scrollTop();
    if(omhoog > omlaag) {
        //we scrollen naar beneden
        console.log('we scrollen naar beneden');
        omlaag = omhoog;
        naviMenu.css('top', - menuHoogte + 'px')
    } else {
        //we scrollen naar beneden
        console.log('haal het menu ');
        omlaag = omhoog;
        naviMenu.css('top', 0);
    }
}

$(window).on('scroll', verschuifmenu);
