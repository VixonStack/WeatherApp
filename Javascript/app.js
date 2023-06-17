let apiUrl = "https://api.api-ninjas.com/v1/weather?city=";
let apiKey = {
    method: 'GET',
    headers: { 'X-Api-Key': 'O22W1laF8ZJUPrJsRLh+7A==LBJAILa0OlFzmRTv'}
}
let city = document.querySelector("#cityName");
let cityName = city.value;
let searchBtn = document.querySelector("#searchBtn");
let cityDisplay = document.querySelector("#cityDisplay");
let dataDisplay = document.querySelectorAll(".card-subtitle")
let dataTemp = document.querySelector("#dataTemp");
let dataHumidity = document.querySelector("#dataHumidity");
let dataCloud = document.querySelector("#dataCloud");
let dataminTemp = document.querySelector("#dataminTemp");
let datamaxTemp = document.querySelector("#datamaxTemp");
let windSpeed = document.querySelector("#windSpeed");
let windDegree = document.querySelector("#windDegree");
window.addEventListener("load",getWeather)
searchBtn.addEventListener("click",getWeather)
async function getWeather(){
   
   if(!cityName)
   {
       cityName = "mumbai";
       cityDisplay.textContent = "MUMBAI";
   }
   else
   {
    cityName = city.value;
    cityDisplay.textContent = cityName.toUpperCase(); 
}
apiUrl = `https://api.api-ninjas.com/v1/weather?city=${cityName}`;
console.log(apiUrl);
let weather = await fetch(apiUrl,apiKey);
let data = await weather.json();
    dataTemp.textContent = data.temp;
    dataHumidity.textContent = data.humidity;
    dataCloud.textContent = data.cloud_pct;
    dataminTemp.textContent = data.min_temp;
    datamaxTemp.textContent = data.max_temp;
    windSpeed.textContent = data.wind_speed;
    windDegree.textContent = data.wind_degrees;

}

















