import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../context/ShopContext'
import dropdwon_icon from '../components/Assets/dropdown_icon.png'
import Item from '../components/Item/Item'
 

const ShopCategory = (props) => {

  const {all_product} = useContext(ShopContext);
  // console.log("products >> ", all_product)
  return (
    <div className='shop-category'>
        <img className='shopecategory-banner' src={props.banner} alt="" />
        <div className="shopcategory-indexSort">
          <p>
            <span>Shwoung 1-12</span> out of 36 products</p>
          <div className="shopcategory-sort">
            sort by <img src={dropdwon_icon} alt="" />
          </div>
        </div>
        <div className="shopcategory-products">
          {all_product.map((item,i)=>{
            if (props.category === item.category) {
              return <Item key={i} id={item.id} name={item.name} image={item.image}
              new_prices={item.new_price} old_prices={item.old_price}/>
              
            }else{
              return null;
            }
          })}
        </div>
        <div className="shopcategory-loadmore">
          Explore More
        </div>
    </div>
  )
}

export default ShopCategory