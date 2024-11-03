import React, { useEffect, useState } from "react";
import { client } from "../lib/client";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import supporteur from "../components/images/supporteur.jpg";
import Timer from "./Timer";

const NextMatch = () => {
  const [nextmatchs, setNextmatch] = useState([]);
  useEffect(() => {
    client
      .fetch(
        `*[_type == "nextmatch"]{
            mark,
            place,
            firsteam,
            secondteam,
            slug,
            time,
            homescore,
            visitescore,
            body,
            publisheAt,
         
               mainImage1{
            asset -> {
            _id,
            url
            },
            alt,
            },
                   secondImage2{
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
        setNextmatch(data);
        console.log(data);
      })
      .catch(console.error);
  }, []);

  return (
    <>
      <section className=" w-full h-full object-cover " >
      
        <div className="font  bg-black  ">

        <h1 className=" pl-6 text-4xl text-white  uppercase pt-20 ">Prochain match</h1>
        </div>
        <div className="bg-black pb-10  font">
      <img src="https://wallpaperbat.com/img/8657700-close-up-crocodile.jpg" alt="" className="w-full   "/>
        {nextmatchs.map((nextM) => (
          <div>
                  
                  <Timer/>
            <div className="flex flex-col mt-4 ">
              <h1 className="  text-white text-2xl text-center pb-2 ">
                {format(new Date(nextM.publisheAt), "dd MMMM yyyy ")}
              
              </h1>
              <h1 className="text-center  ">{nextM.place.current} </h1>

            </div>
            

            {/* Image*/}

            <div className="flex justify-around ">
              <div>
                <div>
                  {nextM.mainImage1 && (
                    <img
                      src={nextM.mainImage1.asset.url}
                      alt={nextM.mainImage1.alt}
                      loading="lazy"
                      className=" rounded-full w-20 transition ease-in-out delay-100   hover:-translate-y-1 hover:scale-90 duration-150 ..."
                    />
                  )}
                </div>
                <div className="mr-5">
                  <h1 className="ml-5 pt-1 font-sans">{nextM.firsteam.current} </h1>
                </div>
              </div>

              <div className="flex flex-col">
              <h1 className="text-white mt-2 text-center">{nextM.time.current} </h1>
             
              </div>


              <div>
                <div>
                  {nextM.secondImage2 && (
                    <img
                      src={nextM.secondImage2.asset.url}
                      alt={nextM.secondImage2.alt}
                      loading="lazy"
                      className=" rounded-full w-20 transition ease-in-out delay-100   hover:-translate-y-1 hover:scale-90 duration-150 ..."
                    />
                  )}
                </div>
                <div className="mr-5">
                  <h1 className="ml-7 pt-1 font-sans">{nextM.secondteam.current} </h1>
                </div>
              </div>
            </div>

          
          </div>
        ))}

      </div>
   
       
      </section>
    </>
  );
};

export default NextMatch;
