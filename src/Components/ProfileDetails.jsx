import React from 'react';
import { useParams, Link } from 'react-router-dom';

function ProfileDetails({ profile }) {
  const { id } = useParams(); 
  const prof = profile.find((p) => p.id === parseInt(id));

  if (!profile) {
    return <p>Profile not found!</p>;
  }

  return (
    <div>
      <h1>Profile Details</h1>
    <div className="profDetails">
    <div className="profileImg">
      <img src={prof.image} alt="" />
     </div>
     <div className="otherDetails">
     <h2>{prof.name}</h2>
      <p><strong>Description:</strong> {prof.description}</p>
      <p><strong>Address:</strong> {prof.address}</p>
      <p><strong>Phone No:</strong> {prof.ph_no}</p>
      <p><strong>Email:</strong> {prof.email}</p>
      
      <Link to="/"><button>Back to Profiles</button></Link>
     </div>
    </div>
    </div>
  );
}

export default ProfileDetails;
