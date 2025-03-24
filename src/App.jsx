import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import Privacy_policy from './page/Privacy_policy';
import Terms_Conditions from './page/Terms_Conditions';
import Disclaimer from './page/Disclaimer';
import Blogs from './page/Blogs';
import Events from './page/Events';
import Refund_policy from './page/refund_policy';
import FranchiseDigitalMarketing from './page/FranchiseDigitalMarketing';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/privacypolicy" element={<Privacy_policy />} />
        <Route path="/Terms&Conditions" element={<Terms_Conditions />} />
        <Route path="/Disclaimer" element={<Disclaimer  />} />
        <Route path="/Blogs" element={<Blogs/>} />
        <Route path="/Events" element={<Events/>} />
        <Route path="/refund_policy" element={<Refund_policy/>} />
        
        <Route path="/FranchiseDigitalMarketing"  element={<FranchiseDigitalMarketing/>}/>
      </Routes>
    </Router>
  );
}

export default App;















// import { useState } from 'react';
// import './App.css';
// import Home from './page/Home';

// function App() {

//   return (
//     <>
//       <Home/>
//     </>
//   )
// }
// 
// export default App
