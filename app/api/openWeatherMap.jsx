var axios = require("axios");

const OPEN_WEATHER_MAP_URL = "http://api.openweathermap.org/data/2.5/weather?appid=295ebc6879fefd4ec88a3076f52c62f1&units=metric";

module.exports = {
  getTemp: function(location){
var encodedLocation = encodeURIComponent(location);
var urlRequest = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

return axios.get(urlRequest).then(function(res){

  if(res.data.cod && res.data.message){
    throw new Error(res.data.message);
  }else{
    return res.data.main.temp;
  }
}, function(res){
  throw new Error(res.data.message);
});
}
}
