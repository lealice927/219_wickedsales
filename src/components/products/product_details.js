import React, { Component } from 'react';
import axios from 'axios';
import ProductAdd from './product_add';
import ProductCarousel from './product_carousel';
import MiscDetails from './misc_details';
import { formatMoney } from '../../helpers';

class ProductDetails extends Component {
    state = {
        details: null
    }

    async componentDidMount() {
        const { params } = this.props.match;
        //Call server to get product details

        // console.log('Fetch product with id of:', params.product_id);

        const resp = await axios.get(`/api/getproductdetails.php?productId=${params.product_id}`);
        // console.log('Resp:', resp);

        if (resp.data.success) {
            this.setState({
                details: resp.data.productInfo
            });
        } else {
            this.setState({
                details: false
            });
        }

        this.setState({
            details: resp.data.productInfo
        });
    }
    render() {
        const { details } = this.state;
        const { match: { params }, updateCart } = this.props;

        if (!details === null) {
            return <h1>Loading...</h1>
        } else if (!details) {
            return <h1 className="center">No Product Found</h1>
        }

        const { description = 'No description available', name, images, price, miscDetails } = details;


        //================ MY WAY OF SHOWING ALL IMAGES IN THE ARRAY=========================//
        // const imageList = images.map( (image, index) =>{
        //     return (
        //         <img key={index} src={`/dist/${image}`} />
        //     )
        // })

        return (
            <div className="product-details">
                <h1 className="center">{name}</h1>
                <div className="row">
                    <ProductCarousel images={images} />
                    <div className="col s12 m4">
                        <div className="right-align product-price">{formatMoney(price)}</div>
                        <ProductAdd productId={params.product_id} updateCart={updateCart} />
                        <p>{description}</p>
                        <MiscDetails details={miscDetails} />
                    </div>
                </div>
                {/* <div>
                    {imageList}
                </div> */}
            </div>
        );
    }
}

export default ProductDetails;
