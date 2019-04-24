export default (store) => (next) => (action) => {
    //code goes here
    if(typeof action !== 'function'){ //if it is not a function, go onto the next middleware
        return next(action);
    }

    return action(store.dispatch);
}



// ==================== ES5 BELOW =====================================//
// export default function think (store){
//     return function(next){
//         return function(action){
//             //code goes here
//         }
//     }
// }

// think(reduxStore)(theNextFunctionInLine)(action);
