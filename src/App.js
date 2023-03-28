import './App.css';
import {GiHamburgerMenu} from "react-icons/gi";

function App() {
  return (
    <>
      <div className="blocks" >
        <div className="block init" data-block-section="1" data-href="home" >
          <div className="menuIcon"><GiHamburgerMenu/> </div>
          <div className="block__title_home">CTS_Command_Centre </div>
        </div>
        <div className="block init" data-block-section="2" data-href="telemetry" >
          <div className="block__title" >Telemetry</div>
          <div className="block__number">1</div>
        </div>
        <div className="block init" data-block-section="3" data-href="images">
          <div className="block__title">Images</div>
          <div className="block__number">2</div>
        </div>
        <div className="block init" data-block-section="4" data-href="commands">
          <div className="block__title">Commands</div>
          <div className="block__number">3</div>
        </div>
        <div className="block init" data-block-section="5" data-href="contact">
          <div className="block__title">Contact us</div>
          <div className="block__number">4</div>
        </div>
      </div>
      
    </>
   
  );
}

export default App;
