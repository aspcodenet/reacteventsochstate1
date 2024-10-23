import React from 'react'

import { products } from './data/ProductData' 
import { Product } from './Product'

// ta arrayen loopa den 
// for varje skapa en <Product - komponent

export const Products = () => {
  return (
<section className="products" id="products">
            <h1 className="heading"> <span>our</span> products </h1>
        
            <div className="productgallery">
                {
                  // foreach i products - <Product product=
                  products.map( (theProduct,i) => <Product key={i} product={theProduct}></Product>   )
                }
            </div>
        
        </section>  )
}