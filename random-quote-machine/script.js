function getQuote() {
  
  function update(json) {
    $("h2").html(json.quoteText);
    $("h5").html(json.quoteAuthor);    
  }
  
  $.ajax( {
    type: "GET",
    url : "https://cors-anywhere.herokuapp.com/https://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=json&lang=en", 
    success: update
  });
}

function tweet() {
  var quote = $("h2").text();
  var author = $("h5").text();
  window.open("https://twitter.com/intent/tweet?text="+quote+"-"+author+"&hashtags=quotes");
}



$(document).ready(function() {
  
  getQuote();
  
  $("#change").on("click", getQuote);
  $("#twitter").on("click", tweet);
  
});