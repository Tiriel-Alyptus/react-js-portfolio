import logo from '../../../logo.svg';
import './Header.css';
import '../../../index.js'
import Fade from "react-reveal/Fade";
import { Parallax } from 'react-parallax';
import React from 'react';

const Header = () => {
    return (
<div class="">
        <header>
          <nav class="fixed bg-transparent  w-full px-5 py-2 flex justify-between items-center">
            <div class="lg:order-2 w-auto lg:w-1/5 lg:text-center"></div>
            <div class="block lg:hidden">
              <button class="navbar-burger flex items-center py-2 px-3 text-indigo-500 rounded border border-indigo-500">
                <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <title>Menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
              </button>
            </div>
            <div class="navbar-menu hidden lg:order-1 lg:block w-full lg:w-2/5">
              <a class="font-bold block lg:inline-block mt-4 lg:mt-0 mr-10 text-black hover:text-indigo-600" href="#">Home</a>
              <a class="font-bold block lg:inline-block mt-4 lg:mt-0 mr-10 text-black hover:text-indigo-600" href="#">Team</a>
              <a class="font-bold block lg:inline-block mt-4 lg:mt-0 text-black hover:text-indigo-600" href="#">Galery</a>
            </div>
            <div class="navbar-menu hidden lg:order-3 lg:block w-full lg:w-2/5 lg:text-right">
              <a class="font-bold block lg:inline-block mt-4 lg:mt-0 mr-10 text-black hover:text-indigo-600" href="#">Content</a>
              <a class="font-bold block lg:inline-block mt-4 lg:mt-0 mr-10 text-black hover:text-indigo-600" href="#">FAQ</a>
              <a class="font-bold block lg:inline-block mt-4 lg:mt-0 text-black hover:text-indigo-600" href="#">Contact</a>
            </div>
          </nav>
          <Parallax strength={500} blur={{ min: -5, max: 5 }}bgImage="https://wallpapercave.com/wp/wp6289812.jpg"renderLayer={percentage =>
             (
            <div style={{position: 'static',background: `rgba(255, 255, 255, ${percentage * 1})`,height: percentage * 20,strength: percentage * 200,}}/>
            )}> 
            <div class="rounded-b-lg relative overflow-hidden h-screen">
              <header class="absolute top-0 left-0 right-0 z-20">
                <nav class="container mx-auto px-6 md:px-12 py-4">
                  <div class="md:flex justify-between items-center">
                    <div class="flex justify-between items-center">
                      <a href="#" class="text-white"></a>
                      <div class="md:hidden">
                        <button class="text-white focus:outline-none">
                          <svg class="h-12 w-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </nav>
              </header>
              <div class="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
                <div class="lg:w-3/5 xl:w-2/5 flex flex-col items-start relative z-10">
                  <span class="font-bold uppercase text-yellow-400"><Fade bottom duration={2000}>Alpinastra THEM</Fade></span>
                  <h1 class="font-bold text-6xl sm:text-7xl text-white leading-tight mt-4"><Fade bottom duration={2000}>Emportez vous dans mon portfolio</Fade></h1>
                  <a href="body" class="block bg-white hover:bg-gray-100 py-3 px-4 rounded-lg text-lg text-gray-800 font-bold uppercase mt-10"><Fade bottom duration={2000}>Découvrir</Fade></a>
                </div>
              </div>
            </div>
          </Parallax>
        </header>
        </div>
    );
};
export default Header;