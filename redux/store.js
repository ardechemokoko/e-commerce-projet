import { createStore, combineReducers } from 'redux';
import reducerCourses from './reducer/reducerCourses';
import reducerCart from './reducer/reducerCart';

const rootReducer = combineReducers({
    courses: reducerCourses,
    cart:reducerCart
});

const store = createStore(rootReducer);

export default store;