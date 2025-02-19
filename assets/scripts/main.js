
    


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





// Get all movie list links and movie lists
const movieListLinks = document.querySelectorAll('.page-list-link');
const movieLists = document.querySelectorAll('.movie');
const nextListButton = document.getElementById('nextListButton');
const prevListButton = document.getElementById('prevListButton');

let currentIndex = 0; // Ensure this matches your existing variable

// Function to show a specific movie list and highlight its link
function showMovieList(index) {
    // Hide all movie lists
    movieLists.forEach(list => list.style.display = 'none');

    // Remove active class from all links
    movieListLinks.forEach(link => link.classList.remove('active'));

    // Show the selected movie list and highlight its link
    if (movieLists[index]) {
        movieLists[index].style.display = 'block';
    }
    if (movieListLinks[index + 1]) { // +1 to skip the prev button
        movieListLinks[index + 1].classList.add('active');
    }
}

// Add click event listeners to movie list links
movieListLinks.forEach((link, index) => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default anchor behavior
        currentIndex = index - 1; // Adjust for prev button
        showMovieList(currentIndex);
    });
});

// Next button functionality
nextListButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % movieLists.length;
    showMovieList(currentIndex);
});

// Previous button functionality
prevListButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + movieLists.length) % movieLists.length;
    showMovieList(currentIndex);
});

// Show the first movie list by default when the page loads
window.onload = () => showMovieList(currentIndex);