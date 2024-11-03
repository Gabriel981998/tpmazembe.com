import React, { useEffect, useState } from "react";
import { client } from "../lib/client";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import ReactPlayer from 'react-player/youtube'

const Youtube = () => {
  const [youtubes, setYoutube] = useState([]);
  useEffect(() => {
    client
      .fetch(
        `*[_type == "youtube"]{
        
            urlone,
            urltwo,
            urlthree,
            urlfor,
         
            body,
            publishedAt,
         
               mainImage{
            asset -> {
            _id,
            url
            },
            alt,
            },
                   SecondImage{
            asset -> {
            _id,
            url
            },
            alt,
            },
            "name":author ->name,

            } | order(publishedAt desc)`
      )
      .then((data) => {
        setYoutube(data);
        console.log(data);
      })
      .catch(console.error);
  }, []);

  return (
    <>
      <div className=" bg-black">
     
        <h1  className="bg-white text-4xl text-black pt-4 text-center"><span className="font">ANALYSE VIDÉO</span></h1>
        <section className="   ">
          {youtubes.map((you) => (
           
              <div className=" pt-10 pb-10">

              
<div className=" flex justify-center">
<ReactPlayer   className="" url={you.urlone.current} />

</div>
                   


                        
                    

                       
                   
                  
               
              </div>
             
          ))}
        </section>
      </div>
    </>
  );
};

export default Youtube;
