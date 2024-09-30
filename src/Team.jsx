import React, { useState } from 'react'

function Team() {
    const [team,setTeam] = useState(11);
    const handelAdd = () =>{
       const team1 = team + 1;
        setTeam(team1);
    }
    const handelReduce = () =>{
        const team1 = team - 1;
         setTeam(team1);
     }
    const teamStyle = {
        border : '2px solid purple',
        margin : '20px',
        padding :'20px',
        borderRadius : '20px'
    }
  return (
    <div style={teamStyle}>
        <h3>Players:{team}</h3>
        <button onClick={handelAdd}>Add</button>
        <button onClick={handelReduce}>Reduce</button>
    </div>
  )
}

export default Team