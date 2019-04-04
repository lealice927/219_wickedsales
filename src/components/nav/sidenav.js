import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Sidenav extends Component {
    componentDidMount() {
        // console.log('Sidenav Mounted:', this.sidenav);

        M.Sidenav.init(this.sidenav); //M.Sidenav is from materialize
    }

    render() {
        return (
            <ul ref={(element) => { this.sidenav = element }} id="sidenav" className="sidenav">
                {this.props.link}
            </ul>
        );
    }
}

export default Sidenav;
