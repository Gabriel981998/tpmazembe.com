import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import ProductItem from './ProductItem';

const LatestCollection = () => {
    const {products}=useContext(ShopContext);
    const [latestProducts,setLatestProducts]=useState([]);
    console.log(products);

    useEffect(()=>{
        setLatestProducts(products.slice(0,3))  
    },[])
  return (
    <div className='bg-gradient-to-t from-black to-transparent  '>
        <div className=' bg-black text-center py-8 text-3xl'>
            <h1 className='font '>Les meillieurs produits</h1>

        </div>
        {/*Render product*/}
        <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4  bg-white text-black '>
{
    latestProducts.map((item,index)=>(<ProductItem key={index } id={item._id} image={item.image} name={item.name} price={item.price}/>))
}

        </div>
      
    </div>
  )
}

export default LatestCollection
