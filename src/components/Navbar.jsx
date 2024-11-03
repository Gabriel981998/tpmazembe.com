
import navimage from "./images/TP_Mazembe_Logo.svg.png"

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import NavLinks from "./NavLinks";
import DopDown from "./DopDown";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className=" bg-white
 pb-3  text-black  z-40 sticky top-0 w-full   shadow-black ">
     
     <div className="flex justify-start pl-4 lg:justify-center ">
     <img src={navimage } alt="logo" className="md:cursor-pointer h-14  mt-2  w-14" />
     </div>
    
   <DopDown/>
    </nav>
  );
};

export default Navbar;