// -------------- Navigation Shide/Show Functionality ----------- //

$(document).ready(function(){
	$("#nav-btn").click(function(){
		$("#nav-menu").fadeToggle(200, function(){
			$("li>a").click(function(){
				$("#nav-menu").fadeOut(100);
			});
		});
	});
});

// ------------ Calendar Month Changing JQuery-Code ------------ //

$(document).ready(function(){
	$("#jan").click(function(){
		$("#jan23").addClass("show");
		$("#feb23, #mar23, #apr23, #may23, #jun23, #jul, #aug23, #sep23, #oct23, #nov23, #dec23").removeClass("show");
		$("#feb23, #mar23, #apr23, #may23, #jun23, #jul, #aug23, #sep23, #oct23, #nov23, #dec23").addClass("hide");
	});
});

$(document).ready(function(){
	$("#feb").click(function(){
		$("#feb23").addClass("show");
		$("#jan23, #mar23, #apr23, #may23, #jun23, #jul, #aug23, #sep23, #oct23, #nov23, #dec23").removeClass("show");
		$("#jan23, #mar23, #apr23, #may23, #jun23, #jul, #aug23, #sep23, #oct23, #nov23, #dec23").addClass("hide");
	});
});

$(document).ready(function(){
	$("#mar").click(function(){
		$("#mar23").addClass("show");
		$("#jan23, #feb23, #apr23, #may23, #jun23, #jul23, #aug23, #sep23, #oct23, #nov23, #dec23").removeClass("show");
		$("#jan23, #feb23, #apr23, #may23, #jun23, #jul23, #aug23, #sep23, #oct23, #nov23, #dec23").addClass("hide");
	});
});

$(document).ready(function(){
	$("#apr").click(function(){
		$("#apr23").addClass("show");
		$("#jan23, #feb23, #mar23, #may23, #jun23, #jul23, #aug23, #sep23, #oct23, #nov23, #dec23").removeClass("show");
		$("#jan23, #feb23, #mar23, #may23, #jun23, #jul23, #aug23, #sep23, #oct23, #nov23, #dec23").addClass("hide");
	});
});

$(document).ready(function(){
	$("#may").click(function(){
		$("#may23").addClass("show");
		$("#jan23, #feb23, #mar23, #apr23, #jun23, #jul23, #aug23, #sep23, #oct23, #nov23, #dec23").removeClass("show");
		$("#jan23, #feb23, #mar23, #apr23, #jun23, #jul23, #aug23, #sep23, #oct23, #nov23, #dec23").addClass("hide");
	});
});

$(document).ready(function(){
	$("#jun").click(function(){
		$("#jun23").addClass("show");
		$("#jan23, #feb23, #mar23, #apr23, #may23, #jul23, #aug23, #sep23, #oct23, #nov23, #dec23").removeClass("show");
		$("#jan23, #feb23, #mar23, #apr23, #may23, #jul23, #aug23, #sep23, #oct23, #nov23, #dec23").addClass("hide");
	});
});

$(document).ready(function(){
	$("#jul").click(function(){
		$("#jul23").addClass("show");
		$("#jan23, #feb23, #mar23, #apr23, #may23, #jun23, #aug23, #sep23, #oct23, #nov23, #dec23").removeClass("show");
		$("#jan23, #feb23, #mar23, #apr23, #may23, #jun23, #aug23, #sep23, #oct23, #nov23, #dec23").addClass("hide");
	});
});

$(document).ready(function(){
	$("#aug").click(function(){
		$("#aug23").addClass("show");
		$("#jan23, #feb23, #mar23, #apr23, #may23, #jun23, #jul23, #sep23, #oct23, #nov23, #dec23").removeClass("show");
		$("#jan23, #feb23, #mar23, #apr23, #may23, #jun23, #jul23, #sep23, #oct23, #nov23, #dec23").addClass("hide");
	});
});

$(document).ready(function(){
	$("#sep").click(function(){
		$("#sep23").addClass("show");
		$("#jan23, #feb23, #mar23, #apr23, #may23, #jun23, #jul23, #aug23, #oct23, #nov23, #dec23").removeClass("show");
		$("#jan23, #feb23, #mar23, #apr23, #may23, #jun23, #jul23, #aug23, #oct23, #nov23, #dec23").addClass("hide");
	});
});

$(document).ready(function(){
	$("#oct").click(function(){
		$("#oct23").addClass("show");
		$("#jan23, #feb23, #mar23, #apr23, #may23, #jun23, #jul23, #aug23, #sep23, #nov23, #dec23").removeClass("show");
		$("#jan23, #feb23, #mar23, #apr23, #may23, #jun23, #jul23, #aug23, #sep23, #nov23, #dec23").addClass("hide");
	});
});

$(document).ready(function(){
	$("#nov").click(function(){
		$("#nov23").addClass("show");
		$("#jan23, #feb23, #mar23, #apr23, #may23, #jun23, #jul23, #aug23, #sep23, #oct23, #dec23").removeClass("show");
		$("#jan23, #feb23, #mar23, #apr23, #may23, #jun23, #jul23, #aug23, #sep23, #oct23, #dec23").addClass("hide");
	});
});

$(document).ready(function(){
	$("#dec").click(function(){
		$("#dec23").addClass("show");
		$("#jan23, #feb23, #mar23, #apr23, #may23, #jun23, #jul23, #aug23, #sep23, #oct23, #nov23").removeClass("show");
		$("#jan23, #feb23, #mar23, #apr23, #may23, #jun23, #jul23, #aug23, #sep23, #oct23, #nov23").addClass("hide");
	});
});