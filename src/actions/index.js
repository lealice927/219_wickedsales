
export function signIn(user){
    console.log('Sign In Action Creator, user data:', user);
    
//when an action gets dispatch, it goes to the reducer
    return{
        type: 'SIGN_IN'
    }
}
