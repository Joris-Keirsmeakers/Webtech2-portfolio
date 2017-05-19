
  $( "form" ).on( "submit", function( event ) {
    event.preventDefault();
    console.log( $( this ).serialize() );
    var str = $( this ).serialize();
    var res = str.substring(9);
    console.log(res)
    this.setLocation();
  });

  function setLocation(){
    var that = this;
  console.info("Getting current location data");
  //GET request to url
  const call=`https://maps.googleapis.com/maps/api/geocode/json?address=`+that.res+`&key=AIzaSyAp-8MVFQKDaCa0k2iwXsA0rF77sQKNjds`;


  $.ajax({
    method:"GET",
    url:call,
    dataType:"json"

  }).done(function(response){

    //onsole.log(response);
    var itemLocality='';
    var arr = Object.keys(response).map(function (key) { return response[key]; });
    console.log(arr);
    var locArr = Object.keys(arr[1][1]).map(function (key) { return arr[0][1][key]; });
    console.log(locArr)
    /*console.log(locArr[1])
    that.weather.location=locArr[1];
    that.update();*/
    //itemLocality = response[0].address_component.long_name;
  });
  }
