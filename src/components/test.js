import React, {Component} from 'react';
import axios from 'axios';

class Test extends Component {

    state = {
        message: 'Checking Auth...'
    }

    componentDidMount(){ //this will check auth when the page is loaded
        this.checkAuth();
    }

    async checkAuth (){
        const resp = await axios.get('/api/test/check_auth.php');
        console.log('Check Auth Resp:', resp.data);

        this.setState({
            message: resp.data.auth ? 'You are signed in!' : 'Please Sign In'
                                // ? if true              // : else if false
        });
    }


    signIn = async () => {
        const resp = await axios.get('/api/test/sign_in.php');

        console.log('Sign In Resp:', resp);

        this.checkAuth();
    }

    signOut = async () => {
        await axios.get('/api/test/sign_out.php');

        this.checkAuth();
    }

    render(){
        return(
            <div>
                <h1 className="center">Test Stuff</h1>
                <h2 className="center">{this.state.message}</h2>
                <div className="center">
                    <button onClick={this.signIn} className="btn btn-large">Sign In</button>
                    <button onClick={this.signOut} className="btn btn-large red">Sign Out</button>
                </div>
            </div>
        )
    }
}

export default Test;