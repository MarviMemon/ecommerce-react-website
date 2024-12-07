 import React from 'react'
 import './Breadcrums.css'
 import arroe_icon from '../Assets/breadcrum_arrow.png'
 
 const Breadcrums = (props) => {
    const {product} = props ;
   return (
     <div className='breadcrum'>
        HOME <img src={arroe_icon} alt="" /> SHOP <img src={arroe_icon} alt="" /> {product.category} <img src={arroe_icon} alt="" /> 
        {product.name}

     </div>
   )
 }
 
 export default Breadcrums