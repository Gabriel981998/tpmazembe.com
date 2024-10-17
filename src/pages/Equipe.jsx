import React, { useEffect, useState } from 'react'
import { client } from "../lib/client";
import{format} from "date-fns"
import { motion } from "framer-motion";
import { SlideUp } from "../utility/animation";
import { Link } from "react-router-dom";
const Equipe = () => {



    const [equipes,setEquipe]=useState([])
    useEffect(()=>{
      client.fetch(
          `*[_type == "Equipe"]{
          title,
         firstname,
         lastname,
         number,
         position,
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
      ).then((data)=>{setEquipe(data)
      
      }).catch(console.error);

  },[])


  return (
  
    <> 
      

      <div className='bg-white'>
      <motion.h1
          variants={SlideUp(0.2)}
          initial="initial"
          whileInView="animate"
          className="py-6 text-3xl font-bold text-darkBlue pl-10"
        >
 
        </motion.h1>
      </div>
    
    
       <section className=" grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto px-5   bg-white  mb-10 " >
    
      
    {equipes.map((equipe)=>(<Link to={`${equipe.slug.current}`} key={equipe.slug.current}>
    
     <article  className=" bg-gradient-to-b from-transparent via-transparent to-black/30 group-hover:from-black/80 group-hover:via-black/60 group-hover:to-black/70 h-full">


       <div className="flex justify-between ">
        
      
      
       <div>
<div className='pb-3 text-black pt-10   pl-10 '>

<p className='pb-10 font-sans text-6xl'>{equipe.number}</p>
       <p className='font-sans'>{equipe.firstname}</p>
       <p className='font-sans text-3xl'>{equipe.lastname}</p>
       <p className='font-sans'>{equipe.position}</p>
</div>

       
       
       </div>
       
       {
equipe.mainImage && <img src={equipe.mainImage.asset.url} alt={equipe.mainImage.alt} loading="lazy" className="hover:transition w-50  delay-150 duration-300"/>
}
      
    
       </div>
     </article>
    
    </Link>  ))}
     

   </section>
   <div className='max-7xl mx-auto px-5 mb-20 flex items-end justify-end bg-black'>
   

     
   </div>
      
    </>
  )
}

export default Equipe
