import React, { useState } from "react";

function Filter({onCategoryChange}){

    return(
            <div className="Filter">

                <select onChange={onCategoryChange} name="filter">
                    <option value="All"> Filter by category</option>
                    <option value="Greased"> Greased</option>
                </select>

            </div>

    )
}

export default Filter