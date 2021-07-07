var APIkey = "81fcfb9fe1b9f885bd21e9545869892b"
var city = document.querySelector(".searchInputVal")
var button = document.querySelector(".btn")
// console.log(city)



var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIkey;
console.log(queryURL)
button.addEventListener("click", function (){
    fetch (queryURL)
    .then((resonse) => Response.json()
    .then((response)=> {
        console.log(response);
    }));
});
// document.querySelector('form.userInput').addEventListener('submit', function (e) {

//     //prevent the normal submission of the form
//     e.preventDefault();

//     console.log(searchInputVal.value);    
// });





var searchFormEl = document.querySelector('#search-form');

function handleSearchFormSubmit(event) {
    event.preventDefault();

    var searchInputVal = document.querySelector('#search-input').value;

    if (!searchInputVal) {
        console.error('You must enter a city you would like to search!');
        return;
    }   
}
// searchFormEl.addEventListener('submit', handleSearchFormSubmit);






console.log(queryURL)