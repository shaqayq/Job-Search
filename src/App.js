import 'bootstrap/dist/css/bootstrap.css';
import Navbar from "./layouts/Navbar"
import Main from './components/main'
import About from './components/about/About';
import Contact from './components/Contact';
import Search from './components/search/Search';
import SavedJob from './components/SavedJob';
import Footer from './layouts/footer';



import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
     // eslint-disable-next-line
    <Router>
    <div className="App">
      <Navbar />
      <Routes>
     <Route exact path='/' element={<Main/>}/>
     <Route path='/about' element={<About/>}/>
     <Route path='/contact' element={<Contact/>}/>
     <Route path='/search' element={<Search/>}/>
     <Route path='/save-jobs' element={<SavedJob/>}/>



     </Routes>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
