import Home from "./pages/home.jsx";
import BookNow from "./pages/booknow.jsx"

import { BrowserRouter, Routes, Route} from 'react-router-dom';


export default function App() {
  return (
    <div>

        <Routes>
          <Route index element={<Home />} />
          <Route path="/kest" element={<Home />} />
          <Route path="/kest/book" element={ <BookNow/> }/>
        </Routes>
      
    </div> 
  );
}

