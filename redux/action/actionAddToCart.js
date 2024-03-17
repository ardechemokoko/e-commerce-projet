import { ADD_TO_CART } from "../constance";

const addToCart = (course) => {
    return {
        type :ADD_TO_CART,
        course:course
    }
}

export default addToCart;