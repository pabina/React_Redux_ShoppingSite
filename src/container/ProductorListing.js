import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductComponent from './ProductComponent';
import axios from "axios";
import {SetProducts} from "./Redux/Action/ProductsActions.js"

const ProductorListing = () => {
    const products=useSelector((state)=>state);
    const dispatch=useDispatch();


    const fetchProducts=async()=>{
        const response=await axios.get('https://fakestoreapi.com/products');
        console.log(response);
        dispatch(SetProducts(response.data));
    }
    useEffect(()=>{
        fetchProducts();
    },[])

    console.log("products :", products)
    

  return (
    <>
    <div className='ui grid container'>
    <ProductComponent/>
    </div>
</>

  )}


export default ProductorListing