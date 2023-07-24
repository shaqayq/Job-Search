import 'bootstrap/dist/css/bootstrap.css';
import Navbar from "./layouts/Navbar"
import Main from "./components/jobs/main";
import About from './components/About'
import Footer from './layouts/footer';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Routes>
     <Route exact path='/' element={<Main/>}/>
     <Route path='/about' element={<About/>}/>
     </Routes>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
