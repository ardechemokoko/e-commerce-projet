import COURSES from '../../data/testData';
import { ADD_TO_CART } from '../constance';

const initialState ={
    existingCourses :COURSES
};

const reducerCourses = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const indexCoursOfModify = state.existingCourses.findIndex(course => course.id === action.course.id);
            const copyExistingCourses =[...state.existingCourses]
            copyExistingCourses[indexCoursOfModify].selected=true;
            return {
                ...state,
                existingCourses : copyExistingCourses
            }
            break;
    
        default:
            return state;
    }
  
}

export default reducerCourses;