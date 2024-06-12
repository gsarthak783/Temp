import { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Message from './Pages/Messages';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <div className='bg-slate-300  min-h-screen '>
     
    <BrowserRouter>
    
    <Routes>
    <Route path='/' element={<HomePage/>}/>
      <Route path='message' element={<Message/>}/>

    </Routes>
    </BrowserRouter>
    
    </div>
   
    
 </>
      
  )
}

export default App