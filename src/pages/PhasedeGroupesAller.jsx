import React, { useEffect, useState } from "react";
import { client } from "../lib/client";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import { GiSoccerField } from "react-icons/gi";
const PhasedeGroupesAller = () => {
  const [toutmatchs, setToutmatchs] = useState([]);
  useEffect(() => {
    client
      .fetch(
        `*[_type =="phasedegroupealler"]{
            symbol,
            phasedegroupesAller,
            firsteam,
            slug,
            jours,
            firsteamscore,
            secondTeamscore,
            secondteam,
            
            body,
            publishedAt,
         
          
           
            "name":author ->name,

            } | order(publishedAt desc)`
      )
      .then((data) => {
        setToutmatchs(data);
        console.log(data);
      })
      .catch(console.error);
  }, []);

  return (
    <>
      <div className=" font-serif">

      
        <h1 className="bg-black text-4xl text-white pt-4  text-center pb-2">
          <span className="font ">Matches du TP Mazembe</span>
        </h1>
        <h1 className="   pt-10 text-center text-3xl bg-yellow-600 pb-2 text-black">
        Phase de Groupes-Aller
            </h1>

        <section className="bg-white">
          {toutmatchs.map((Tmatches) => (
           <div className="text-black w-full">
            
          
            <div className="flex justify-center">


<div className=" mt-10 mb-2 ">
<div className="flex justify-around gap-10 ">
<p>{format(new Date(Tmatches.publishedAt)," hh:mm / dd MMMM yyyy")}</p>

<p> {Tmatches.firsteam.current}</p>
<div className="flex ">
<p> {Tmatches.firsteamscore.current}</p>
<p>  {Tmatches.symbol.current}</p>
<p> {Tmatches.secondTeamscore.current}</p>


</div>

<p className="pb-2"> {Tmatches.secondteam.current}</p>


</div>
<hr/>

</div>


 

            </div>


                   
           </div>
          ))}
        </section>
      </div>
    </>
  );
};

export default PhasedeGroupesAller ;