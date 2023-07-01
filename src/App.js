
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Home from './Components/Home/Home';
import Nav from './Components/Nav/Nav';
import { ToastContainer, toast } from 'react-toastify';
// import Swal from 'sweetalert2'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [])

  return (
    <div className="App">
      <Nav></Nav>
      <Home></Home>
      <ToastContainer />
    </div>
  );
}

export default App;
