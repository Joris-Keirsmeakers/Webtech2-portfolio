class Weather
{
    constructor(options){
        console.info("We are in the constructor!");

        // set default values
        this.weather ={};
        this.latitude = "";
        this.longitude = "";
        this.location ="";
        this.apiKey = options.apiKey;

        this.init();
    }

    init(){
        console.info("The init function, kicks things off");
        this.getMyLocation();
    }

    getMyLocation(){
        var that = this;
        console.info("Getting my location");
        navigator.geolocation.getCurrentPosition(function(position) {
            console.log(position);
            that.latitude = position.coords.latitude;
            that.longitude = position.coords.longitude;
            that.getWeather();
            that.getTrueLocation();
        });
    }



    getWeather(){
        var that = this;
        console.info("Getting current weather data");
        //GET request to url
        const call = `https://api.darksky.net/forecast/${this.apiKey}/${this.latitude},${this.longitude}?units=ca`;
        console.log()

        $.ajax({
          method:"GET",
          url:call,
          dataType:"jsonp"

        }).done(function(response){
          console.log(response);
          that.weather=response.currently;
          that.update();



        });
    }

    getTrueLocation(){
      var that = this;
    console.info("Getting current location data");
    //GET request to url
    const call=`https://maps.googleapis.com/maps/api/geocode/json?latlng=`+this.latitude+`,`+this.longitude+`&key=AIzaSyAp-8MVFQKDaCa0k2iwXsA0rF77sQKNjds`;

    $.ajax({
      method:"GET",
      url:call,
      dataType:"json"

    }).done(function(response){

      //onsole.log(response);
      var itemLocality='';
      var arr = Object.keys(response).map(function (key) { return response[key]; });
      console.log(arr);
      var locArr = Object.keys(arr[0][1]).map(function (key) { return arr[0][1][key]; });
      console.log(locArr)
      console.log(locArr[1])
      that.weather.location=locArr[1];
      that.update();
      //itemLocality = response[0].address_component.long_name;
    });
}

    update(){
      console.log(this.latitude);
      console.log(this.longitude);
      console.log("work work");



      var that = this;
      $(".weather").html(this.weather.summary);
      $("#location").html(this.weather.location);
      $(".temp-var").html(this.weather.temperature);

    }
}

const options = {
    apiKey: "0f3415789ec788a44082b38a603d2ec7"
};
const App = new Weather(options);
