$(document).ready(main);


function main() {
	$("nav ul").hide();
	$(".fa-bars").click(function () {
		$("#nav-icon").hide();
		$("nav").animate({
			left: "0px"
		});
		$("body").animate({
			marginLeft: "10%"
		}, function() {
			$("nav ul").show();
		});
	});

	$(".nav-close").click(function() {
		$("nav ul").hide();
		$("nav").animate({
			left: "-20%"
		});
		$("body").animate({
			marginLeft: "0%"
		}, function() {
			$("#nav-icon").show();
		});
	});

	$(".toSkills").click(function() {
    	$('html, body').animate({
        	scrollTop: $(".skills").offset().top
    	}, 800);
	});

	$(".skills-button").click(function() {
    	$('html, body').animate({
        	scrollTop: $(".skills").offset().top
    	}, 800);
	});

	$(".home-button").click(function() {
    	$('html, body').animate({
        	scrollTop: $(".home").offset().top
    	}, 800);
	});

	$(".toProjects").click(function() {
    	$('html, body').animate({
        	scrollTop: $(".projects").offset().top
    	}, 800);
	});


	$(".projects-button").click(function() {
    	$('html, body').animate({
        	scrollTop: $(".projects").offset().top
    	}, 800);
	});

	$(".contacts-button").click(function() {
    	$('html, body').animate({
        	scrollTop: $(".contact").offset().top
    	}, 800);
	});

	$(".blog-button").click(function() {
		window.open("http://blog.soumyamishra.com", '_blank');
	});

	$(".fa-facebook").click(function() {
		window.open("https://www.facebook.com/soumya.k.mishra.5", '_blank');
	});

	$(".fa-twitter").click(function() {
		window.open("https://twitter.com/Soumya_kishor", '_blank');
	});

	$(".fa-github").click(function() {
		window.open("https://github.com/Skmsoumya", '_blank');
	});

	$(".fa-linkedin").click(function() {
		window.open("https://in.linkedin.com/in/soumyakishormishra", '_blank');
	});

	$(".weatherapp").click(function() {
		window.open("http://codepen.io/skmSoumya/full/waYoKG", '_blank');
	});	


	$(".wiki").click(function() {
		window.open("http://codepen.io/skmSoumya/full/zGbOzN", '_blank');
	});	

	$(".unhealthy").click(function() {
		window.open("http://soumyamishra.com/unhealthy/", '_blank');
	});	

};