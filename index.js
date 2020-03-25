document.addEventListener("DOMContentLoaded", function() {

    function renderMovies (movieArray) {
        let movieHTML = movieArray.map(function(currentMovie){ 
        return `<div class="movie col mb-4">
                    <div class="card" style="width: 18rem;">
                        <img src="${currentMovie.Poster}" class="card-img-top" alt="${currentMovie.Title}">
                        <div class="card-body d-flex flex-column">
                            <div class="d-flex justify-content-between">
                                <div class="flex-shrink-1"><h5 class="card-title">${currentMovie.Title}</h5></div>
                                <div>${currentMovie.Year}</div>
                            </div>
                            <div><a href="#" class="btn btn-primary" onclick='saveToWatchlist("${currentMovie.imdbID}")'>Add!</a></div>
                        </div>
                    </div>
                </div>`
        });
        return movieHTML.join("");
    };

    let moviesContainer = document.getElementById("movies-container");
    
    // moviesContainer.innerHTML = renderMovies(movieData);

    document.getElementById("search-form").addEventListener("submit", function(e){
        e.preventDefault();
        moviesContainer.innerHTML = renderMovies(movieData);
    })

    // function saveToWatchlist (imdbID) {
    //     let movie = movieData.find(function(currentMovie){
    //         return currentMovie.imdbID == imdbID;
    //     });
    //     let watchlistJSON = localStorage.getItem("watchlist");
    //     let watchlist = JSON.parse(watchlistJSON);
    //     if (watchlist === null) {
    //         watchlist = [];
    //     }
    //     watchlist.push(movie);
    //     watchlistJSON = JSON.stringify(watchlist);
    //     localStorage.setItem("watchlist", watchlistJSON);

    // }

});

function saveToWatchlist (imdbID) {
    let movie = movieData.find(function(currentMovie){
        return currentMovie.imdbID == imdbID;
    });
    let watchlistJSON = localStorage.getItem("watchlist");
    let watchlist = JSON.parse(watchlistJSON);
    if (watchlist === null) {
        watchlist = [];
    }
    watchlist.push(movie);
    watchlistJSON = JSON.stringify(watchlist);
    localStorage.setItem("watchlist", watchlistJSON);

}
