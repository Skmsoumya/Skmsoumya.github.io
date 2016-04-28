$(window).load(function() {
	// Animate loader off screen
	$(".se-pre-con").fadeOut("slow");

	$("#menu").css({
        backgroundColor: "#2c3e50"
    });

    $("#menu-about-button").click(function() {
    	$.fn.fullpage.moveTo(1);
    	ga("send", "event", "userAction", "buttonClick", "menu-about-button");
    });

    $("#menu-skills-button").click(function() {
    	$.fn.fullpage.moveTo(2);
    	ga("send", "event", "userAction", "buttonClick", "menu-skill-button");
    });

    $("#menu-portfolio-button").click(function() {
    	$.fn.fullpage.moveTo(3);
    	ga("send", "event", "userAction", "buttonClick", "menu-portfolio-button");
    });

    $("#menu-contact-button").click(function() {
    	$.fn.fullpage.moveTo(4);
    	ga("send", "event", "userAction", "buttonClick", "menu-contact-button");
    });

    $(".contact-button").click(function() {
    	$.fn.fullpage.moveTo(4);
    	ga("send", "event", "userAction", "buttonClick", "contact-button");
    });

    $("#facebook-span").click(function() {
    	window.open('http://www.facebook.com/soumya.k.mishra.5', '_blank');
    	ga("send", "event", "userAction", "buttonClick", "social-facebook-button");
    });

    $("#twitter").click(function() {
    	window.open('http://twitter.com/Soumya_kishor', '_blank');
    	ga("send", "event", "userAction", "buttonClick", "social-twitter-button");
    });

    $("#github").click(function() {
    	window.open('http://github.com/Skmsoumya', '_blank');
    	ga("send", "event", "userAction", "buttonClick", "social-github-button");
    });

    $("#linkedin").click(function() {
    	window.open('https://in.linkedin.com/in/soumyakishormishra', '_blank');
    	ga("send", "event", "userAction", "buttonClick", "social-linkedin-button");
    });
});

$(document).ready(function() {
	$('#fullpage').fullpage({
		anchors: ['about', 'skills', 'portfolio', 'contact'],
		controlArrows: true,
		scrollingSpeed: 1500,
		menu: "#menu",
		paddingTop: "10vh",
		recordHistory: true,
		scrollOverflow: true,

		onLeave: function(index, nextIndex, direction){
            var leavingSection = $(this);

            var gaUrl = window.location.href.replace(window.location.origin, "");
            console.log(gaUrl);

            ga("set", "page", gaUrl);
      		ga("send", "pageview");

            //after leaving section 2
            if(nextIndex === 1 || nextIndex === 4){
                $("#menu").css({
                	backgroundColor: "#2c3e50"
                });
            }

            else if(nextIndex === 2){
                $("#menu").css({
                	backgroundColor: "#9b59b6"
                });
            }

            else if(nextIndex === 3){
                $("#menu").css({
                	backgroundColor: "#0B8793"
                });
            }
        },
	});
	rotateGear();
	rocket();

	$("#skill-button").click(function( ) {
		$.fn.fullpage.moveSectionDown();
		ga("send", "event", "userAction", "buttonClick", "skill-button");
	});

	$("#portfolio-button").click(function( ) {
		$.fn.fullpage.moveSectionDown();
		ga("send", "event", "userAction", "buttonClick", "portfolio-button");
	});
});	

function rocket() {
	TweenMax.to("#rocketBand", 1.5, {y:-200, delay: 2, ease: Power4.easeIn,  onComplete: explosion});
	TweenMax.from("#rocketClouds", 2, {scale: 0, delay: 1, transformOrigin: "50% 50%", autoAlpha: 0, onComplete: function() {
		TweenMax.to("#rocketClouds", 0.5, {opacity: 0, scale: 1.2, transformOrigin: "50% 50%"})
	}});
	TweenMax.from("#flame", 1, {autoAlpha: 0, delay: 1.5, scale: 0, opacity: 0});
}

