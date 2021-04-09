import React, {useState}  from "react";
import HogDetails from "./HogDetails"

function HogCard({hog}){

const [showDetails, setShowDetails] = useState(false)


function handleShowDetails(event){
    setShowDetails(!showDetails)
}


    return(

        <div className="pigTile">
           
            <img className="minPigTile" src={hog.image} alt={hog.name}/>
            <h3>{hog.name}</h3>
            <button onClick={handleShowDetails}>{showDetails ? 'Less' : 'More'} Info</button>
            
            {showDetails && <HogDetails hog={hog}/>}

            

        </div>
    )


}

export default HogCard