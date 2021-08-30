import React from 'react';
import Product from '../components/Product.js';
import data from '../data.js';


export default function HomePage(){
    return(
        <div>
           <div className="content">{
             data.products.map(product => (
              <Product key={product._id} product={product}></Product>

             ))
           }
             
             </div>
           </div>
    )
}