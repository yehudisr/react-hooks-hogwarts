import React, { useState } from "react";
import Nav from "./Nav";
import HogList from "./HogList"
import Filter from './Filter'
import hogs from "../porkers_data";

function App() {

  const [hogList, setHogList] = useState(hogs)
  const [selectedCategory, setSelectedCategory]= useState("All")
  const [sortBy, setSortBy] = useState("name")

  function handleCategoryChange(event){
      setSelectedCategory(event.target.value)
  }

  const hogsToShow = hogList
  
  .filter((hog)=> {
    if(selectedCategory === "All") return true
    return hog.greased === true
  })
 

  .sort((a,b)=> {
    if(sortBy === "Weight"){
      return a.weight - b.weight
    } else {
      return a.name.localeCompare(b.name)
    }
  })

  

  return (
    <div className="App">
      <Nav />
      <Filter onCategoryChange={handleCategoryChange} onSortBy={sortBy} onSetSortBy={setSortBy}/>
      <HogList hogList={hogsToShow} setHogList={setHogList}/>
    </div>
  );
}

export default App;
