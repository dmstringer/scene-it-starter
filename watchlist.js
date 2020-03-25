document.addEventListener("DOMContentLoaded", function() {

    // let watchList = localStorage.getItem("watchlist");
    let watchlistJSON2 = localStorage.getItem("watchlist");
    var watchlist2 = JSON.parse(watchlistJSON2);
    console.log (watchlist2);
    let moviesContainer = document.getElementById("movies-container");
    
    moviesContainer.innerHTML = renderMovies(watchlist2);

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
                            <div><a href="#" class="btn btn-primary" onclick="saveToWatchlist(${currentMovie.imdbID})">Add!</a></div>
                        </div>
                    </div>
                </div>`
        });
        return movieHTML.join("");
    };

    

});