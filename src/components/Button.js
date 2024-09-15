import React from 'react'

const Button = () => {
    const[count,setcount]=useState(0)
    function buttonClicked(){
      setcount(count+1)
    }
  return (
    <div>
    <p>Button clicked {count} times</p>
    <button onClick={buttonClicked}>Click me</button>
</div>
  )
}

export default Button