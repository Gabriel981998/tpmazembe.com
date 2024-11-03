import React, { useState, useEffect } from "react";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";


import { client } from "../lib/client";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Matchs from "./Matchs";

import { motion } from "framer-motion";
import { SlideUp } from "../utility/animation";
import Hero3 from "../components/Hero3";
import Trust from "../components/Trust";
import Stade from "../components/Stade";
import Carousel from "react-bootstrap/Carousel";
import Timer from "./Timer";
import Comment from "./Comment";
import NextMatch from "./NextMatch";
import LatestCollection from "../components/LatestCollection";


import ReactPlayer from 'react-player'



const Homepage = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"]{
            title,
            url,
            bannervideo,
            slugtwo,
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
      )
      .then((data) => {
        setStories(data.slice(0, 3));
        console.log(data);
      })
      .catch(console.error);
  }, []);

  return (
    <div className=" relative ">
      <div className="inset-2 ">
        <div class="sticky top-0  ">
          {!stories ? (
            <h2>Loading...</h2>
          ) : (
            <>
              {stories[0] && (
           
                  <section className="w-full    ">
                    <article className=" ">
                
                 
                      <article>
                        <div className="">
                          <Carousel>
                            <Carousel.Item>
                            
                              {stories[0].mainImage && (
                                <img
                                  src={stories[0].mainImage.asset.url}
                                  alt={stories[0].mainImage.alt}
                                  className=" h-svh w-full  object-cover   "
                                />
                              )}
                                  
                              <div className="bg-black/30 absolute top-0 left-0 w-full h-lvh" />
                              <Carousel.Caption className="top-1">

                             
          <p className=" mt-96 text-3xl text-white text-center">{stories[0].title}</p>
     
        </Carousel.Caption>
                         
                            </Carousel.Item>

                            <Carousel.Item>
                            {stories[1].mainImage && (
                                <img
                                  src={stories[1].mainImage.asset.url}
                                  alt={stories[1].mainImage.alt}
                                  className=" h-svh w-full  object-cover   "
                                />
                              )}
      
                              <div className="bg-black/30 absolute top-0 left-0 w-full h-lvh" />
                           

                            </Carousel.Item>

                            <Carousel.Item>
                            {stories[2].mainImage && (
                                <img
                                  src={stories[2].mainImage.asset.url}
                                  alt={stories[2].mainImage.alt}
                                  className=" h-svh w-full  object-cover   "
                                />
                              )}
                              <div className="bg-black/30 absolute top-0 left-0 w-full h-lvh" />
                         
                            </Carousel.Item>
                          </Carousel>
                        </div>
                      </article>
                     
                    </article>
                  </section>
             
              )}
            </>
          )}
      
        </div>


      

        <div class="sticky top-1 ">

         
     <div className="flex justify-between bg-black">
     <h1 className="bg-transparent pt-4 pl-6">
          <h1 className="font text-white text-3xl pb-3 ">News</h1>
         
        </h1>
        <div className="bg-transparent  pr-6  "> 

<Link to="/blog">
              <button className=" text-white   mt-6 font  ">
                Voir plus
              </button>
            </Link>
</div>



     </div>
       
     
         
     
          <section className=" grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3   bg-black pb-20">
         
            {stories.map((story) => (
              
              <Link to={`/blog/${story.slug.current}`} key={story.slug.current}>
                
            
                <article className=" mt-2">
                  <div>
                  <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div class="">
      {story.mainImage && (
        


<img
  src={story.mainImage.asset.url}
  alt={story.mainImage.alt}
  loading="lazy"
  className="w-full    transition ease-in-out delay-100   hover:-translate-y-1 hover:scale-90 duration-150 ..."
/>
)}
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 class="font-dmserif text-1xl font-bold text-white pb-2"> {format(new Date(story.publishedAt), "dd MMMM yyyy")}</h1>

       

        {
                      <p className="leading-relaxed font-sans  text-white font ">
                        {`${story.body[0].children[0].text.substring(
                          0,
                          20
                        )}...`}
                      </p>
                    }
        <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lositur adipisiccilis dolore adipisci placeat.</p>
        <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60  border ">Voir plus</button>
      </div>
    </div>


                  </div>
                
           
                </article>



                





                
              </Link>
            ))}


           
          </section>
          <Matchs />
          <NextMatch/>
          
        
          <Comment/>
          
    
        
      

       
       
        </div>

        


       






       
      </div>
      <div class=" ">
       
      
       
     
  
     
      
  
      

       

    
    

       <div className="bg-black text-white">
       
       
         
<LatestCollection/>
<Hero3 />

         <Trust />
     

        
       </div>
     </div>
      









 



    </div>
  );
};

export default Homepage;