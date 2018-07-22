

var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: .5}});

// menu Highlights
var instaScene = new ScrollMagic.Scene({triggerElement: "#who", duration: $('#who').height()})
        .setClassToggle( "nav ul li:nth-child(1) a", "active")
        .addTo(controller);
var instaScene = new ScrollMagic.Scene({triggerElement: "#recruitment", duration: $('#recruitment').height()})
        .setClassToggle( "nav ul li:nth-child(2) a", "active")
        .addTo(controller);
var instaScene = new ScrollMagic.Scene({triggerElement: "#methodologies", duration: $('#methodologies').height()})
        .setClassToggle( "nav ul li:nth-child(3) a", "active")
        .addTo(controller);
var instaScene = new ScrollMagic.Scene({triggerElement: "#innovation", duration: $('#innovation').height()})
        .setClassToggle( "nav ul li:nth-child(4) a", "active")
        .addTo(controller);
var instaScene = new ScrollMagic.Scene({triggerElement: "#why", duration: $('#why').height()})
        .setClassToggle( "nav ul li:nth-child(5) a", "active")
        .addTo(controller);
var instaScene = new ScrollMagic.Scene({triggerElement: "#contact", duration: $('#contact').height()})
        .setClassToggle( "nav ul li:nth-child(6) a", "active")
        .addTo(controller);