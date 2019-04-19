import types from '../actions/types';

const DEFAULT_STATE = {
    auth: false,
    email: ''
};

function userReducer(state = DEFAULT_STATE, action) { //an action is just an object, it has to have a type property as commented out above
    switch (action.type) {
        case types.SIGN_IN:
            return {...state, auth: true, email:action.email};
        //Make case for 'SIGN_OUT'
        case types.SIGN_OUT:
            // return {...state, auth: false};
            return {...DEFAULT_STATE};
        default: 
            return state;
    }
}

export default userReducer;