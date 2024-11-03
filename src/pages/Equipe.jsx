import React, { useEffect, useState } from "react";
import { client } from "../lib/client";
import { format } from "date-fns";
import { motion } from "framer-motion";
import { SlideUp } from "../utility/animation";
import { Link } from "react-router-dom";
import Tpmtogethere from "../components/images/Equipeteam.jpg";

const Equipe = () => {
  const [equipes, setEquipe] = useState([]);
  useEffect(() => {
    client
      .fetch(
        `*[_type == "Equipe"]{
          title,
          seasonStats,
          goals,
           weight,
          assist,
          appearances,
          dateofBrith,
          secondbody,
          minutesplayed,
          contryofBirth,
          height,
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
      )
      .then((data) => {
        setEquipe(data);
      })
      .catch(console.error);
  }, []);

  return (
    <>
    
      <div className=" ">
      
       
      </div>
      <div className="croco ">
      <h1 className="text-white pt-10 pb-10 font ml-10 text-6xl text-center">Effectif</h1>
      <h1 className="text-white  font   bg-gradient-to-t from-black to-transparent text-center p-10 "><p className="text-transparent">Effectif</p></h1>
      </div>
      

      <section className=" grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto px-5   bg-black pt-20 ">
        {equipes.map((equipe) => (
          <Link to={`${equipe.slug.current}`} key={equipe.slug.current}>
            <article className=" bg-white ">
              <div className="">
                <div class="group relative cursor-pointer  overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                  <div class="h-full w-full flex justify-center">
                    {equipe.mainImage && (
                      <img
                        src={equipe.mainImage.asset.url}
                        alt={equipe.mainImage.alt}
                        loading="lazy"
                        className="hover:transition w-50  delay-150 duration-300"
                      />
                    )}
                  </div>
                  <div class=" absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                  <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                    <p className="text-2xl  ">{equipe.firstname}</p>

                    <p className="text-2xl pb-4">{equipe.lastname}</p>
                    {equipe.drapo && (
                      <img
                        src={equipe.drapo.asset.url}
                        alt={equipe.drapo.alt}
                        loading="lazy"
                        className="w-10 h-6  "
                      />
                    )}
                    <p class="mb-3 text-lg italic text-black opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                     
                    </p>
                    <p className="pb-10  font-serif text-5xl hover:text-white">
                      {equipe.number}
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

export default Equipe;
