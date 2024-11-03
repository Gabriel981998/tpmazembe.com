import React from 'react'
import {motion} from "framer-motion"

const Newest = () => {
  return (
    <div className='mt-4  w-full bg-black text-white lg:py-6'>
      <div className='flex overflow-hidden whitespace-nowrap'>
        {
          [...Array(2)].map((_,i)=>(
            <motion.h1 initial={{x:"0"}}
            animate={{x:"-100%"}} transition={{repeat:Infinity,ease:"linear",duration:10}} key={i} className='py-2 text-6xl font-bold leading-none tracking-tighter lg:text-8xl'>
              <h1> IMPOSSIBLE N'EST PAS  MAZEMBE</h1>
            </motion.h1>
          ))
        }

      </div>

      
    </div>
  )
}

export default Newest
