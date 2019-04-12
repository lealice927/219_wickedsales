const DEFAULT_STATE = {
    auth: false,
    username: ''
};

// const exampleAction = {
//     type: 'LOG_USER_IN',
//     username: 'Jim'
// }

function userReducer(state = DEFAULT_STATE, action) { //an action is just an object, it has to have a type property as commented out above
    switch (action.type) {
        default: 
            return state;
    }
}

export default userReducer;