import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'
export default function Header()
{   const [navtool,Setnavtool]=useState(false);
   return <header className="flex justify-between bg-about px-5 py-3">
        <a href="#" className="font-bold text-white">JIFFYTECH</a>
        <nav className="hidden md:block">
        <ul className="flex text-white">
            <li className=' hover:text-black'><a href="/">Home</a></li>
            <li className=' hover:text-black'><a href="#about">About</a></li>
            <li className=' hover:text-black'><a href="#projects">Projects</a></li>
            <li className=' hover:text-black'><a href="#contact">Contact</a></li>
        </ul>
        </nav>
         {navtool && <nav className="block md:hidden ">
        <ul onClick={()=>Setnavtool(!navtool)} className="flex flex-col text-white mobile-nav">
            <li><a href="/">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        </nav>}
        <button onClick={()=>Setnavtool(!navtool)} className=' block md:hidden'><Bars3Icon className='text-white h-5'/></button>
    </header>
   
}