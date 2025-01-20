import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Profiles from './Components/Profiles.jsx'
import ProfileDetails from './Components/ProfileDetails.jsx';
import Admin from './Components/Admin.jsx';
import Header from './Components/Header.jsx';




function App() {
  const [profile, setProfile] = useState([])
  


  useEffect(()=>{
    fetch('/profiles.json')
    .then((res)=> res.json())
    .then((data)=> setProfile(data))
    .catch((error) => console.error('Error fetching profiles:', error));
  },[])

 





  return (
  
    <Router>
       <Header  />
      <Routes>
        <Route path='/' element= {<Profiles profile = {profile} />}></Route>

        <Route
          path="/admin"
          element={<Admin profile={profile} setProfile={setProfile} />}
        />
        
        <Route path="/p/:id" element={<ProfileDetails profile={profile} />} />
      </Routes>

    
    
     
     </Router>
    
  )
  
}

export default App
