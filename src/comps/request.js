const app_key = 'APP_KEY';


export default {
    Trending :`/discover/movie?sort_by=popularity.desc&api_key=${app_key}`,
    Drama : `/discover/movie?sort_by=popularity.desc&api_key=${app_key}&with_genres=18`,
    Action : `/discover/movie?sort_by=popularity.desc&api_key=${app_key}&with_genres=28`,
    Comedy : `/discover/movie?sort_by=popularity.desc&api_key=${app_key}&with_genres=35`,
    Anim : `/discover/movie?sort_by=popularity.desc&api_key=${app_key}&with_genres=16`,
    Horror : `/discover/movie?sort_by=popularity.desc&api_key=${app_key}&with_genres=27`,
    Romance : `/discover/movie?sort_by=popularity.desc&api_key=${app_key}&with_genres=10749`,
    Mystery : `/discover/movie?sort_by=popularity.desc&api_key=${app_key}&with_genres=9648`,
    Pub : `/discover/tv?api_key=${app_key}&with_networks=213`
}
