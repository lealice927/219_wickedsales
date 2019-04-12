import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import '../assets/css/app.scss';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Cart from './cart';
import Home from './home';
import Nav from './nav';
import NotFound from './404';
import ProductRoutes from './products';
import axios from 'axios';

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            cartItems: 0
        }

        this.updateCartItems = this.updateCartItems.bind(this);
    }

    componentDidMount(){
        this.getCartItemsCount();
    }

    async getCartItemsCount(){
        const resp = await axios.get('/api/getcartitemcount.php');

        // console.log('Item Count Resp:', resp);

        this.updateCartItems(resp.data.itemCount);
    }

    updateCartItems(count){
        this.setState({
            cartItems: count
        });
    }

    render() {
        return (
            <div>
                <Nav cartItems={this.state.cartItems} />
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/products" render={(routingProps)=>{
                            return <ProductRoutes {...routingProps} updateCart={this.updateCartItems} />
                        }} />
                        <Route path="/cart" component={Cart} />
                        <Route component={NotFound} />  {/*Default should be at the bottom, like in a switch statement */}
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;
