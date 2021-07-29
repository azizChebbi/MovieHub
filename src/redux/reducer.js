import {createStore} from 'redux'
import {persistStore , persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const initialState = {
    movies : [] ,
    series : [] ,
}

const fetch_movies = 'fetch_movies'
const fetch_series = 'fetch_series'

export const fetchMovies = (movies)=>{
    return{
        type : fetch_movies ,
        payload : movies 
    }
}

export const fetchSeries = (series)=>{
    return{
        type : fetch_series ,
        payload : series 
    }
}


const reducer = (state = initialState , action)=>{
    switch(action.type){
        case fetch_movies : return{
            ...state ,
            movies : action.payload
        }
        case fetch_series : return{
            ...state ,
            series : action.payload
        }
        default : return state ;
    }
}

const persistConfig = {
    key: 'root',
    storage,
}

const persisteReducer =  persistReducer(persistConfig , reducer)
export const store = createStore(persisteReducer) ;
export const persistor = persistStore(store) ;
