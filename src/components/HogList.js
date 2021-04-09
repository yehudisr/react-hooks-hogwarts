import React from "react";
import HogCard from "./HogCard"

function HogList({ hogList, setHogList }){

    const allHogs = hogList.map((hog) => <HogCard hog={hog}/>)

    return(

        <div className="ui grid container">
       
           {allHogs}

        </div>
    )


}

export default HogList