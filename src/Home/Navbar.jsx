import React, { useState } from 'react'
import { FiTwitter } from 'react-icons/fi';
import { BiSearch } from 'react-icons/bi';
import { AiFillStar } from 'react-icons/ai';
const Navbar = () => {

  return (
<div className="grid grid-cols-1 md:grid-cols-4 my-5 justify-center drop-shadow-2xl">
      <div className="mx-auto md:mx-0">
        
      </div>

      <div className="col-span-2 md:border-x-2 md:border-slate-200 md:px-6 my-6 md:my-0">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-2xl font-mono">
            
            SOCIO_PEDIA
          </h2>
          <AiFillStar />
        </div>
      </div>

      <div className="px-0 md:px-6 mx-auto">
  
      </div>
    </div>
  )
}

export default Navbar