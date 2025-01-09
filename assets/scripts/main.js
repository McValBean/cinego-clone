

//Below this is for the trending section of the homepage to toggle between movies and series

const homeTrendingMovies = document.getElementById("home-trending-movies");
const homeTrendingSeries = document.getElementById("home-trending-series");



document.getElementById("home-trending-movies").style.backgroundColor = "aqua";
console.log("1");
document.getElementById("home-trending-movies").style.color = "black";
console.log("2")
document.getElementById("home-trending-series").style.backgroundColor ="black";
console.log("3")
document.getElementById("home-trending-series").style.color="white";
console.log("4");
document.getElementById("trending-series-list").style.display = "none";
console.log("5");
document.getElementById("trending-movies-list").style.display= "flex";
console.log("6");

homeTrendingMovies.onclick = function (){
document.getElementById("home-trending-movies").style.backgroundColor = "aqua";
document.getElementById("home-trending-movies").style.color = "black";
document.getElementById("home-trending-series").style.backgroundColor ="black";
document.getElementById("home-trending-series").style.color="white";
document.getElementById("trending-series-list").style.display = "none";
document.getElementById("trending-movies-list").style.display= "flex";
}

homeTrendingSeries.onclick = function (){
document.getElementById("home-trending-series").style.backgroundColor="aqua";
console.log(10);
document.getElementById("home-trending-movies").style.backgroundColor ="black";
console.log(20);
document.getElementById("home-trending-series").style.color ="black";
console.log(30);
document.getElementById("home-trending-movies").style.color ="white";
console.log(40);
document.getElementById("trending-series-list").style.display = "flex";
console.log(50);
document.getElementById("trending-series-list").style.flexDirection = "column";
console.log(60);
document.getElementById("trending-movies-list").style.display= "none";
console.log(70);
}




//below is the code for the top-rated section default layout //
const homeMovieList = document.getElementById("home-top-movies");
const homeTVShowsList = document.getElementById("home-top-series");

document.getElementById("home-top-movies").style.backgroundColor = "aqua";
document.getElementById("home-top-movies").style.color = "black";
document.getElementById("home-top-series").style.backgroundColor ="black";
document.getElementById("home-top-series").style.color="white";
document.getElementById("series-section").style.display = "none";
document.getElementById("movies-section").style.display= "flex";

homeMovieList.onclick = function (){
 document.getElementById("home-top-movies").style.backgroundColor = "aqua";
 document.getElementById("home-top-movies").style.color = "black";
 document.getElementById("home-top-series").style.backgroundColor ="black";
 document.getElementById("home-top-series").style.color="white";
document.getElementById("series-section").style.display = "none";
document.getElementById("movies-section").style.display= "flex";}

homeTVShowsList.onclick= function() {
document.getElementById("home-top-series").style.backgroundColor="aqua";
document.getElementById("home-top-movies").style.backgroundColor ="black";
document.getElementById("home-top-series").style.color ="black";
document.getElementById("home-top-movies").style.color ="white";
document.getElementById("series-section").style.display = "flex";
document.getElementById("series-section").style.flexDirection = "column";
document.getElementById("movies-section").style.display= "none";}










