import React, {useState} from 'react'
import { BookOpen, Menu, X } from 'lucide-react';

import { Link } from 'react-router-dom'
const Navbar = () => {
      const [isMenuOpen, setIsMenuOpen] = useState(false);
    
  return (
    //   <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
    //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //       <div className="flex justify-between items-center py-4">
    //         <div className="flex items-center space-x-2">
    //           <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
    //             <BookOpen className="w-5 h-5 text-white" />
    //           </div>
    //           <span className="text-2xl font-bold text-white">LearnFlow</span>
    //         </div>

    //         <div className="hidden md:flex space-x-8">
    //           <Link
    //             to="/"
    //             className="text-white/80 hover:text-white transition-colors duration-300 hover:scale-105 transform"
    //           >
    //             Home
    //           </Link>
    //           <Link
    //             to="/about"
    //             className="text-white/80 hover:text-white transition-colors duration-300 hover:scale-105 transform"
    //           >
    //             About
    //           </Link>
    //         </div>

    //         {/* Only "Get Started" button */}
    //         <div className="hidden md:flex items-center space-x-4">
    //           <Link to="/dashboard">
    //             <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105">
    //               Get Started
    //             </button>
    //           </Link>
    //         </div>
    //       </div>
    //     </div>
    //   </nav>
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">LearnFlow</span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <Link to='/about' className="text-white/80 hover:text-white transition-colors duration-300 hover:scale-105 transform">About</Link>

            </div>

            <div className="hidden md:flex items-center space-x-4">
              <Link to='signin'>
              <button className="text-white/80 hover:text-white transition-colors">
                Sign In
              </button>
              </Link>
              <Link to='/dashboard
              '>
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105">
                Get Started
              </button>
              </Link>
            </div>

            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-lg border-t border-white/10">
            <div className="px-4 py-6 space-y-4">
              <Link >

              </Link>
              <div className="flex flex-col space-y-2 pt-4">
                <button className="text-white/80 hover:text-white transition-colors text-left">
                  Sign In
                </button>
                <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full w-fit">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
  )
}

export default Navbar
