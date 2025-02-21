// Dialog Box for Login
const login = document.getElementById("openDialog");
const loginBox = document.getElementById("dialogBox");
const closeLogin = document.getElementById("closeDialog");
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

closeLogin.onclick = function() {
    loginBox.close();
}

loginLink1.onclick = function() {
    loginForm.style.display = "flex";
    recoveryForm.style.display = registerForm.style.display = "none";
}

loginLink2.onclick = function() {
    loginForm.style.display = "flex";
    recoveryForm.style.display = registerForm.style.display = "none";
}

forgottenPasswordLink.onclick = function() {
    recoveryForm.style.display = "flex";
    loginForm.style.display = registerForm.style.display = "none";
}

registerLink.onclick = function() {
    registerForm.style.display = "flex";
    loginForm.style.display = recoveryForm.style.display = "none";
}

// Trending Section Toggle
const homeTrendingMoviesLink = document.getElementById("home-trending-movies");
const homeTrendingSeriesLink = document.getElementById("home-trending-series");

homeTrendingMoviesLink.style.backgroundColor = "aqua";
homeTrendingMoviesLink.style.color = "black";
homeTrendingSeriesLink.style.backgroundColor = "black";
homeTrendingSeriesLink.style.color = "white";
document.getElementById("trending-series-list").style.display = "none";
document.getElementById("trending-movies-list").style.display = "flex";

homeTrendingMoviesLink.onclick = function() {
    homeTrendingMoviesLink.style.backgroundColor = "aqua";
    homeTrendingMoviesLink.style.color = "black";
    homeTrendingSeriesLink.style.backgroundColor = "black";
    homeTrendingSeriesLink.style.color = "white";
    document.getElementById("trending-series-list").style.display = "none";
    document.getElementById("trending-movies-list").style.display = "flex";
}

homeTrendingSeriesLink.onclick = function() {
    homeTrendingSeriesLink.style.backgroundColor = "aqua";
    homeTrendingSeriesLink.style.color = "black";
    homeTrendingMoviesLink.style.backgroundColor = "black";
    homeTrendingMoviesLink.style.color = "white";
    document.getElementById("trending-series-list").style.display = "flex";
    document.getElementById("trending-movies-list").style.display = "none";
}

// Previous and Next Functionality for Trending Content
const previous = document.getElementById("previous");
const next = document.getElementById("next");
let currentIndex = 0;
let contentList = document.getElementsByClassName("trending-content");

function updateDisplay() {
    for (let i = 0; i < contentList.length; i++) {
        contentList[i].style.display = "none";
    }
    contentList[currentIndex].style.display = "flex";
}

window.onload = function() {
    updateDisplay();
};

previous.onclick = function() {
    currentIndex = (currentIndex - 1 + contentList.length) % contentList.length;
    updateDisplay();
};

next.onclick = function() {
    currentIndex = (currentIndex + 1) % contentList.length;
    updateDisplay();
};

// Top-Rated Section Toggle
const homeMovieList = document.getElementById("home-top-movies");
const homeTVShowsList = document.getElementById("home-top-tv-series");
const seriesSection = document.getElementById("series-section");
const moviesSection = document.getElementById("movies-section");

homeMovieList.style.backgroundColor = "aqua";
homeMovieList.style.color = "black";
homeTVShowsList.style.backgroundColor = "black";
homeTVShowsList.style.color = "white";
seriesSection.style.display = "none";
moviesSection.style.display = "flex";

homeMovieList.onclick = function() {
    homeMovieList.style.backgroundColor = "aqua";
    homeMovieList.style.color = "black";
    homeTVShowsList.style.backgroundColor = "black";
    homeTVShowsList.style.color = "white";
    seriesSection.style.display = "none";
    moviesSection.style.display = "flex";
};

homeTVShowsList.onclick = function() {
    homeTVShowsList.style.backgroundColor = "aqua";
    homeTVShowsList.style.color = "black";
    homeMovieList.style.backgroundColor = "black";
    homeMovieList.style.color = "white";
    moviesSection.style.display = "none";
    seriesSection.style.display = "flex";
};

