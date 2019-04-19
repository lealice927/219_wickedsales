import types from './types';

export function signIn(user){
    console.log('Sign In Action Creator, user data:', user);
    
//when an action gets dispatch, it goes to the reducer
    return{
        type: types.SIGN_IN, //keyword type will NEVER be plural, REDUX will yell at you! 
        email: user.email
    }
}

//Make action creator for sign out
//Make the action type SIGN_OUT
export function signOut(){
    return{
        type: types.SIGN_OUT
    }
}