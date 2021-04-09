import React, {useState}  from "react";
import HogDetails from "./HogDetails"

function HogCard({hog}){

const [showDetails, setShowDetails] = useState(false)


function handleShowDetails(event){
    setShowDetails(!showDetails)
}


    return(

        <div class="ui eight wide column">
            <img src={hog.image} alt={hog.name}/>
            <h2>{hog.name}</h2>
            <button onClick={handleShowDetails}>{showDetails ? 'Less' : 'More'} Info</button>
            
            {showDetails && <HogDetails hog={hog}/>}

        </div>
    )


}

export default HogCard