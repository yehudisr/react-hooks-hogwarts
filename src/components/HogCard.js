import React, {useState}  from "react";
import HogDetails from "./HogDetails"

function HogCard({hog}){

const [showDetails, setShowDetails] = useState(false)
const [hideCard, setHideCard] = useState(false)


function handleShowDetails(event){
    setShowDetails(!showDetails)
}

function handleHideCard(event){
        setHideCard(!hideCard)
}


    return(
        
       <div>
        <button onClick={handleHideCard}>{hideCard ? 'Hide' : 'Show'}</button>
           {!hideCard && git 
            <div className="pigTile">
            <img className="minPigTile" src={hog.image} alt={hog.name}/>
            <h3>{hog.name}</h3>
            <button onClick={handleShowDetails}>{showDetails ? 'Less' : 'More'} Info</button>
               {showDetails && <HogDetails hog={hog}/>}
         </div>}
       </div>
    )


}

export default HogCard