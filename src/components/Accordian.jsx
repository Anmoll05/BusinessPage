import React, {useState} from 'react'

export const Accordian = () => {
    const [copen, setCOpen] = useState(null);

  return (
    <div style= {{width: '50%', margin:'auto'}}>
        <p style={{border: '1px solid black', height:'40px'}} onClick={() => setCOpen(1)}>qwerty</p>
        { copen == 1 && <p style={{border: '1px solid black',marginLeft:'10px', height:'40px'}}>asdfgh</p>}
        <p style={{border: '1px solid black', height:'40px'}} onClick={() => setCOpen(2)}>qwerty</p>
        { copen == 2 && <p style={{border: '1px solid black', marginLeft:'10px',height:'40px'}}>asdfgh</p>}
        <p style={{border: '1px solid black', height:'40px'}} onClick={() => setCOpen(3)}>qwerty</p>
        { copen == 3 && <p style={{border: '1px solid black', marginLeft:'10px',height:'40px'}}>asdfgh</p>}
        <p style={{border: '1px solid black', height:'40px'}} onClick={() => setCOpen(4)}>qwerty</p>
        { copen == 4 && <p style={{border: '1px solid black', marginLeft:'10px',height:'40px'}}>asdfgh</p>}
    </div>
  )
}
