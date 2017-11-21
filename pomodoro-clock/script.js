$("#colon").hide();
$("#seconds").hide();
var x;
var y;
var minutes = parseInt($(".sess-time").text());
var seconds = 0;
var $this = $("#clock");
$(".br-minus").click(function() {
	if ($("#clock").hasClass("inactive")) {
		var br_time = parseInt($(".br-time").text());
		console.log(br_time);
		if (br_time != 1) {
			$(".br-time").text(br_time - 1);
			$("#colon").hide();
			$("#seconds").hide();
			if (($("#clock").hasClass("session")) == false) {
				$("#minutes").text(br_time - 1);
				seconds = 0;
				minutes = br_time - 1;
			}
		}
	}
})
$(".br-plus").click(function() {
	if ($("#clock").hasClass("inactive")) {
		var br_time = parseInt($(".br-time").text());
		console.log(br_time);
		$(".br-time").text(br_time + 1);
		if (($("#clock").hasClass("session")) == false) {
			$("#minutes").text(br_time + 1);
			seconds = 0;
			minutes = br_time + 1;
		}
		$("#colon").hide();
		$("#seconds").hide();
	}
})
$(".sess-minus").click(function() {
	if ($("#clock").hasClass("inactive")) {
		var sess_time = parseInt($(".sess-time").text());
		console.log(sess_time);
		if (sess_time != 1) {
			$(".sess-time").text(sess_time - 1);
			if ($("#clock").hasClass("session")) {
				$("#colon").hide();
				$("#seconds").hide();
				$("#minutes").text(sess_time - 1);
				seconds = 0;
				minutes = sess_time - 1;
			}
		}
	}
})
$(".sess-plus").click(function() {
	if ($("#clock").hasClass("inactive")) {
		var sess_time = parseInt($(".sess-time").text());
		console.log(sess_time);
		$(".sess-time").text(sess_time + 1);
		if ($("#clock").hasClass("session")) {
			$("#colon").hide();
			$("#seconds").hide();
			$("#minutes").text(sess_time + 1);
			seconds = 0;
			minutes = sess_time + 1;
		}
	}
})

function break_timer() {
	$(".text").text("Break");
	if ($this.is('.inactive')) {
		$("#minutes").text(minutes);
		$this.toggleClass('inactive');
		console.log("in undefined");
		y = setInterval(function() {
			console.log(seconds);
			if (seconds == 0 && minutes != 0) {
				minutes = minutes - 1
				$("#minutes").text(minutes);
				seconds = 60;
			}
			seconds = seconds - 1
			$("#seconds").text(seconds);
			if (minutes == 0 && seconds == 0) {
				clearInterval(y);
				console.log("in break end condition");
				minutes = parseInt($(".sess-time").text());
				$("#clock").toggleClass('session');
				$this.toggleClass('inactive');
				session_timer();
				console.log("in end condition");
			}
		}, 1000);
		$("#colon").show();
		$("#seconds").show();
	} else {
		$this.toggleClass('inactive');
		clearInterval(y);
		console.log("IN BREAK ELSE");
	}
}

function session_timer() {
	$(".text").text("Session");
	if ($this.is('.inactive')) {
		$this.toggleClass('inactive');
		console.log("in undefined");
		$("#minutes").text(minutes);
		x = setInterval(function() {
			console.log(seconds);
			if (seconds == 0 && minutes != 0) {
				minutes = minutes - 1
				$("#minutes").text(minutes);
				seconds = 60;
			}
			seconds = seconds - 1
			$("#seconds").text(seconds);
			if (minutes == 0 && seconds == 0) {
				clearInterval(x);
				$this.toggleClass('inactive');
				minutes = parseInt($(".br-time").text());
				$("#clock").toggleClass('session');
				break_timer();
				console.log("in end condition");
			}
		}, 1000);
		$("#colon").show();
		$("#seconds").show();
	} else {
		$this.toggleClass('inactive');
		clearInterval(x);
		console.log("in active");
	}
}
$(".clock").click(function() {
	if ($("#clock").hasClass("session")) {
		session_timer();
	} else {
		break_timer();
	}
});