import React, { useEffect, useState } from "react";
import { client } from "../lib/client";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import { GiSoccerField } from "react-icons/gi";
const Matchs = () => {
  const [matchs, setSmatch] = useState([]);
  useEffect(() => {
    client
      .fetch(
        `*[_type == "matchs"]{
            symbol,
            first,
            second,
            slug,
            Hscore,
            Vscore,
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
        setSmatch(data);
        console.log(data);
      })
      .catch(console.error);
  }, []);

  return (
    <>
      <div className="bg-black ">
      <h1 className="bg-transparent pt-4 pl-6">
          <h1 className="font text-white text-3xl pb-3 ">LAST MATCH</h1>
         
        </h1>
        <section className="   font-serif grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 bg-white  ">
          {matchs.map((match) => (
            <div className=" border   pt-6  ">
              <div className="flex justify-center  pb-10">
                <div className="bg-white w-80 h-80 ">
                  <p className="text-yellow-600 mb-2  pt-4 text-center">
                    {match.symbol.current}
                  </p>
                  <div className=" ">
                    <h1 className=" text-gray-600 text-center    ">
                      {match.name}
                      {format(new Date(match.publishedAt), " dd MMMM  ")}
                    </h1>
                  </div>

                  {/*image*/}
                  <div className="flex justify-center  mt-10">
                    <div className="flex justify-between">
                      <div className="">
                        <img
                          src={match.mainImage.asset.url}
                          alt={match.mainImage.alt}
                          loading="lazy"
                          className=" rounded-full w-14"
                        />
                        
                      </div>
                      {/*score1*/}
                      
                   <div className="flex justify-center text-black font-semibold ">
                   <h1 className="ml-4 text-5xl"> {match.Hscore.current}</h1>
                        <h1 className="text-3xl pl-4 pr-4" >-</h1>

                     <h1 className="mr-4 text-5xl">   {match.Vscore.current}</h1>
                   </div>
                     

                      <div className="">
                        <img
                          src={match.SecondImage.asset.url}
                          alt={match.SecondImage.alt}
                          loading="lazy"
                          className=" rounded-full w-14 h-14"
                        />
                       
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between mt-10">
                  <p className="text-black ml-14">{match.first.current}</p>
                  <p className="text-black mr-14">{match.second.current}</p>

                  </div>
           <div className="flex justify-center ">
           <Link to="/">
              <button className=" font-sans text-white bg-black  w-full mt-10 mb-10 py-2 px-24  rounded-full shadow ">
                Match center
              </button>
            </Link>
           </div>
                </div>
               
              </div>

             
            </div>
          ))}
        </section>
      </div>
    </>
  );
};

export default Matchs;