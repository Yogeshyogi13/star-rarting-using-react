import './App.css';
import React from "react"
import StarRating from './components/starrating';
function App() {
  return (
    <div className="App">
     <StarRating noOfStars={10}/>
    </div>
  );
}

export default App;
