const template = ({ title, snippet, url }) => `
  <li class="mdl-list__item mdl-list__item--three-line">
    <span class="mdl-list__item-primary-content">
      <span>${title}</span>
      <span class="mdl-list__item-text-body">
        ${snippet}
      </span>
    </span>
    <span class="mdl-list__item-secondary-content">
      <a class="mdl-list__item-secondary-action" href="${url}" target="_blank"><i class="material-icons">launch</i></a>
    </span>
  </li>
`;

var wikiUrl = "http://en.wikipedia.org/?curid="


function updateHTML(data) {
	$(".pages").append([
  { title: data.title, snippet: data.snippet, url: wikiUrl+data.pageid },
].map(template).join(''))
}

function processData(json) {
    var data = json["query"]["search"];
	for (var i =0; i < data.length-1; i++) {
	  updateHTML(data[i]);
	}
}

function getData(query) {
  $.ajax( {
    type: "GET",
    url : "https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&titles=&srsearch="+query, 
    success: processData
  });
}

$("input").keypress(function(e) {
    if(e.which == 13) {
	   $(".pages").html("");
	   var title = $("#query").val();
	   if (title!="")
	   	getData(title);
    }
});


