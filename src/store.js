import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { nyTimesArticlesReducer } from './reducers/reducer';

export default createStore(nyTimesArticlesReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk));


