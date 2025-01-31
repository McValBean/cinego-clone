//this code is for the dialog box for the login//
let login= document.getElementById("openDialog");
const loginBox = document.getElementById("dialogBox");
const closeLogin = document.getElementById("closeDIalog");
const loginLink1 = document.getElementById("loginLink1");
const loginLink2 = document.getElementById("loginLink2");
const registerLink = document.getElementById("registerLink");
const forgottenPasswordLink = document.getElementById("forgottenPasswordLink");
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const recoveryForm = document.getElementById("recoveryForm");

login.onclick = function() {
    loginBox.showModal();
}

loginForm.style.display = "flex";
login.style.flexDirection="column";

loginLink1.onclick = function() {
    loginForm.style.display = "flex";
    loginForm.style.flexDirection = "column";
    recoveryForm.style.display = registerForm.style.display="none";
}
loginLink2.onclick = function() {
    loginForm.style.display = "flex";
    loginForm.style.flexDirection = "column";
    recoveryForm.style.display = registerForm.style.display="none";
}
forgottenPasswordLink.onclick = function() {
    recoveryForm.style.display = "flex";
    recoveryForm.style.flexDirection="column";
    loginForm.style.display = registerForm.style.display = "none";
}

registerLink.onclick = function() {
    registerForm.style.display = "flex";
    registerForm.style.flexDirection="column";
    loginForm.style.display = recoveryForm.style.display = "none";

}

//Below this is for the trending section of the homepage to toggle between movies and series//

let homeTrendingMoviesLink = document.getElementById("home-trending-movies");
let homeTrendingSeriesLink = document.getElementById("home-trending-series");


document.getElementById("home-trending-movies").style.backgroundColor = "aqua";
document.getElementById("home-trending-movies").style.color = "black";
document.getElementById("home-trending-series").style.backgroundColor ="black";
document.getElementById("home-trending-series").style.color="white";
document.getElementById("trending-series-list").style.display ="none";
document.getElementById("trending-movies-list").style.display="flex";

homeTrendingMoviesLink.onclick = function (){
document.getElementById("home-trending-movies").style.backgroundColor = "aqua";
document.getElementById("home-trending-movies").style.color = "black";
document.getElementById("home-trending-series").style.backgroundColor ="black";
document.getElementById("home-trending-series").style.color="white";
document.getElementById("trending-series-list").style.display = "none";
document.getElementById("trending-movies-list").style.display= "flex";
}

homeTrendingSeriesLink.onclick = function (){
document.getElementById("home-trending-series").style.backgroundColor="aqua";
document.getElementById("home-trending-movies").style.backgroundColor ="black";
document.getElementById("home-trending-series").style.color ="black";
document.getElementById("home-trending-movies").style.color ="white";
document.getElementById("trending-series-list").style.display ="flex";
document.getElementById("trending-series-list").style.flexDirection ="column";
document.getElementById("trending-movies-list").style.display="none";
}




//below is the code for the top-rated section default layout//
let homeMovieList = document.getElementById("home-top-movies");
let homeTVShowsList = document.getElementById("home-top-series");

document.getElementById("home-top-movies").style.backgroundColor = "aqua";
document.getElementById("home-top-movies").style.color = "black";
document.getElementById("home-top-series").style.backgroundColor ="black";
document.getElementById("home-top-series").style.color="white";
document.getElementById("series-section").style.display = "none";
document.getElementById("movies-section").style.display= "flex";

homeMovieList.onclick = function(){
 document.getElementById("home-top-movies").style.backgroundColor = "aqua";
 document.getElementById("home-top-movies").style.color = "black";
 document.getElementById("home-top-series").style.backgroundColor ="black";
 document.getElementById("home-top-series").style.color="white";
document.getElementById("series-section").style.display = "none";
document.getElementById("movies-section").style.display= "flex";}

homeTVShowsList.onclick= function(){
home.style.backgroundColor="aqua";
document.getElementById("home-top-movies").style.backgroundColor ="black";
document.getElementById("home-top-series").style.color ="black";
document.getElementById("home-top-movies").style.color ="white";
document.getElementById("series-section").style.display = "flex";
document.getElementById("series-section").style.flexDirection = "column";
document.getElementById("movies-section").style.display= "none";}



// this is a function to change the background of the home header to match the content being shown on the home header//

let homeHeaderBackground = document.getElementById("homeHeaderBackground");
let latestImage = document.getElementById("latestImage");
let latestContentInfo = document.getElementById("")
let latestContent = [];
let previous = document.getElementById("previous");
let next = document.getElementById("next");

previous.onclick = function (){
    document.getElementById("trending").Child();
}
const toggle = document.getElementById("toggle");
const lightBackground = document.getElementsByClassName("").backgroundColor="rgb(70,70,70)";


toggle.onclick = function (){
    if(lightBackground=true)
         {
                document.getElementsByClassName("series-episode").style.backgroundColor="black"
          }
           else{
        lightBackground=true;
    }
    }







