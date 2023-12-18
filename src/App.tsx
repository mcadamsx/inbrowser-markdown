import { useEffect } from "react";
import data from "../src/assets/data.json";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Editor from "./components/Editor/Editor";

function App() {
  return (
    <div>
      {/* <Sidebar/> */}
      <div>
        <Navbar />
        <main>
          <Editor/>
        </main>
      </div>
    </div>
  );
}

export default App;
