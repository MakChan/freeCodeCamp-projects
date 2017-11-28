'use-strict'
var turn;
var i;
var combinations = [
	["one", "two", "three"],
	["four", "five", "six"],
	["seven", "eight", "nine"],
	["one", "four", "seven"],
	["two", "five", "eight"],
	["three", "six", "nine"],
	["one", "five", "nine"],
	["three", "five", "seven"]
];

function checkComb(a, b, c, value) {
	if (($("#" + a).text() == value) && ($("#" + b).text() == value) && ($("#" + c).text() == value)) return true;
};

function checkAllComb(value) {
	for (var i = 0; i < 8; i++) {
		if (checkComb(combinations[i][0], combinations[i][1], combinations[i][2], value)) return true;
	};
};

function checkDraw() {
	if ($(".mdl-cell--1-col").text().length == 9) return true;
	return false;
}

function reset() {
	$(".mdl-cell--1-col").html("");
	$(".game").fadeOut("slow");
	$(".winner").fadeOut("slow");
	$(".player").fadeIn("slow");
}

function win(turn) {
	if (turn == "draw") {
		$(".winner-text").text("");
		$(".winner-player").text("");
		$(".draw-text").text("DRAW!");
		$(".game").fadeOut("slow");
		$(".winner").fadeIn("slow");
	} else {
		$(".draw-text").text("");
		$(".winner-text").text("WINNER!");
		$(".winner-player").text(turn);
		$(".game").fadeOut("slow");
		$(".winner").fadeIn("slow");
	}
}

function pressBox(id) {
	if (turn == "X") {
		if ($("#" + id).html() == "") {
			$("#" + id).html("X");
			if (checkAllComb(turn)) win(turn);
			else if (checkDraw() == true) {
				win("draw");
			}
			turn = "O";
		}
	} else if (turn == "O") {
		if ($("#" + id).html() == "") {
			$("#" + id).html("O");
			if (checkAllComb(turn)) win(turn);
			else if (checkDraw() == true) {
				win("draw");
			}
			turn = "X";
		}
	}
};

function startGame() {
	$(".player").fadeOut("slow");
	$(".game").fadeIn("slow");
};

$(".choice-button").click(function() {
	turn = $(this).attr("id")
	startGame()
});

$(".reset-button").click(function() {
	reset();
});