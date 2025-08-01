
import { IoMdClose } from "react-icons/io";
import { CiMenuFries } from "react-icons/ci";
import {NAVIGATION_LINKS} from '../constants/index'
import { useState } from 'react'

const Navbar = () => {
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

   function toggleMobileMenu() {
      setIsMobileMenuOpen(!isMobileMenuOpen)
   }

   function handleLinkClick(e, href) {
      e.preventDefault()
      const targetElement = document.querySelector(href)
      if (targetElement) {
         const offset = -85;
         const elementPosition = targetElement.getBoundingClientRect().top;
         const offsetPosition = elementPosition + window.scrollY + offset;

         window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
         })
      };

      setIsMobileMenuOpen(false)
   }
   return (
      <div>
         <nav className="fixed left-0 right-0 z-50 lg:top-4">
            {/* Desktop Meny */}
            <div className="mx-auto hidden max-w-[610px] items-center justify-center rounded-full border border-white/50 py-2  backdrop-blur-lg lg:flex">

               <div className="flex items-center justify-between gap-7">
                  <div>
                     <a href="/">
                        <span className='uppercase font-extrabold text-lg'>Ahsan Gulzar</span>
                     </a>
                  </div>
                  <div>
                     <ul className="flex items-center gap-5">
                        {
                           NAVIGATION_LINKS.map((item, index) => (
                              <li key={index}>
                                 <a
                                    href={item.href}
                                    className="text-lg hover:text-stone-300"
                                    onClick={(e) => handleLinkClick(e, item.href)}
                                 >
                                    {item.label}
                                 </a>
                              </li>
                           ))
                        }
                     </ul>
                  </div>
               </div>

            </div>

            {/* Mobile Menu */}
            <div className="py-2 backdrop-blur-md lg:hidden">
               <div className="flex items-center justify-between">

                  <div>
                     <a href="#">
                        <span className="pl-2 uppercase">Ahsan Gulzar</span>
                     </a>
                  </div>
                  <div className="flex items-center">
                     <button
                        className="focus:outline-none lg:hidden"
                        onClick={toggleMobileMenu}
                        aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
                     >
                        {
                           isMobileMenuOpen ? (
                              
                              <IoMdClose className='size-8 m-2 font-bold'/>
                           ) : (
                              <CiMenuFries className='size-8 text-white m-2 font-extrabold'/>
                           )
                        }
                     </button>
                  </div>

               </div>

               {
                  isMobileMenuOpen && (
                     <ul className="my-4 ml-4 flex flex-col gap-6 backdrop-blur-md">
                        {
                           NAVIGATION_LINKS.map((item, index) => (
                              <li key={index}>
                                 <a href={item.href} className='block w-full text-lg' onClick={(e) => handleLinkClick(e, item.href)}>
                                    {item.label}
                                 </a>
                              </li>
                           ))
                        }
                     </ul>
                  )
               }
            </div>
         </nav>
      </div>
   )
}

export default Navbar
