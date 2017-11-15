function getWeather() {

  function changeBackground() {

    var condition = $("#condition").html().toLowerCase();
    switch (condition) {
      case 'drizzle':
        $("body").css("background-image", 'url("http://media4.s-nbcnews.com/i/MSNBC/Components/Video/201703/f_lon_okwx_170327.jpg")');
        break;
      case 'clouds':
        $("body").css("background-image", 'url("https://i.ytimg.com/vi/YgmIibSnZs0/maxresdefault.jpg")');
        break;
      case 'rain':
        $("body").css("background-image", 'url("http://kingofwallpapers.com/rain/rain-024.jpg")');
        break;
      case 'snow':
        $("body").css("background-image", 'url("https://hdwallpapers8k.com/wp-content/uploads/snowing-on-the-bridge-photography-hd-wallpaper-1920x1080-7002-1920x1080.jpg")');
        break;
      case 'clear':
        $("body").css("background-image", 'url("http://allswalls.com/images/clear-sky-wallpaper-1.jpg")');
        break;
      case 'thunderstom':
        $("body").css("background-image", 'url("https://dreamlandia.com/images/T/thunderstorm.jpg")');
        break;
      case "haze":
        $("body").css("backgroundImage", "url('https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Striped_Sun_at_Summer_Solstice_2016.jpg/1280px-Striped_Sun_at_Summer_Solstice_2016.jpg')");
        break;
      case 'mist':
        $("body").css("background-image", 'url("http://www.zocalopublicsquare.org/wp-content/uploads/2010/05/mist.jpg")');
        break;
      case 'smoke':
        $("body").css("background-image", 'url("https://d1o50x50snmhul.cloudfront.net/wp-content/uploads/2017/05/02163148/p8713477-2.jpg")');
        break;
      default:
        $('body').css("background-image", "url('https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Polarlicht.jpg/1280px-Polarlicht.jpg')");
        break;        
    };
  };

  function update(json) {
    var url = "http://openweathermap.org/img/w/" + json.weather[0].icon + ".png";

    $("#city").html(json.name + ", " + json.sys.country);
    $("#temp").html(json.main.temp);
    $("#unit").html("C");
    $("#condition").html(json.weather[0].main);
    $("#image").attr("src", url);
    $("#deg").html("°");
    $("#unit").html("C");
    $("#title").html("Local Weather");    
    changeBackground();
  };

  var lat = 0;
  var lon = 0;

  if (navigator.geolocation) {

    navigator.geolocation.getCurrentPosition(function(position) {

      lat = position.coords.latitude;
      lon = position.coords.longitude;

      var url2 = "https://CORS-Anywhere.HerokuApp.com/http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&units=metric&appid=a71d058f91cbd2f4690f011b4f575515";

      $.getJSON(url2, update);

    });
  };
};

function changeUnit() {
  if ($("#unit").html() == "C") {
    var c = $("#temp").html();
    var f = c * 1.8 + 32;
    $("#temp").html(Math.round(f));
    $("#unit").html("F");
  } else if ($("#unit").html() == "F") {
    var f = $("#temp").html();
    var c = (f - 32) * 5 / 9;
    $("#temp").html(Math.round(c));
    $("#unit").html("C");
  }
}

$(document).ready(function() {
  getWeather();
  $("a").on("click", changeUnit);

});