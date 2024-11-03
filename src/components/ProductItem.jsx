import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom';

const ProductItem = ({id,image,name,price}) => {
    const {currency}=useContext(ShopContext);

  return (
  <Link className='  bg-white text-black cursor-pointer hover:scale-90 transition ease-in-out shadow' to={`/product/${id}`}>
    <div className='overflow-hidden mt-20 flex justify-center'>
      <div className='grid grid-rows-1'>
      <img className=' h-72' src={image[0]} alt=''/>
      <button class="mt-4     mb-10 bg-neutral-900 py-2  font-com text-sm capitalize text-white   font  border ">Shop now</button>
      </div>
       
    </div>
   
   
    
  </Link>
  
  
  )
}

export default ProductItem
