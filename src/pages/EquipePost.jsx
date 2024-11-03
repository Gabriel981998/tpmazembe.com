import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { client } from "../lib/client";


import { useLayoutEffect, useRef } from "react"
import { Link } from "react-router-dom";
import { format } from 'date-fns';
import {PortableText} from "@portabletext/react"
import Equipe from './Equipe';
const EquipePost = () => {
  const [equipePost,setEquipePost]=useState([]);
  const [equipes,setEquipe]=useState([])

  const {slug}=useParams()


  
  useEffect(()=>{
    client.fetch(
        `*[slug.current == "${slug}"]{
        title,
        drapo,
         weight,
        seasonStats,
          goals,
          dateofBrith,
           appearances,
          assist,
          secondbody,
          minutesplayed,
          contryofBirth,
          height,
          dateofDebut,
  
        slug,
        body,
         firstname,
         lastname,
         number,
         position,
        publishedAt,
        mainImage{
        asset -> {
        _id,
        url
        },
        alt,
        },
        "name":author ->name,

        }| order(publishedAt desc)`
    ).then((data)=>{setEquipePost(data[0])
      
    }).catch(console.error);

},[slug]);
/*
useEffect(()=>{
  document.title=`Reading | ${blogpost.title}`
},[slug])*/
  return <>
{equipePost && <section>

    
<div className='text-balance text-black bg-white '> 
<div className=' grid grid-cols-1   lg:grid-cols-2'>


<div className='font text-center '>

<p className=' text-8xl pb-3 pt-20'>{equipePost.firstname} </p>
<p className='text-4xl mr-2  pb-4'>{equipePost.lastname} </p>


</div>

<div  className='flex justify-center'>
{equipePost.mainImage && <img src={equipePost.mainImage.asset.url} alt={equipePost.mainImage.alt} className='h-96 ' />} 
</div>

</div>


<div className='bg-white  text-gray-80000 ml-10 mt-10 text-2xl pb-10 '>
<PortableText  value ={equipePost.body}/>
</div>
</div>

<div className='bg-black text-white pl-10'>
<p className='  pb-5 pt-20 text-2xl  '>{equipePost.seasonStats} </p>

<div className='grid grid-row w-80'>
  <div className='grid grid-rows-1 '>
<h1 className='text-gray-500   text-2xl font-semibold'>Goals</h1>
<p className='text-5xl font pt-2 pb-4 '>{equipePost.goals} </p>
  </div>

  <div className='grid grid-rows-1 '>
  <h1 className='text-gray-500   text-2xl font-semibold' >Assists</h1>
  <p className=' text-5xl font  pt-2 pb-4'>{equipePost.assist} </p>

  </div>


  <div className='grid grid-rows-1 '>
<h1 className='text-gray-500  text-2xl font-semibold '>Appearances</h1>
<p className='text-5xl font pt-2 pb-4  '>{equipePost. appearances} </p>
  </div>

  <div className='grid grid-rows-1'>
  <h1 className='text-gray-500   text-2xl font-semibold ' >Minutes Played</h1>
  <p className=' text-5xl font  pt-2 pb-4 '>{equipePost. minutesplayed} </p>

  </div>
</div>
<div className='grid grid-row   w-80 pt-20'>
 

 

</div>


</div>
<div className='grid grid-cols-1 lg:grid-cols-5 pt-10 bg-gray-200 text-gray-500 gap-6 pl-10 pb-10'>
  <div className='grid grid-rows-1'>
    <h1 className=''>Contry Of Brith</h1>

  <p className=' text-black text-sm'>{equipePost.contryofBirth} </p>
  </div>

  <div className='grid grid-rows-1'>
    <p className=''>Date Of Brith</p>

  <p className=' text-black text-sm'>{equipePost.dateofBrith} </p>
  </div>

  <div className='grid grid-rows-1'>
    <p className=''>Height</p>

  <p className=' text-black text-sm'>{equipePost.height} </p>
  </div>
  <div className='grid grid-rows-1'>
    <p className=''>Date Of Debut</p>

  <p className=' text-black text-sm'>{equipePost.dateofDebut} </p>
  </div>
  <div className='grid grid-rows-1'>
    <p className=''>Weight</p>

  <p className=' text-black text-sm'>{equipePost.weight} </p>
  </div>
</div>

<div className='bg-white   text-gray-900 '>
<div className='pl-10 pt-10   pr-10 text-2xl pb-10 '>
<PortableText  value ={equipePost.secondbody}/>
</div>
</div>




     <div className='max-w-7xl mx-auto px-5 mb-20 flex items-center justify-end'>
     <Link to="/equipe">
      <button className="  bg-white  ml-5 mt-20 mb-10 py-2 px-8 mr-5 rounded shadow text-slate-800 tracking-wide hover:opacity-75 transition-all duration-200 ">Retour</button>
      </Link>
     </div>
   
     </section>
     
     
     }
     </>
}

export default EquipePost