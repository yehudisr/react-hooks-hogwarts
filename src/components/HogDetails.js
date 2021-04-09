import React from "react";

function HogDetails({hog}){

    return(
        <div>

        <p>Specialty: {hog.specialty} </p>
        <p>Weight: {hog.weight}</p>
        <p>Greased: {hog.greased ? "Greased" : "Non-Greased"}</p>
        <p>Highest Medal Achieved: {hog['highest medal achieved']}</p>
        

        </div>
    )

}

export default HogDetails

