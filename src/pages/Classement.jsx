import React, { useEffect, useState } from "react";
import { client } from "../lib/client";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import { GiSoccerField } from "react-icons/gi";
const Classement = () => {
  const [classement, setClassement] = useState([]);
  useEffect(() => {
    client
      .fetch(
        `*[_type =="classement"]{
            name,
          position,
          ville,
          mj,
          mg,
          mn,
          mp,
          bp,
          bc,
          ga,
          
            slug,
            jour,
            points,
            diff,
               mainImage{
          asset -> {
          _id,
          url
          },
          alt,
          }
            ,
            publishedAt,
            
            body,
            
         
          
           
            "name":author ->name,

            } | order(publishedAt desc)`
      )
      .then((data) => {
        setClassement(data);
        console.log(data);
      })
      .catch(console.error);
  }, []);

  return (
    <>
 <div className="bg-white font-serif  text-sm ">
 <div className=" bg-white w-full text-black">
      <h1 className="bg-white text-4xl text-black pt-4  text-center pb-2">
          <span className="font uppercase  ">Classement</span>
        </h1>

       
      </div>

  <div className="flex justify-center  pt-10 pb-10">
  <div className="flex ">
       <div className="hidden lg:grid grid-row ">


       <section className="bg-white text-black">
          {classement.map((Class) => (
        <div>
              <div className="flex gap-16 p-6 ">
         
         <div className="grid grid-cols-1">
         <p className="text-yellow-600 pb-4">Position</p>
         <p className="text-black text-center"> {Class.position}</p>

         </div>
         <div className="grid grid-cols-1">
         <p className="text-yellow-600 pb-4">Equipe</p>
         <img
                         src={Class.mainImage.asset.url}
                         alt={Class.mainImage.alt}
                         loading="lazy"
                         className=" rounded-full w-12 "
                       />

         </div>
         <div className="grid grid-cols-1">
         <p className="text-yellow-600 pb-4">Ville</p>
         <p className="text-black text-center"> {Class.ville}</p>

         </div>
         <div className="grid grid-cols-1">
         <p className="text-yellow-600 pb-4">Mj</p>
         <p className="text-black text-center"> {Class.mj}</p>

         </div>
         <div className="grid grid-cols-1">
         <p className="text-yellow-600 pb-4">MG</p>
         <p className="text-black text-center"> {Class.mg}</p>

         </div>
         <div className="grid grid-cols-1">
         <p className="text-yellow-600 pb-4">MN</p>
         <p className="text-black text-center"> {Class.mn}</p>

         </div>
         <div className="grid grid-cols-1">
         <p className="text-yellow-600 pb-4">MP</p>
         <p className="text-black text-center"> {Class.mp}</p>

         </div>
         <div className="grid grid-cols-1">
         <p className="text-yellow-600 pb-4">BP</p>
         <p className="text-black text-center"> {Class.bp}</p>

         </div>
         <div className="grid grid-cols-1">
         <p className="text-yellow-600 pb-4">BC</p>
         <p className="text-black text-center"> {Class.bc}</p>

         </div>
         <div className="grid grid-cols-1">
         <p className="text-yellow-600 pb-4">GA</p>
         <p className="text-black text-center"> {Class.ga}</p>

         </div>
   
         <div className="grid grid-cols-1">
         <p className="text-yellow-600 pb-4">PTS</p>
         <p className="text-black text-center"> {Class.points}</p>

         </div>
        
        
       


         <hr className="text-black"/>
         </div>
            <hr/>
        </div>
          ))}
        </section>
       
       
         
       </div>
      
        </div>
    

  </div>


 </div>

    </>
  );
};

export default Classement ;