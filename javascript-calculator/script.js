var equation = "";

function update() {
	$(".screen-cell").html(equation);
}

function clearText() {
	if (equation == "Can't divide by zero." || equation == "Enter something!" || equation == "Syntax Error")
		equation = "";
}

$(".num-cell").click(function() {
	clearText();
	equation += $(this).html();
	update();
});

$(".op-cell").click(function() {
	clearText();
	if (equation != "") 
		equation += $(this).html();
	update();
});

$(".equal-cell").click(function() { 
	clearText();
	try {
		equation = eval(equation);
	} catch (e) {
	    if (e instanceof SyntaxError) 
	    equation = "Syntax Error";
	};
	equation = String(equation);
	if (equation == "undefined") {
	    equation = "Enter something!";		
	} else if (equation == "Infinity") {
	    equation = "Can't divide by zero.";

	}
	update();
});

$(".del-cell").click(function() {
	clearText();
	equation = equation.slice(0, -1);
	update();
});

$(".clr-cell").click(function() {
	equation = "";
	update();
});