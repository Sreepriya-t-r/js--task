// 4) Movie Recommendation System
// Scenario: Build a simple recommendation system that suggests movies based on a user's favorite genre.

const movies = [
    { title:"Inception", genre: "Sci-Fi" },
    { title:"The Godfather", genre: "Crime" },
    { title:"Interstellar", genre: "Sci-Fi" },
    { title:"Joker", genre: "Drama" },
    { title:"Avengers", genre: "Action" }
];

function recommendMovies(favoriteGenre) {
    return movies
        .filter(movie => movie.genre === favoriteGenre) 
        .map(movie => movie.title); 
}
console.log(recommendMovies("Sci-Fi"));  
console.log(recommendMovies("Crime"));   
  
  