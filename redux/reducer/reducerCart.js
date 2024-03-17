
import paidCourse from "../../data/paidCourseModel";
import { ADD_TO_CART } from "../constance";

const initialState ={
    cartCourses :[],
    total : 0,
}

const reducerCart = (state=initialState,action)=>{
    switch (action.type) {
        case ADD_TO_CART:
            const course = action.course;
            const idCourse= course.id;
            const courseS = course.price;
            const title=title;

            new paidCourse(idCourse,courseS,title)
            return {
                ...state,
                cartCourses: state.cartCourses.concat(paidCourse),
                total : state.total + courseS
            }
            
            break;
    
        default:
            return state;
    }
}

export default reducerCart;