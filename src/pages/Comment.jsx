import React, { useEffect, useState } from "react";
import { client } from "../lib/client";
import { format } from "date-fns";
import { Link } from "react-router-dom";

import ReactPlayer from 'react-player'


const Comment = () => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    client
      .fetch(
        `*[_type == "comment"]{
          title,
         interviewVideo,
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
        setComments(data);
      })
      .catch(console.error);
  }, []);

  const poster="https://i.ytimg.com/vi/N10QEnUBkRA/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGGMgZShbMA8=&rs=AOn4CLCAIX4dFqhA-urKWi94hhYkgNUJog"
  return (
    <>
    
    
     <div className="">
     <section className=" bg-white ">

     

{comments.map((comment) => (


  <div  className="">
    <div className="flex justify-center inset-2 z-50 ">
   
   

<div className="flex justify-center pt-10  pl-5 pr-5 w-full">

<video src={comment.interviewVideo} poster='' className=' object-cover' muted  autoPlay loop playsInline controls ></video>
</div>





 
  
 

      
    </div>
    <div className="grid grid-row-1">
    <div className="">
        <p className=" pl-6 pt-3 text-blue-500 pb-3 ">{comment.title}</p>

       
      </div>
      
          {
        <p className=" font-sans text-2xl  text-black  pl-6 ">
          {`${comment.body[0].children[0].text.substring(0, 200)}...`}
        </p>
      }
    <div className=" pb-20">
        <p className=" pl-6 pt-3 text-gray-600  "> {format(new Date(comment.publishedAt), "hh:mm  / dd MMMM yyyy")}</p>

       
      </div>
     
    </div>

    <div>


     
    </div>
    
  </div>
    
))}

</section>

     </div>
     
    
    </>
  );
};

export default Comment;
