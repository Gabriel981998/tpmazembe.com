import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { client } from "../lib/client";


import { useLayoutEffect, useRef } from "react"
import { Link } from "react-router-dom";
import { format } from 'date-fns';
import {PortableText} from "@portabletext/react"
import Coach from './Coach';
const CoachPost = () => {
  const [coachPost,setCoachPost]=useState([]);
  const [coachs,setCoachs] = useState([]);

  const {slug}=useParams()


  
  useEffect(()=>{
    client.fetch(
        `*[slug.current == "${slug}"]{
        title,
          seasonStats,
       
    
          dateofBrith,
          secondbody,
    
          contryofBirth,
    
          dateofDebut,
          drapo{
          asset -> {
          _id,
          url
          },
          alt,
          },
         firstname,
         lastname,

      
          slug,
          body,
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
    ).then((data)=>{setCoachPost(data[0])
      
    }).catch(console.error);

},[slug]);
/*
useEffect(()=>{
  document.title=`Reading | ${blogpost.title}`
},[slug])*/
  return <>
{coachPost && <section>

    
<div className='text-balance text-black bg-white '> 
<div className=' grid grid-cols-1   lg:grid-cols-2'>


<div className='font text-center '>

<p className=' text-8xl pb-3 pt-20'>{coachPost.firstname} </p>
<p className='text-4xl mr-2  pb-4'>{coachPost.lastname} </p>


</div>

<div  className='flex justify-center'>
{coachPost.mainImage && <img src={coachPost.mainImage.asset.url} alt={coachPost.mainImage.alt} className='h-96 ' />} 
</div>

</div>


<div className='bg-white  text-gray-800 ml-10 mt-10 text-2xl pb-10 '>
<PortableText  value ={coachPost.body}/>
</div>
</div>

<div className='bg-gray-100 text-black pl-10'>
<p className='  pb-5 pt-20 text-2xl  '>{coachPost.seasonStats} </p>

<div className='grid grid-cols-2  w-80'>




</div>



</div>
<div className='grid grid-cols-1 lg:grid-cols-5 pt-10 bg-black  text-white gap-6 pl-10 pb-10'>
  <div className='grid grid-rows-1'>
    <p className='text-2xl'>Contry Of Brith</p>

  <p className=' '>{coachPost.contryofBirth} </p>
  </div>

  <div className='grid grid-rows-1'>
    <p className='text-2xl'>Date Of Brith</p>

  <p className=' '>{coachPost.dateofBrith} </p>
  </div>

  
  <div className='grid grid-rows-1'>
    <p className='text-2xl'>Date Of Debut</p>

  <p className=' '>{coachPost.dateofDebut} </p>
  </div>

</div>

<div className='bg-white   text-gray-900 '>
<div className='pl-10 pt-10   pr-10'>
<PortableText  value ={coachPost.secondbody}/>
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

export default CoachPost