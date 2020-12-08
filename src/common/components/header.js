import React from 'react';

const Header = (props) => {
    const { redirectUrl, name } = props;
    return <p><a href={redirectUrl}>{name}</a></p>;
};

export default Header;