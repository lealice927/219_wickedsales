import React, { Component } from 'react';
import axios from 'axios';
import ProductCarouself from './product_carousel';
import ProductCarousel from './product_carousel';

class ProductDetails extends Component {
    state = {
        details: null
    }

    async componentDidMount() {
        const { params } = this.props.match;
        //Call server to get product details

        // console.log('Fetch product with id of:', params.product_id);

        const resp = await axios.get(`/api/getproductdetails.php?productId=${params.product_id}`);
        console.log('Resp:', resp);

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
        console.log('Product Details:', this.state.details);
        const { details } = this.state;

        if (!details === null) {
            return <h1>Loading...</h1>
        } else if (!details) {
            return <h1 className="center">No Product Found</h1>
        }

        const { description = 'No description available', name, images } = details;
        

        //================ MY WAY OF SHOWING ALL IMAGES IN THE ARRAY=========================//
        // const imageList = images.map( (image, index) =>{
        //     return (
        //         <img key={index} src={`/dist/${image}`} />
        //     )
        // })

        return (
            <div className="product-details">
                <h1 className="center">{name}</h1>
                <ProductCarousel images={images} />
                <p>{description}</p>
                {/* <div>
                    {imageList}
                </div> */}
            </div>
        );
    }
}

export default ProductDetails;
