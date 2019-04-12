import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import Modal from '../modal';

class ProductAdd extends Component {
    constructor(props) {
        super(props);

        this.state = {
            qty: 1,
            modalOpen: false,
            totalPrice: 0,
            cartQty: 0
        }

        this.addToCart = this.addToCart.bind(this);
        this.decrementQty = this.decrementQty.bind(this);
        this.incrementQty = this.incrementQty.bind(this);
    }

    addToCart() {
        // console.log('Add', this.state.qty, 'product to cart, ID:', this.props.productId);
        const { productId, updateCart } = this.props;
        const { qty } = this.state;

        axios.get(`/api/addcartitem.php?product_id=${productId}&quantity=${qty}`).then(resp => {
            // console.log('Add Cart resp:', resp);
            const { cartCount, cartTotal } = resp.data

            updateCart(resp.data.cartCount);

            this.setState({
                modalOpen: true,
                cartQty: cartCount,
                totalPrice: cartTotal
            });
        });
    }

    decrementQty() {
        if (this.state.qty > 1) {
            this.setState({
                qty: this.state.qty - 1
            });
        }
    }

    incrementQty() {
        this.setState({
            qty: this.state.qty + 1
        });
    }

    render() {
        // console.log('Products Add Props:', this.props);
        const { modalOpen, totalPrice, cartQty, qty } = this.state;

        return (
            <div className="right-align add-to-cart">
                <span className="qty-container">
                    <button onClick={this.decrementQty} className="btn btn-small btn-floating purple lighten-1">
                        <i className="material-icons">remove</i>
                    </button>
                    <span className="product-qty">{this.state.qty}</span>
                    <button onClick={this.incrementQty} className="btn btn-small btn-floating purple lighten-1">
                        <i className="material-icons">add</i>
                    </button>
                </span>

                <button onClick={this.addToCart} className="btn purple darken-2">
                    <i className="material-icons">add_shopping_cart</i>
                </button>
                <Modal isOpen={modalOpen}>
                    <h1 className="center">{qty > 1 ? 'items' : 'Item(s)'} Added to Cart</h1> 
                                            {/* {qty} Item(s) Added to Cart */}

                    <div className="row">
                        <div className="col s6">Cart Total Items</div>
                        <div className="col s6">{cartQty}</div>
                    </div>
                    <div className="row">
                        <div className="col s6">Cart Total Price</div>
                        <div className="col s6">{totalPrice}</div>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default withRouter(ProductAdd); 