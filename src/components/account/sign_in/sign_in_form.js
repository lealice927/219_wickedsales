import React from 'react';
import { reduxForm, Field } from 'redux-form';
import Input from '../../general/input';

const SignInForm = props => {
    // console.log('Sign In Form Props:', props);
    const { handleSubmit, signIn } = props;

    return (
        <form onSubmit={handleSubmit(signIn)}>
            {/*if we want to test what parameters it is given, we can CL it like this */}
            <div className="row">
                <Field col="s12" id="email" name="email" component={Input} label="Email" />
                <Field col="s12" id="password" name="password" component={Input} type="password" label="Password" />
            </div>

            <div className="row">
                <div className="col s12 right-align">
                    <button className="btn purple darken-2">Sign In</button>
                </div>
            </div>
        </form>
    )
}

export default reduxForm({
    form: 'sign-in-form' //this is us setting the name of the form, THIS IS MADE-UP!!!! 
})(SignInForm);
