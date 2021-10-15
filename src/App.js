import SJRStateLogo from "./media/sjrstatelogo.png"
import DropDownLink from "./components/DropDownLink/DropDownLink";
import './App.css';

function App() {


  let lists = [
    {header: 'STUDENTS',
  links:['Future Students', 'Current Students','Academic Advising','Academic Calender', 'Admissions APPLY NOW','Book Store', 'Career Services']},
  {header: 'ACADEMICS',
  links:['Future Students', 'Current Students','Academic Advising','Academic Calender', 'Admissions APPLY NOW','Book Store', 'Career Services']},
  {header: 'ATHLETICS',
  links:['Future Students', 'Current Students','Academic Advising','Academic Calender', 'Admissions APPLY NOW','Book Store', 'Career Services']}
  ]
  return (
    <div className="App">
      <div className="nav-bar-container">
        <div className="logo-container">
        
         <img src={SJRStateLogo}/>
        </div>
        <div className="drop-down-buttons-container">
         {lists.map((link) => <DropDownLink data={link}/>)}
        </div>

        <div className="my-sjr-button">
         <span className="sjr-button-text">My SJR State</span> 

          <div className="sjr-button-hover-1"></div>
          <div className="sjr-button-hover-2"></div>
        </div>

        <div className="my-sjr-button">
         <span className="sjr-button-text">TAKE A TOUR</span> 

          <div className="sjr-button-hover-1"></div>
          <div className="sjr-button-hover-2"></div>
        </div>

        <div className="my-sjr-button">
         <span className="sjr-button-text">APPLY NOW</span> 

          <div className="sjr-button-hover-1"></div>
          <div className="sjr-button-hover-2"></div>
        </div>
      </div>
      <div className="jumbotron-container">
        <div className="jumbotron-overlay">
          <div className="jumbotron-text-container">
            <div className="jumbotron-text">ORANGE PARK</div>
            <div className="jumbotron-sub-text">This is just some random text to
make it seem like something is actually happening.</div>
            <button className="jumbotron-button">APPLY NOW</button>
          </div>
          <div className="jumbotron-timer-line"></div>
        </div>
       
        

      </div>
      <div className="degrees-container">
        <div className="degrees-selectors-container">
          <div className="degree-selector" style={{borderLeft: 'none'}}>
            A.A Degree
          </div>
          <div className="degree-selector">
            Allied Health & Nursing
          </div>
          <div className="degree-selector">
           Bussiness / Coroporate College
          </div>
          <div className="degree-selector">
           Criminial Justice
          </div>
          <div className="degree-selector">
           Computer Sciences
          </div>
          <div className="degree-selector">
           Engineering Technology
          </div>
          <div className="degree-selector">
           Bachelor's Degree
          </div>
        </div>
        <div className="degree-information-container">
          <div className="degree-information-wrapper"></div>
        </div>
      </div>
    
     
    </div>
  );
}

export default App;
