import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function (WrappedComponent, to = '/account/sign-in', requireAuth = true) {
    class Auth extends Component {
        componentDidMount(){
            this.checkAuth();
        }

        componentDidUpdate(){
            this.checkAuth();
        }

        checkAuth(){
            if(this.props.auth !== requireAuth){ //if not logged in... go back home
                this.props.history.push(to);
            }
        }

        render() {
            // console.log('Auth HOC:', this.props);
            return <WrappedComponent {...this.props} />;
        }
    }

    function mapStateToProps(state){
        return {
            auth: state.user.auth
        }
    }

    return connect(mapStateToProps)(Auth);
}