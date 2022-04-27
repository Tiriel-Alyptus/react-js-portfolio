import './App.css';
import './index.js'
import Fade from "react-reveal/Fade";
import { Parallax } from 'react-parallax';
import Header from './components/section/Header/Header.js'
import Body from './components/section/body/Body.js'
import Footer from './components/section/footer/Footer'

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