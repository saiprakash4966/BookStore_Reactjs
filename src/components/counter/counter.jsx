import React, { useState } from 'react'
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { Button } from '@mui/material';

function Counter(props) {
    const [counter, setCounter] = useState(1)

      const handleClick2 = () => {
        if (counter > 1){
        setCounter(counter - 1)
        }
      }
      const handleClick1 = () => {
        setCounter(counter + 1)
      }
      const submit = () =>{
        props.listenToBookCount()
      }
      
  return (
    <div>
       
        <Button onClick={submit}>  <RemoveCircleOutlineIcon  onClick={handleClick2}/>{counter}<ControlPointIcon onClick={handleClick1}/></Button>
    </div>
  )
}

export default Counter;