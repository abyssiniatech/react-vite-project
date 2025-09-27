import React, { useState } from 'react'

const Events = () => {
    const [event,setEvent] = useState<string>("")
    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    
        setEvent(event.target.value)
    }
    const handleClick = () => {
        console.log("Button Clicked")
        setEvent("")
    }
  return (
    <div>
        <h1> {event}</h1>
      
          <input type="text"  onChange={handleInput}/>
            <button onClick={handleClick}>Click Me</button>
    </div>
  )
}

export default Events
