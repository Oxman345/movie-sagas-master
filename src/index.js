import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import axios from 'axios';
import {takeEvery, put} from 'redux-saga/effects';


// ------------ THESE ARE OUR GENERATOR FUNCTIONS --------------
// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery( 'FETCH_MOVIES', getMovies );
    yield takeEvery( 'UPDATE_MOVIE', updateMovies );
    // yield takeEvery( 'SET_DETAILS', getDetails );
}

function* getMovies() {
    try{
        console.log('In getMovies generator.')
        const response = yield axios.get('/movies');
        yield console.log('In getMovies', response.data);
        yield put ({ type: 'SET_MOVIES', payload: response.data})
    }
    catch(error) {
        console.log( 'Trouble fetching movies', error )
    }
};

function* updateMovies(action) {
    try{
        console.log('In updateMovies generator.')
        const response = yield axios.put('/movies', action.payload);
        yield console.log('In updateMovies', response.data);
    }
    catch(error) {
        console.log( 'Trouble updating movies ', error )
    }
};


// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();


// ------------ THESE ARE OUR REDUCERS --------------

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// // Used to store the movie genres
// const genres = (state = [], action) => {
//     switch (action.type) {
//         case 'SET_GENRES':
//             return action.payload;
//         default:
//             return state;
//     }
// }

const details = (state = [], action) => {
    switch (action.type) {
        case 'SET_DETAILS':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        details,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
