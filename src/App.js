import logo from './logo.svg';
import './App.css';
import { Haeder } from './Component/Haeder';
import { Footer } from './Component/Footer';
import { ListMentor } from './Component/ListMentor';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import AddMentor from './Component/AddMentor';
function App() {
  return (
    <>
    <Router>
    <Haeder></Haeder>
   <div >
     <Routes>
       <Route path='/' element={<ListMentor/>}></Route>
       <Route path='/mentors' element={<ListMentor/>}></Route>
       <Route path='/add-employee' element={<AddMentor/>}></Route>
     <Route path='/edit-mentor-detail/:id' element={<AddMentor/>}></Route>
     </Routes>
   </div>
  
  
   <Footer/>
    </Router>
    </>
  );
}

export default App;
