
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const[count,setcount]=useState(0)
  function buttonClicked(){
    setcount(count++)
  }
  return (
    <div>
        <p>Button clicked {count} times</p>
        <button onclick={buttonClicked}></button>
    </div>
  )
}

export default App
