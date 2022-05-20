import './App.css';
import './index.js'
import Fade from "react-reveal/Fade";
import { Parallax } from 'react-parallax';
import Header from './components/section/Header/Header'
import Body from './components/section/body/Body'
import Footer from './components/section/footer/Footer'
import { ParallaxProvider } from "react-scroll-parallax";

import {
  MouseParallaxChild,
  MouseParallaxContainer
} from "react-parallax-mouse";
import ReactDOM from "react-dom";

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Body/>
      <Footer/>
      </div>
   );
 };
export default App;