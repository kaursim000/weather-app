var APIkey = "81fcfb9fe1b9f885bd21e9545869892b"
var cityEl = document.querySelector("#searchInputVal") 
var buttonEl = document.querySelector("#submitBtn")

buttonEl.addEventListener("click", function (){
    console.log("click, click, click")
    console.log(cityEl.value);

})
console.log(cityEl.value)
console.log("test")








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