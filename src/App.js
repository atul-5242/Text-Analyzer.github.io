// import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar';//important
import Textform from './components/Textform';
// let a="<b>Harry</b>";   by this we can write like this to bold.
// let a="Harry";

function App() {
  return (
 <>
        <Navbar />
  <div className="container my-3">
    <Textform heading="Enter your text:"/>
  
  </div>

</>














  );
}

export default App;
