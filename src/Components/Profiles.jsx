import React from 'react'
import { Link } from 'react-router-dom';


function Profiles({profile}){
 
  return (
    <>
    <h1 style={{margin:"25px"}}>Profiles</h1>
    <div className='profileCards'>
      {profile.map((p)=>{
     return  ( <div key={p.id} className="card">
         <Link to={`/p/${p.id}`}> <img src={p.image} alt={p.name} /></Link>
          <h3>{p.name}</h3>
          <h4>{p.description}</h4>
         <h5>{p.address}</h5>
        </div>)
      })}
    </div>
    
    </>
  )
}

export default Profiles