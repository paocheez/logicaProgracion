/*
Dado un array de objetos de peliculas (titulo, director y si fue vista), mostrar todas las peliculas indicando si la viste o no.

Input: [{"el señor de los anillos", "denu lemon", true}, {"avatar", "denu lemon", false}]  
Output: I have seen "El señor de los anillos 2" directed by Deno Lemon I have not seen "El señor de los anillos 3" directed by Deno Lemon"
*/

function moviesArr(...movies){
    let stringMovies = "";
    let movie;
    for( movie of movies ){
        const { title, directedBy, seen } = movie;
        (seen) ? stringMovies += `I have seen "${title}" directed by ${directedBy}. ` : stringMovies += `I haven't seen "${title}" directed by ${directedBy}. `
    }
    return stringMovies;
}