import logo from '../../../logo.svg';
import './Body.css';
import '../../../index.js'
import Fade from "react-reveal/Fade";
import { Parallax } from 'react-parallax';
import React from 'react';

const Body = () => {
    return (
      <Fade duration={2000}>
<body>
          <div classeName="body" class="container mx-auto px-6 md:px-12 relative z-10 flex items-center">
            <div class="lg:w-3/5 xl:w-2/5 flex flex-col items-start relative z-10">
              <h2 class="font-bold text-6xl sm:text-7xl text-black leading-tight mt-4">
                <Fade bottom duration={2000}>
                  <span class="block">La plupart de mes projets</span>
                </Fade>
              </h2>
              
              <p class="text-md mt-8 text-gray-400">
              <Fade bottom duration={2000}>
                Je commence souvent de nouvelles choses mais la plupart qui se concrétise se trouve sur GITHUB
              </Fade>
              </p>
              
              <div class="lg:mt-0 lg:flex-shrink-0">
                <div class="mt-12 inline-flex rounded-md shadow">
                  <button type="button" class="bg-coline-state py-2 px-4 hover:text-black focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg ">Découvrir</button>
                </div>
              </div>
            </div>
            <div class="flex items-center gap-8 p-8 lg:p-6">
              <img src="https://www.tailwind-kit.com/images/landscape/3.jpg" class="rounded-lg w-1/2" alt="Tree"/>
            
              <div>
                <img src="https://www.tailwind-kit.com/images/landscape/3.jpg" class="rounded-lg mb-8" alt="Tree"/>
                <img src="https://www.tailwind-kit.com/images/landscape/3.jpg" class="rounded-lg" alt="Tree"/>
              </div>
            </div>
          </div>
          <div class="py-12 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div class="lg:text-center">
                <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">Compétences</h2>
                <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  <Fade bottom duration={2000}>
                  Une meilleur façon d'en apprendre un peu plus
                  </Fade>
                </p>
                <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                <Fade bottom duration={2000}>
                  Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.
                </Fade>
                </p>
              </div>
              <div class="mt-10">
                <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                  <div class="relative">
                    <dt>
                      <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                      </div>
                      <p class="ml-16 text-lg leading-6 font-medium text-gray-900">
                      <Fade left duration={2000}>
                        Examples 1
                      </Fade>
                      </p>
                    </dt>
                    <dd class="mt-2 ml-16 text-base text-gray-500">
                    <Fade left duration={3000}>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                    </Fade>
                    </dd>
                  </div>
                  <div class="relative">
                    <dt>
                      <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                        </svg>
                      </div>
                      <p class="ml-16 text-lg leading-6 font-medium text-gray-900">
                      <Fade right duration={2000}>
                        Examples 2
                      </Fade>
                      </p>
                    </dt>
                    <dd class="mt-2 ml-16 text-base text-gray-500">
                    <Fade right duration={3000}>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                    </Fade>
                    </dd>
                  </div>
                  <div class="relative">
                    <dt>
                      <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <p class="ml-16 text-lg leading-6 font-medium text-gray-900">
                      <Fade left duration={3500}>
                        Examples 3
                      </Fade>
                      </p>
                    </dt>
                    <dd class="mt-2 ml-16 text-base text-gray-500">
                    <Fade left duration={4000}>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                    </Fade>
                    </dd>
                  </div>
                  <div class="relative">
                    <dt>
                      <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                        </svg>
                      </div>
                      <p class="ml-16 text-lg leading-6 font-medium text-gray-900">
                      <Fade right duration={3500}>
                        Examples 4
                      </Fade>
                      </p>
                    </dt>
                    <dd class="mt-2 ml-16 text-base text-gray-500">
                     <Fade right duration={4500}>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                     </Fade>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
          <div class="max-w-screen-xl p-4 bg-white dark:bg-white mx-auto px-4 sm:px-6 lg:px-8 relative py-26 lg:mt-20">
            <div class="relative">
              <div class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
                <div class="lg:col-start-2 lg:max-w-2xl ml-auto">
                  <p class="text-base leading-6 text-indigo-500 font-semibold uppercase">
                  <Fade duration={2000}>
                    Quelques perspectives
                    </Fade>
                  </p>
                  <h4 class="mt-2 text-2xl leading-8 font-extrabold text-gray-900 dark:text-black sm:text-3xl sm:leading-9">En constante évolution</h4>
                  <p class="mt-4 text-lg leading-6 text-black dark:text-gray-500">
                  <Fade duration={2000}>
                    Je ne me contente pas de ce que j'ai acquis, je pousse plus loin, et cherche des solutions novatrices.
                    </Fade>
                  </p>
                  <ul class="mt-8 md:grid md:grid-cols-2 gap-6">
                    <li class="mt-6 lg:mt-0">
                      <div class="flex">
                        <span class="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 dark:text-green-500 drark:bg-transparent">
                          <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                          </svg>
                        </span>
                        <span class="ml-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-500"><Fade duration={2000}>Novateur</Fade></span>
                      </div>
                    </li>
                    <li class="mt-6 lg:mt-0">
                      <div class="flex">
                        <span class="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 dark:text-green-500 drark:bg-transparent">
                          <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                          </svg>
                        </span>
                        <span class="ml-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-500"><Fade duration={2000}>Intégration / Gestion en équipe</Fade></span>
                      </div>
                    </li>
                    <li class="mt-6 lg:mt-0">
                      <div class="flex">
                        <span class="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 dark:text-green-500 drark:bg-transparent">
                          <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                          </svg>
                        </span>
                        <span class="ml-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-500"><Fade duration={2000}>Tête pensante</Fade></span>
                      </div>
                    </li>
                    <li class="mt-6 lg:mt-0">
                      <div class="flex">
                        <span class="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 dark:text-green-500 drark:bg-transparent">
                          <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                          </svg>
                        </span>
                        <span class="ml-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-500"><Fade duration={2000}>Perfectionniste</Fade></span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="mt-10 lg:-mx-4 relative relative-20 lg:mt-0 lg:col-start-1">
                  <div class="relative space-y-4">
                    <div class="flex items-end justify-center lg:justify-start space-x-4">
                      <img class="rounded-lg shadow-lg w-32 md:w-56" width="200" src="  https://www.tailwind-kit.com/images/object/8.jpg" alt="1"/>
                      <img class="rounded-lg shadow-lg w-40 md:w-64" width="260" src="  https://www.tailwind-kit.com/images/landscape/4.jpg" alt="2"/>
                    </div>
                    <div class="flex items-start justify-center lg:justify-start space-x-4 ml-12">
                      <img class="rounded-lg shadow-lg w-24 md:w-40" width="170" src="https://www.tailwind-kit.com/images/landscape/3.jpg" alt="3"/>
                      <img class="rounded-lg shadow-lg w-32 md:w-56" width="200" src="https://www.tailwind-kit.com/images/object/9.jpg" alt="4"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </body>
        </Fade>
    );
};
export default Body;