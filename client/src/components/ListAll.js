import React, {useEffect, useState} from 'react';
import {Link} from '@reach/router';
import axios from 'axios';
// import DeleteButton from './DeleteButton';

const ListAll = (props) => {
    const [allProducts, setAllProducts] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8000/api/product")
            .then((res) => {
                console.log(res.data);
                setAllProducts(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    return (
        <div>
            <table>
                <thead>
                    <th>Product: </th>
                </thead>
                <tbody>
                    {
                        allProducts.map((product, index) => (
                            <tr key={index}>
                            <td>
                                <Link to={`/product/${product._id}`}>{product.title}</Link>
                            </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
};

    export default ListAll;