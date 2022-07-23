
import './App.css';
import Bai1 from './Test/Bai1';
import Bai2 from './Test/Bai2';
import Bai3 from './Test/Bai3';
import BackgoundAnimate from './BackgoundAnimate';
import LinkResult from './LinkResult';
import { useState } from 'react';
function App() {
  // Bai 3 
  const [inputValue, setInputValue] = useState("")
  //
  return (
    <div className='container' >
      <Bai1 />
      <Bai2 />


      {/* Bai 3 */}
      <Bai3 setInputValue={setInputValue} />
      <BackgoundAnimate />
      <LinkResult inputValue={inputValue} />
    </div>
  );
}

export default App;
