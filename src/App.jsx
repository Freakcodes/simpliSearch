import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideoCamera} from '@fortawesome/free-solid-svg-icons'
import Home from "./pages/Home";


import {  useState } from "react";
import Series from "./components/Series";
import List from "./components/List";
import Movies from "./pages/Movies";


function App() {    
  return (
    <div className="">
      <Router>
      <div className="flex  justify-between w-full py-3 bg-[#0d0e10] items-center  ">
      <Link to='/'><h1 className="text-3xl ml-4 font-sans font-bold text-white">SimpliSearch <FontAwesomeIcon icon={faVideoCamera} /></h1></Link>
        <div className="mr-8 flex gap-3 items-center">
        <Link to='/Series' className=" text-white text-xl hover:border-b-2  ">Series</Link>
        <Link to='/Movies' className=" text-white text-xl hover:border-b-2  ">Movies</Link>
        <Link to='/top_rated' className=" text-white text-xl hover:border-b-2  ">Top Rated</Link>
  
        
        
        
       
        
        </div>
        
        
      </div>
      <Routes>
        <Route path="/top_rated" element={<List/>}/>
        <Route path="/" element={<Home/>}/>
       
        <Route path="/Series" element={<Series/>}/>
        <Route path="/Movies" element={<Movies/>}/>
      </Routes>
      
      </Router>
      
    </div>
  );
}

export default App;
