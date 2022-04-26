import logo from './logo.svg';
import './components/Section/App.css';
import './index.js'
import header from "./components/Section/footer/footer";
import body from "./components/Section/body/body";
import footer from "./components/Section/footer/footer";
import Fade from "react-reveal/Fade";
import { Parallax } from 'react-parallax';
 
function App() {
    return (
     <div className="App">
        <header header/>
        <body body/>
        <footer footer/>
    </div>
    );
  }
  
  export default App;