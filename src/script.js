
let rhs1 = document.getElementById("head")
let cl = document.getElementById("cloud_id")
let wi = document.getElementById("wind_id")
let hi = document.getElementById("humid_id")

let visi = document.getElementById("visible_id")
let emp = document.getElementById("empty");
let err = document.getElementById("error");
let bval = document.getElementById("b1");
let loc1 = document.getElementById("location");
let d1 = document.getElementById("date");
let img = document.getElementById("img1");
let temp1 = document.getElementById("temp"); let weth = document.getElementById("weather");
let min1 = document.getElementById("min"); let max1 = document.getElementById("max");
let vis = document.getElementById("visibilty"); let cl1 = document.getElementById("cloud");
let wind1 = document.getElementById("wind");
let cel = document.getElementById("c"); let far = document.getElementById("f");
let humid = document.getElementById("humidity");


function id(v) {
    return document.getElementById(v)
}
async function getWeather(v = '') {
    var city = id("search").value || "delhi"
    if (!city) {

        emp.innerHTML = "Enter valid city !"
        return;
    }



    emp.innerHTML = "";
    const apikey = '101a3f1a37eb1eddf2d9fdfd76dbe39a';

    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apikey + '&units=metric');
    const data = await response.json();

    getData(data);

}
const d = new Date();
const arr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let date1 = d.toDateString();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function getData(data) {
    if (!data.visibility) {
        err.innerHTML = "Enter valid city !";
    }
    else {



        err.innerHTML = ""
        loc1.innerHTML =
            `${data.name},${data.sys.country}`; d1.innerHTML = `${arr[d.getDay()]} , ${months[d.getMonth()]} ${d.getDate()} ${d.getFullYear()}`;
        id1 = data.weather[0].id;
        icon1 = data.weather[0].ico
        img.innerHTML = `
          <img id="img2"src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" />
          `;
        let temp = data.main.temp;
        let farenhit = ((temp * 1.800) + 32)
        cel.innerHTML = `${temp}°C | ${farenhit.toFixed(2)}°F`;
        weth.innerHTML = `${data.weather[0].main}`;

        rhs1.innerHTML = "Current Weather Details"

        vis.innerHTML = `Visibility :  ${(data.visibility) / 1000} km`;
        cl1.innerHTML = `Clouds :  ${data.clouds.all}%`;

        wind1.innerHTML = `Wind : ${data.wind.speed}m/sec`;

        humid.innerHTML = `Humidity : ${data.main.humidity}%`
        //   console.log(); 
    }

}
getWeather()


