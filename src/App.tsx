import { useEffect } from "react";
import Navbar from "./components/header/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import data from "../src/assets/data.json";

function App() {

  return (
    
    <div className="">
      <Sidebar/>
     <div className="">
       <Navbar/>
     </div>
    
    </div>
  );
}

export default App;
