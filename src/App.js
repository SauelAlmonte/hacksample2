import React, { useState} from "react";
import "./Styles/Styles.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Search } from "./components/Search/Search";
import { Footer } from "./components/Footer/Footer";
import { CardData2 } from "./components/Cards/CardData2";



const App = () => {
  return (
    <>
      <div className="App">
        <Navbar/>
        <Search />
  
        {/* <ClickableCard/> */}
        {/* <DataGrid/> */}
        <CardData2/>
        {/* <Click/> */}
        
        {/* <Exams /> */}
        <Footer/>
      </div>
    </>
  );
}

export default App;