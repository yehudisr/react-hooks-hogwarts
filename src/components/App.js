import React, { useState } from "react";
import Nav from "./Nav";
import HogList from "./HogList"
import Filter from './Filter'
import hogs from "../porkers_data";

function App() {

  const [hogList, setHogList] = useState(hogs)
  const [selectedCategory, setSelectedCategory]= useState("All")


  function handleCategoryChange(event){
      setSelectedCategory(event.target.value)
  }

  const filteredHogs = hogList.filter((hog)=> {
    if(selectedCategory === "All") return true
    return hog.greased === selectedCategory
  })


  return (
    <div className="App">
      <Nav />
      <Filter onCategoryChange={handleCategoryChange}/>
      <HogList hogList={hogList} setHogList={setHogList}/>
    </div>
  );
}

export default App;
