import React from 'react';
import { formatMoney } from '../../helpers';

console.log('Format Monies:', formatMoney(1127));
console.log('Format Monies:', formatMoney('asdf'));

export default props => {
    return (
        <li className="collection-item avatar">
            <img className="circle" src={`/dist/${props.images[0]}`} alt={`${props.name} product image`} />
            <span className="title">{props.name}</span>
            <p>{(props.price / 100).toFixed(2)}</p>
        </li>
    );
}

//============== DESTRUCTRING SHOWN BELOW ============================================================ //
// export default ({name, price, images: [productImg = '']}) => {
//     return (
//         <li className="collection-item avatar">
//             <img className="circle" src={`/dist/${productImg}`} alt={`${name} product image`}/>
//             <span className="title">{name}</span>
//             <p>{formatMoney(price)}</p>
//         </li>
//     )
//  }
