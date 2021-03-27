import React from 'react';
import {Link, navigate} from '@reach/router';

const Header = (props) => {
    return (
        <div>
            <h1>Product Manager</h1>
            <div>
                <button onClick={() => navigate("/product")}>List All Products</button>
                <button onClick={() => navigate("/product/new")}>Create</button>
            </div>
        </div>
    )
};

export default Header;