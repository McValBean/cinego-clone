
    


//this code is for the dialog box for the login
const login= document.getElementById("openDialog");
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
    loginBox.style.display = "flex";
}

closeLogin.onclick = function() {
    loginBox.close();
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

//these are the movie list links//
const movieListLink1 = document.getElementById("movieListLink1");
const movieListLink2 = document.getElementById("movieListLink2");
const movieListLink3 = document.getElementById("movieListLink3");
const movieListLink4 = document.getElementById("movieListLink4");
const movieListLink5 = document.getElementById("movieListLink5");
const nextListButton = document.getElementById("nextListButton");
const prevListButton = document.getElementById("prevListButton");
const movieLinks = document.querySelectorAll("[id^='movieListLink']");


//these are for the movie lists//
const movieList1 = document.getElementById("movieList1");
const movieList2 = document.getElementById("movieList2");
const movieList3 = document.getElementById("movieList3");
const movieList4 = document.getElementById("movieList4");
const movieList5 = document.getElementById("movieList5");
const movieLists = document.querySelectorAll("[id^='movieList']");


    movieListLink1.style.backgroundColor ="aqua";
    movieListLink1.style.color ="black";
    movieList1.style.display ="flex";

    movieList2.style.display ="none";
    movieList3.style.display ="none";
    movieList4.style.display ="none";
    movieList5.style.display ="none";


movieListLink1.onclick = function() {
    movieListLink1.style.backgroundColor ="aqua";
    movieListLink1.style.color ="black";
    movieList1.style.display ="flex";
    
    movieListLink2.style.backgroundColor ="rgb(30,30,30)";
    movieListLink2.style.color ="white";
    movieListLink3.style.backgroundColor ="rgb(30,30,30)";
    movieListLink3.style.color ="white";
    movieListLink4.style.backgroundColor ="rgb(30,30,30)";
    movieListLink4.style.color ="white";
    movieListLink5.style.backgroundColor ="rgb(30,30,30)";
    movieListLink5.style.color ="white";

    movieList2.style.display ="none";
    movieList3.style.display ="none";
    movieList4.style.display ="none";
    movieList5.style.display ="none";
}

movieListLink2.onclick = function() {
    movieListLink2.style.backgroundColor ="aqua";
    movieListLink2.style.color ="black";
    movieList2.style.display ="flex";

    movieListLink1.style.backgroundColor ="rgb(30,30,30)";
    movieListLink1.style.color ="white";
    movieListLink3.style.backgroundColor ="rgb(30,30,30)";
    movieListLink3.style.color ="white";
    movieListLink4.style.backgroundColor ="rgb(30,30,30)";
    movieListLink4.style.color ="white";
    movieListLink5.style.backgroundColor ="rgb(30,30,30)";
    movieListLink5.style.color ="white";
    
    movieList1.style.display ="none";
    movieList3.style.display ="none";
    movieList4.style.display ="none";
    movieList5.style.display ="none";}

    movieListLink3.onclick = function() {
        movieListLink3.style.backgroundColor ="aqua";
        movieListLink3.style.color ="black";
        movieList3.style.display ="flex";
        
        movieListLink2.style.backgroundColor ="rgb(30,30,30)";
        movieListLink2.style.color ="white";
        movieListLink1.style.backgroundColor ="rgb(30,30,30)";
        movieListLink1.style.color ="white";
        movieListLink4.style.backgroundColor ="rgb(30,30,30)";
        movieListLink4.style.color ="white";
        movieListLink5.style.backgroundColor ="rgb(30,30,30)";
        movieListLink5.style.color ="white";

        movieList1.style.display ="none";
        movieList2.style.display ="none";
        movieList4.style.display ="none";
        movieList5.style.display ="none";
    }

    movieListLink4.onclick = function() {
        movieListLink4.style.backgroundColor ="aqua";
        movieListLink4.style.color ="black";
        movieList4.style.display ="flex";
        
        movieListLink2.style.backgroundColor ="rgb(30,30,30)";
        movieListLink2.style.color ="white";
        movieListLink3.style.backgroundColor ="rgb(30,30,30)";
        movieListLink3.style.color ="white";
        movieListLink1.style.backgroundColor ="rgb(30,30,30)";
        movieListLink1.style.color ="white";
        movieListLink5.style.backgroundColor ="rgb(30,30,30)";
        movieListLink5.style.color ="white";

        movieList1.style.display ="none";
        movieList2.style.display ="none";
        movieList3.style.display ="none";
        movieList5.style.display ="none";}

        movieListLink5.onclick = function() {
            movieListLink5.style.backgroundColor ="aqua";
            movieListLink5.style.color ="black";
            movieList5.style.display ="flex";
            
            movieListLink2.style.backgroundColor ="rgb(30,30,30)";
            movieListLink2.style.color ="white";
            movieListLink3.style.backgroundColor ="rgb(30,30,30)";
            movieListLink3.style.color ="white";
            movieListLink4.style.backgroundColor ="rgb(30,30,30)";
            movieListLink4.style.color ="white";
            movieListLink1.style.backgroundColor ="rgb(30,30,30)";
            movieListLink1.style.color ="white";

            movieList1.style.display ="none";
            movieList2.style.display ="none";
            movieList3.style.display ="none";
            movieList4.style.display ="none";
            
        }
        let currentIndexMovieList = 0; 

// Function to update the active movie list
function updateMovieList(index) {
    movieLinks.forEach((link, i) => {
        link.style.backgroundColor = i === index ? "aqua" : "rgb(30,30,30)";
        link.style.color = i === index ? "black" : "white";
        movieLists[i].style.display = i === index ? "flex" : "none";
    });
}

// Set initial state
updateMovieList(currentIndexMovieList);

// Handle link clicks
movieLinks.forEach((link, index) => {
    link.onclick = () => {
        currentIndexMovieList = index;
        updateMovieList(currentIndexMovieList);
    };
});

// Handle Next & Previous buttons
nextListButton.onclick = () => {
    currentIndexMovieList = (currentIndexMovieList + 1) % movieLists.length;
    updateMovieList(currentIndexMovieList);
};

prevListButton.onclick = () => {
    currentIndexMovieList = (currentIndexMovieList - 1 + movieLists.length) % movieLists.length;
    updateMovieList(currentIndexMovieList);
};

//Below this is for the trending section of the homepage to toggle between movies and series//

const homeTrendingMoviesLink = document.getElementById("home-trending-movies");
const homeTrendingSeriesLink = document.getElementById("home-trending-series");


homeTrendingMoviesLink.style.backgroundColor ="aqua";
homeTrendingMoviesLink.style.color ="black";
homeTrendingSeriesLink.style.backgroundColor ="black";
homeTrendingSeriesLink.style.color ="white";
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
document.getElementById("home-trending-series").style.color ="black";
document.getElementById("home-trending-movies").style.backgroundColor ="black";
document.getElementById("home-trending-movies").style.color ="white";
document.getElementById("trending-series-list").style.display ="flex";
document.getElementById("trending-movies-list").style.display="none";
}

