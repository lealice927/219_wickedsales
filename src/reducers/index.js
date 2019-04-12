import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import userReducer from './user_reducer';

//whatever we put into "user" will be our state
const rootReducer = combineReducers({
    form: formReducer, 
    user: userReducer //if user says "trolls" it has to match in the const state
                      // userReducer is a function that is assigned to the user state
});

export default rootReducer;
/////////WE DO NOT WRITE THIS STATE, JUST SHOWING US WHAT IT WILL LOOK LIKE AS AN EXAMPLE////////
// const state = {
//     form: {},
//     user: {         //if user says "trolls" this will have to match above
//         auth: false,
//         username: ''
//     }
// }

/////========================================================================================/////


// const state = {
//     user: {
//         auth: false,
//         username: 'Alice'
//     },
//     products: {
//         list: [],
//         productDetails: {}
//     },
//     cart: {
//         totalItems: 4,
//         totalCost: 8900,
//         items: []
//     }
// }