import React, {Component} from 'react';
import './Header.css';
import {NavLink} from 'react-router-dom';

class Header extends Component {

    render() {
        return (
            <div className="Header">
                <h1>News</h1>
                <div className="Header-Links">
                    <NavLink to="/pages/posts">Posts</NavLink>
                    <NavLink to="/pages/add" exact>Add new post</NavLink>
                </div>
            </div>
        )
    }
}



export default Header;