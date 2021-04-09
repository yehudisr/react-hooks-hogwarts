import React from "react";
import HogCard from "./HogCard"

function HogList({ hogList, setHogList }){

    const allHogs = hogList.map((hog) => <HogCard hog={hog}/>)

    return(

        <div class="ui grid container">
       
           {allHogs}

        </div>
    )


}

export default HogList