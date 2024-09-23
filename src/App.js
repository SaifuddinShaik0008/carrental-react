
import './App.css';

// import Header from './Header/Header';
import Routings from './Routings';
import Header from './Header/Header';

import"bootstrap/dist/css/bootstrap.min.css";
import"bootstrap-icons/font/bootstrap-icons.css";
import Footer from './Footer/Footer';


function App() {
  return (
    <div className="App">
      <Header/>
     <Routings/>
     <Footer/>
    </div>
  );
}

export default App;
