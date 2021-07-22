var APIkey = "81fcfb9fe1b9f885bd21e9545869892b"

var cityEl = document.querySelector("#searchInputVal")
var buttonEl = document.querySelector("#submitBtn")
var cityInfo = []
var today = moment().format("MMM Do YY")


if (localStorage.getItem("cities")) {
    cityInfo = JSON.parse(localStorage.getItem("cities"))
    localStorage.setItem("cities", JSON.stringify(cityInfo))

}
else {
    localStorage.setItem("cities", JSON.stringify(cityInfo))
}



buttonEl.addEventListener("click", function (event) {
    event.preventDefault();
    // console.log("click, click, click")
    console.log(cityEl.value);
    cityInfo.push(cityEl.value)
    localStorage.setItem("cities", JSON.stringify(cityInfo))
    JSON.parse(localStorage.getItem("city"))
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + cityEl.value + "&units=imperial&appid=" + APIkey;
    fetch(queryURL)
        .then((response) => response.json())
        .then((response) => {
            console.log(response);
            // var humid = response.main.humidity
            // console.log(humid)
            console.log(moment().format("MMM Do YY"))
            console.log("Temp: " + response.main.temp)
            // document.querySelector("#temp").textContent = "Temperature: " + response.main.temp
            console.log(response.wind.speed)
            // document.querySelector("#windspeed").textContent = "Wind Speed: " + response.wind.speed
            console.log(response.main.humidity)
            // document.querySelector("#humidity").textContent = "Humidity: " + response.main.humidity

            console.log(response.weather[0].description)
            // console.log(response.current.uvi)
            document.querySelector("#forecast").innerHTML = `${today} Temperature: ${response.main.temp}
    Wind Speed: ${response.wind.speed} \n Humidity: ${response.main.humidity}`
        });

    var fiveDay = "http://api.openweathermap.org/data/2.5/forecast?q=" + cityEl.value + "&units=imperial&appid=81fcfb9fe1b9f885bd21e9545869892b"
    fetch(fiveDay)
        .then((response) => response.json())
        .then((response) => {
            console.log(response);

            var oneDay = moment().add(1, 'days').format("MMM Do YY")
            console.log(response.list[0].main);
            console.log(response.list[0].weather[0].description);
            document.querySelector("#temp0").innerHTML = `${oneDay} Temperature: ${response.list[0].main.temp}
            Wind Speed: ${response.list[0].wind.speed} \n Humidity: ${response.list[0].main.humidity} Description: ${response.list[0].weather[0].description} `


            var twoDay = moment().add(2, 'days').format("MMM Do YY")
            console.log(response.list[8].main);
            console.log(response.list[8].weather[0].description);
            document.querySelector("#temp8").innerHTML = `${twoDay} Temperature: ${response.list[8].main.temp}
            Wind Speed: ${response.list[8].wind.speed} \n Humidity: ${response.list[8].main.humidity} Description: ${response.list[8].weather[0].description}`

            var threeDay = moment().add(3, 'days').format("MMM Do YY")
            console.log(response.list[16].main);
            console.log(response.list[16].weather[0].description);
            document.querySelector("#temp16").innerHTML = `${threeDay} Temperature: ${response.list[16].main.temp}
            Wind Speed: ${response.list[16].wind.speed} \n Humidity: ${response.list[16].main.humidity} Description: ${response.list[16].weather[0].description}`

            var fourDay = moment().add(4, 'days').format("MMM Do YY")
            console.log(response.list[24].main);
            console.log(response.list[24].weather[0].description);
            document.querySelector("#temp24").innerHTML = `${fourDay} Temperature: ${response.list[24].main.temp}
            Wind Speed: ${response.list[24].wind.speed} \n Humidity: ${response.list[24].main.humidity} Description: ${response.list[24].weather[0].description}`

            var fiveDay = moment().add(5, 'days').format("MMM Do YY")
            console.log(response.list[32].main);
            console.log(response.list[32].weather[0].description);
            document.querySelector("#temp32").innerHTML = `${fiveDay} Temperature: ${response.list[32].main.temp}
            Wind Speed: ${response.list[32].wind.speed} \n Humidity: ${response.list[32].main.humidity} Description: ${response.list[32].weather[0].description}`
            
        })
})




// console.log("test")


// var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + cityEl.value + "&appid=" + APIkey;





// var APIkey = "81fcfb9fe1b9f885bd21e9545869892b"
// var city = document.getElementById("searchInputVal")




// var button = document.querySelector("submitBtn")
// // console.log(city)

// // submitBtn.addEventListener('click', function() {
// //     if (localStorage.getItem('CustomInput') !== null) {
// //         storedArray = JSON.parse(localStorage.getItem('CustomInput'));
// //     }
// //     var newArray = [city.value]
// //     console.log(newArray);

// //     storedArray.push(newArray);

// //     localStorage.setItem('CustomInput', JSON.stringify(storedArray));
// // })

// var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIkey;
// console.log(queryURL)
// // button.addEventListener("click", function (){
// //     fetch (queryURL)
// //     .then((response) => response.json()
// //     .then((response)=> {
// //         console.log(response);
// //     }));
// // });
// // document.querySelector('form.userInput').addEventListener('submit', function (e) {

// //     //prevent the normal submission of the form
// //     e.preventDefault();

// //     console.log(searchInputVal.value);    
// // });





// var searchFormEl = document.querySelector('#search-form');

// function handleSearchFormSubmit(event) {
//     event.preventDefault();

//     var searchInputVal = document.querySelector('#search-input').value;

//     if (!searchInputVal) {
//         console.error('You must enter a city you would like to search!');
//         return;
//     }   
// }
// // searchFormEl.addEventListener('submit', handleSearchFormSubmit);






// console.log(queryURL)