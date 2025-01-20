import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function AdminPanel({ profile, setProfile}) {
  const [formData, setFormData] = useState({
    id: null,
    name: '',
    description: '',
    address: '',
    ph_no: '',
    email: '',
    image: '',
  });

  const [imagePreview, setImagePreview] = useState(null);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setFormData({ ...formData, image: reader.result }); // Save image as Base64
        setImagePreview(reader.result); // Show image preview
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle Add or Edit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.id) {
      // Edit existing profile
      setProfile(
        profile.map((p) =>
          p.id === formData.id ? { ...formData } : p
        )
      );
    } else {
      // Add new profile
      setProfile([
        ...profile,
        { ...formData, id: Date.now() }, // Assign unique ID
      ]);
    }
    setFormData({ id: null, name: '', description: '', ph_no: '', email: '', address:'' , image:''}); 
    setImagePreview(null);
  };


  // Handle Delete
  const handleDelete = (id) => {
    setProfile(profile.filter((p) => p.id !== id));
  };

  // Handle Edit (Prefill form)
  const handleEdit = (p) => {
    setFormData(p);
    setImagePreview(p.image); // Load the existing image preview
  };


  return (
    <>
    <div>
    <h1>Admin Panel</h1>
    <h2>Total Profiles: {profile.length}</h2>
     
    <h2 style={{textAlign:"center"}}>Add New Profile</h2>
      <form onSubmit={handleSubmit} className='admin-form-container'>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          required
        />
         <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Address"
          required
        />
        <input
          type="number"
          name="ph_no"
          value={formData.ph_no}
          onChange={handleChange}
          placeholder="Phone number"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
          <input type="file" accept="image/*" onChange={handleImageChange} />
          {imagePreview && <img src={imagePreview} alt="Preview" style={{ width: '150px', marginTop: '10px' }} />}
        <button type="submit">
          {formData.id ? 'Update Profile' : 'Add Profile'}
        </button>
      </form>

      <h2>All Profiles</h2>
      <ul className='profileCards'>
        {profile.map((p) => (
          <li key={p.id} className='card'>
            <Link to={`/p/${p.id}`}> <img src={p.image} alt={p.name} /></Link>
            <h3>{p.name}</h3>
            <p>{p.description}</p>
            <p>{p.ph_no}</p>
            <p>{p.email}</p>
           <div className="cardbtns">
           <button className='edit' onClick={() => handleEdit(p)}>Edit</button>
           <button className='delete' onClick={() => handleDelete(p.id)}>Delete</button>
           </div>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
}

export default AdminPanel;