const previous = document.getElementById("previous");
const next = document.getElementById("next");

let currentIndex = 0;


let contentList = document.getElementsByClassName("trending-content");




function updateDisplay() {

    for (let i = 0; i < contentList.length; i++) {
        contentList[i].style.display = "none";
    }


    contentList[currentIndex].style.display = "flex";
};

// Initial load: show the first element (currentIndex = 0)
window.onload = function() {
    updateDisplay();  // Show the first element when the page loads
};

// Handle "Previous" button click
previous.onclick = function() {
    // Move to the previous element
    currentIndex = (currentIndex - 1 + contentList.length) % contentList.length;
    updateDisplay();  // Update the display

};

// Handle "Next" button click
next.onclick = function() {
    // Move to the next element
    currentIndex = (currentIndex + 1) % contentList.length;
    updateDisplay();  // Update the display
};


const nextList = document.getElementById("nextListButton");
const prevList = document.getElementById("prevListButton");
const ParentMovieList = document.getElementById("ParentMovieList");

//this is for the top-rated section of the homepage//

const homeMovieList = document.getElementById("home-top-movies");
const homeTVShowsList = document.getElementById("home-top-tv-series");
const seriesSection = document.getElementById("series-section");
const moviesSection = document.getElementById("movies-section");

// Default state
homeMovieList.style.backgroundColor = "aqua";
homeMovieList.style.color = "black";
homeTVShowsList.style.backgroundColor = "black";
homeTVShowsList.style.color = "white";
seriesSection.style.display = "none";
moviesSection.style.display = "flex";

// Event for Movies Section
homeMovieList.onclick = function() {
    homeMovieList.style.backgroundColor = "aqua";
    homeMovieList.style.color = "black";
    homeTVShowsList.style.backgroundColor = "black";
    homeTVShowsList.style.color = "white";

    seriesSection.style.display = "none";
    moviesSection.style.display = "flex";
};

// Event for Series Section
homeTVShowsList.onclick = function() {
    homeTVShowsList.style.backgroundColor = "aqua";
    homeTVShowsList.style.color = "black";
    homeMovieList.style.backgroundColor = "black";
    homeMovieList.style.color = "white";

    moviesSection.style.display = "none";
    seriesSection.style.display = "flex";
    seriesSection.style.flexDirection = "column";

};


