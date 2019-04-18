const DEFAULT_STATE = {
    auth: false,
    username: ''
};

function userReducer(state = DEFAULT_STATE, action) { //an action is just an object, it has to have a type property as commented out above
    switch (action.type) {
        case 'SIGN_IN':
            return {...state, auth: true};
        default: 
            return state;
    }
}

export default userReducer;