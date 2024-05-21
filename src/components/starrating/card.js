import React from "react"
import data from "./data"
export default function Card(){
    return (
        <div className="cards">
            <div className="card-items">
                {data.map((dataItems)=>(
                    <div className="card-elements">
                    {dataItems.img}
                    {dataItems.desc}
                    </div>
                )
                )}
            </div>
        </div>
    )
}