import React from 'react';
import classes from './Header.module.css';

const Header = props => {

    return (
        <header className={classes.header}>
            <h1>Chat App</h1>
            <h1>{props.name}</h1>
        </header>
    )
}

export default Header;