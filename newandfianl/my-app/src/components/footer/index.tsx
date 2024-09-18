import React from 'react'
import Link from 'next/link';

function Sidebar() {
  return (
    <section className="flex    justify-center  bg-inherit  ">
      <div className="opacity-75 md:text-md text-sm md:flex block text-zinc-500 p-2 w-1/4 ml-6 pl-5">Copyright@Bhriguverma  </div>
    <Link href="mailto:vermatechnologies11@gmail.com" className="opacity-75 md:text-md text-sm text-zinc-500 p-2 w-1/4 ml-6 pl-5"> Connect for buisness </Link>
    <Link href="mailto:bhriguverma11@gmail.com" className="md:text-md opacity-75  text-sm text-zinc-500 p-2 w-1/4 ml-3">Connect for work</Link>
    <Link href="https://www.linkedin.com/in/bhrigu-verma-89090a273/"  className="opacity-75 md:text-md  text-sm text-zinc-500 p-2 w-1/4 ml-3">Connect on Linkedin </Link>
  </section>
   
  )
}

export default Sidebar