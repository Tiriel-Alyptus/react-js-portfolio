import logo from '../../../logo.svg';
import './Header.css';
import '../../../index.js'
import Fade from "react-reveal/Fade";
import { Parallax } from 'react-parallax';
import { ParallaxBanner } from 'react-scroll-parallax';
import React from 'react';


const Header = () => {
    return (
      <Parallax strength={200} bgImage="https://wallpapercave.com/wp/wp6289812.jpg"renderLayer={percentage =>
      (
     <div style={{speed: -15, position: 'absolute',background: `rgba(0, 0, 0, ${percentage * 100})`,height: percentage * 1,strength: percentage * 100}}/>
     )}>
       
<div class="flex">
        <header>
            <div class="rounded-b-lg overflow-hidden h-screen">
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
                  <span class="font-bold uppercase text-yellow-400"><Fade bottom duration={2000}>그림자에 오신 것을 환영합니다 !</Fade></span>
                  <h1 class="flux font-bold text-6xl sm:text-7xl leading-tight mt-4"><Fade bottom duration={2000}>Emportez vous dans <div class="neon">mon portfolio</div></Fade></h1>
                </div>
              </div>
            </div>
          
        </header>
        </div>
        </Parallax>
    );
};
export default Header;