function rotateGear() {
	TweenMax.to("#gear1", 10, {rotation: 360, ease: Power0.easeNone, transformOrigin: "50% 50%", repeat: -1});
	TweenMax.to("#gear2", 2, {rotation: 360, ease: Power0.easeNone, transformOrigin: "50% 50%", repeat: -1});
	TweenMax.to("#gear3", 7, {rotation: 360, ease: Power0.easeNone, transformOrigin: "50% 50%", repeat: -1});
}

function explosion() {
	TweenMax.to("#flame", 0.2, {scale: 0})
	TweenMax.to("#rocket", 0.2, {opacity: 0, scale: 1.5});
	TweenMax.to("#explosion", 0.5, {autoAlpha: 0, scale: 2, transformOrigin: "50% 50%", onComplete: clouds});
}

function clouds() {
	TweenMax.from("#clouds", 1, {autoAlpha: 0, opacity: 0, scale: 0, transformOrigin: "50% 50%", onComplete: bolts});
}

function bolts() {
	TweenMax.to("#bolt1", 1, {autoAlpha: 0, opacity: 0, scale: 1});
	TweenMax.to("#bolt2", 1, {autoAlpha: 0, opacity: 0, scale: 1, delay: 0.4});
	TweenMax.to("#bolt3", 1, {autoAlpha: 0, opacity: 0, scale: 1, delay: 0.5, onComplete: droplets});
}

function droplets () {
	$("#droplets").css("visiblity", "visible");
	TweenMax.to("#drops1", 1, {y: 220, ease: Sine.easeIn});
	TweenMax.to("#drops2", 1, {y: 220, delay: 0.1, ease: Sine.easeIn});
	TweenMax.to("#drops3", 1, {y: 220, delay: 0.2, ease: Sine.easeIn});
	TweenMax.to("#drops4", 1, {y: 220, delay: 0.3, ease: Sine.easeIn});
	TweenMax.to("#drops5", 1, {y: 220, delay: 0.4, ease: Sine.easeIn, onComplete: moveClouds});
}

function moveClouds() {
	TweenMax.to("#cloud1", 2, {opacity: 0, x: -100});
	TweenMax.to("#cloud2", 2, {opacity: 0, x: 100, delay: 0.2});
	TweenMax.to("#cloud3", 2, {opacity: 0, x: -100, delay: 0.5, onComplete: growTree});
}

function growTree() {
	TweenMax.to("#tree1", 2, {css: {strokeDashoffset: 0}});
	TweenMax.to("#tree2", 2, {css: {strokeDashoffset: 0}, delay: 1});
	TweenMax.to("#tree3", 2, {css: {strokeDashoffset: 0}, delay: 1});
	TweenMax.to("#tree4", 2, {css: {strokeDashoffset: 0}, delay: 1.5});
	TweenMax.to("#tree5", 2, {css: {strokeDashoffset: 0}, delay: 2, onComplete: bulbs});
}

function bulbs() {
	TweenMax.from("#bulb1", 1, {autoAlpha: 0, scale: 0, transformOrigin: "50% 50%", ease: Elastic.easeOut.config(1, 0.3)});
	TweenMax.from("#bulb2", 1, {autoAlpha: 0, scale: 0, transformOrigin: "50% 50%", ease: Elastic.easeOut.config(1, 0.3)});
	TweenMax.from("#bulb3", 1, {autoAlpha: 0, scale: 0, transformOrigin: "50% 50%", ease: Elastic.easeOut.config(1, 0.3)});
	TweenMax.from("#bulb4", 1, {autoAlpha: 0, scale: 0, transformOrigin: "50% 50%", ease: Elastic.easeOut.config(1, 0.3)});
	TweenMax.from("#bulb5", 1, {autoAlpha: 0, scale: 0, transformOrigin: "50% 50%", ease: Elastic.easeOut.config(1, 0.3)});
}
