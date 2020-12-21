import { useSelector } from 'react-redux';
import './App.css';
import Blogs from './Components/Blogs';
import Footer from './Components/Footer';
import Homepage from './Components/Homepage';
import Navbar from './Components/Navbar';
import { selectSignedIn } from './features/userSlice';
import './styling/app.css';

function App() {
 
  const isSignedIn = useSelector(selectSignedIn)

  return (
    <div className="App">
      <Navbar/>
     <Homepage/>
     {isSignedIn && <Blogs/>}
     <Footer/>
    </div>
  );
}

export default App;
