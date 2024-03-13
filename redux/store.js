import { createStore, combineReducers } from 'redux';
import reducerCourses from './reducer/reducerCourses';

const rootReducer = combineReducers({
    courses: reducerCourses,
});

const store = createStore(rootReducer);

export default store;