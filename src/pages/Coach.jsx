import React, { useEffect, useState } from "react";
import { client } from "../lib/client";
import { format } from "date-fns";
import { motion } from "framer-motion";
import { SlideUp } from "../utility/animation";
import { Link } from "react-router-dom";
import Tpmtogethere from "../components/images/Equipeteam.jpg";

const Coach = () => {
  const [coachs, setCoachs] = useState([]);
  useEffect(() => {
    client
      .fetch(
        `*[_type == "coach"]{
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
      )
      .then((data) => {
        setCoachs(data);
      })
      .catch(console.error);
  }, []);

  return (
    <>
      <div className="flex justify-center bg-white text-black">
          <h1 className="font text-6xl pb-2">Coaching staff  </h1>
        </div>
      <div className=" flex justify-center">
      
        <img src="" className=" object-cover  " alt="" />
      </div>
      <section className=" grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto px-5   bg-black pt-20  ">
        {coachs.map((coach) => (
          <Link to={`${coach.slug.current}`} key={coach.slug.current}>
            <article className=" ">
              <div>
                <div class="group relative cursor-pointer  overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                  <div class="h-80 flex justify-center">
                    {coach.mainImage && (
                      <img
                        src={coach.mainImage.asset.url}
                        alt={coach.mainImage.alt}
                        loading="lazy"
                        className="hover:transition w-50  delay-150 duration-300"
                      />
                    )}
                  </div>
                  <div class="absolute inset-0 bg-gradient-to-b via-transparent to-gray-900 group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                  <div class="absolute  mb-2 inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                    <p className="text-2xl   ">{coach.firstname}</p>

                    <p className="text-2xl ">{coach.lastname}</p>
                    {coach.drapo && (
                      <img
                        src={coach.drapo.asset.url}
                        alt={coach.drapo.alt}
                        loading="lazy"
                        className="w-10 h-8  pt-1"
                      />
                    )}
                    <p class="mb-3 text-lg italic text-black opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                     
                    </p>
                  
                  </div>
                </div>
              </div>

    
            </article>
          </Link>
        ))}
      </section>
    </>
  );
};

export default Coach;
