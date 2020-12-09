import React from 'react';
import './Style/style.css'

const Header = (props) => {
    const { redirectUrl, name } = props;
    return <p><a href={redirectUrl}>{name}</a></p>;
};

export default Header;