import types from './types';
import axios from 'axios';

export function signIn(user) {
    return function (dispatch) {
        axios.get('/api/sign-in.php').then(resp => {
            console.log('Sign In Resp:', resp);

            if (resp.data.success) {
                dispatch({
                    type: types.SIGN_IN
                })
            } else {
                dispatch({
                    type: types.SIGN_IN_ERROR
                })
            }
        })
    }


    // console.log('Sign In Action Creator, user data:', user);
    // const resp = await axios.get('/api/sign-in.php')
    //     console.log('Sign In Resp:', resp);
    //     return {
    //         type: types.SIGN_IN
    // }
    //when an action gets dispatch, it goes to the reducer
    // return{
    //     type: types.SIGN_IN, //keyword type will NEVER be plural, REDUX will yell at you! 
    //     email: user.email
    // }
}

//Make action creator for sign out
//Make the action type SIGN_OUT
export function signOut() {
    return {
        type: types.SIGN_OUT
    }
}

export function getAllProducts() {
    return function (dispatch) {
        axios.get('/api/getproducts.php').then((resp) => {

            dispatch({
                type: types.GET_ALL_PRODUCTS,
                products: resp.data.products
            });
        });
    }
}