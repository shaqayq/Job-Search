import 'bootstrap/dist/css/bootstrap.css';
import Navbar from "./layouts/Navbar"
import Main from "./components/jobs/main";
import Footer from './layouts/footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Footer/>
    </div>
  );
}

export default App;
