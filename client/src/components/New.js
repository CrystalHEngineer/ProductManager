import React, {useState} from 'react';
import {navigate} from '@reach/router';
import axios from 'axios';

const New = (props) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [errs, setErrs] = useState({});


    const submitHandler = (e) => {
        e.preventDefault();

        axios.post("http://localhost:8000/api/product", {
            title: title,
            price: price,
            description: description,
        })
            .then((res) => {
                if(res.data.errors){
                    console.log(res.data.errors);
                    setErrs(res.data.errors)
                }
                else {
                    console.log(res.data);
                    navigate("/product");
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }
    return (
        <div>
            <h1>New Product</h1>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Title: </label>
                    <input type="text"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    />
                    {
                        errs.title ?
                            <span>{errs.title.message}</span>
                            :null
                    }
                </div>
                <div>
                    <label>Price: </label>
                    <input type="number"
                    name="price"
                    value={price}
                    min="1"
                    onChange={(e) => setPrice(e.target.value)}
                    />
                    {
                        errs.price ?
                            <span>{errs.price.message}</span>
                            :null
                    }
                </div>
                <div>
                    <label>Description: </label>
                    <input type="text"
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    />
                    {
                        errs.description ?
                            <span>{errs.title.message}</span>
                            :null
                    }
                </div>
                <div>
                    <button type="submit">Create</button>
                    <button onClick={() => navigate("/product")}>Cancel</button>
                </div>
            </form>
        </div>
    )
};

export default New;