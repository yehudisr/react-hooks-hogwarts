import React, { useState } from "react";

function Filter({onCategoryChange, onSortBy, onSetSortBy, onHandleAddHog}){

    function handleSortChange(event){
        onSetSortBy(event.target.value)
  }


    return(
            <div className="filter">

                <select onChange={onCategoryChange} name="filter">
                    <option value="All"> Filter by category</option>
                    <option value="Greased"> Greased</option>
                </select>
                   |    
                 <select onChange={handleSortChange} name="sort">
                    <option value="All"> Sort by category</option>
                    <option value="Weight"> Weight</option>
                    <option value="Name"> Name</option>
                </select>

                <button onClick={onHandleAddHog}>Add Hog</button>

            </div>

    )
}

export default Filter