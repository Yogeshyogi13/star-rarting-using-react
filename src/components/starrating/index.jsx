import React from "react"
import {FaStar} from 'react-icons/fa'
import "./styyle.css"
import Card from "./card"
export default function StarRating({numberOfStars=10}){
    const [rating,setRating]=React.useState(0)
    const [hover,setHover]=React.useState(0)
    function handleClick(currentIndex){
      setRating(currentIndex)
    }
    function handleMouseMove(currentIndex){
        setHover(currentIndex)
    }
    function handleMouseLeave(currentIndex){
        setHover(rating)
    }
    return (
        <div className='starRating'>
            <Card/>
    {
        [...Array(numberOfStars)].map((_,index)=>{
            index+=1;
            return <FaStar 
            key={index}
            className={index<=(hover ||rating)?"active":"inactive"}
            onClick={()=>handleClick(index)}
            onMouseMove={()=>handleMouseMove(index)}
            onMouseLeave={()=>handleMouseLeave()}
            size={40}
            />
        })
    }
        </div>
    )
}