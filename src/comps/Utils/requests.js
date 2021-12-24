const api_key = require("../../keys").API_KEY;

export default {
    Trending: `/discover/movie?sort_by=popularity.desc&api_key=${api_key}`,
    Drama: `/discover/movie?sort_by=popularity.desc&api_key=${api_key}&with_genres=18`,
    Action: `/discover/movie?sort_by=popularity.desc&api_key=${api_key}&with_genres=28`,
    Comedy: `/discover/movie?sort_by=popularity.desc&api_key=${api_key}&with_genres=35`,
    Anim: `/discover/movie?sort_by=popularity.desc&api_key=${api_key}&with_genres=16`,
    Horror: `/discover/movie?sort_by=popularity.desc&api_key=${api_key}&with_genres=27`,
    Romance: `/discover/movie?sort_by=popularity.desc&api_key=${api_key}&with_genres=10749`,
    Mystery: `/discover/movie?sort_by=popularity.desc&api_key=${api_key}&with_genres=9648`,
    Pub: `/discover/tv?api_key=${api_key}&with_networks=213`,
};
