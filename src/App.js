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
      </div>
      <div className="jumbotron-container"></div>
     
    </div>
  );
}

export default App;
