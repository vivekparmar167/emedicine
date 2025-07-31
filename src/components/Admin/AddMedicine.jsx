import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminDashboard from './AdminDashboard';
import axios from 'axios';

export default function AddMedicine() {
  const [formData, setFormData] = useState({
    name: '',
    manufacturer: '',
    unitPrice: '',
    discount: '',
    quantity: '',
    expDate: '',
    image: null,
    status: 'Active'
  });

  const navigate = useNavigate();

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = e => {
    setFormData(prev => ({ ...prev, image: e.target.files[0] }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const data = new FormData();
    data.append('name', formData.name);
    data.append('manufacturer', formData.manufacturer);
    data.append('unitPrice', formData.unitPrice);
    data.append('discount', formData.discount);
    data.append('quantity', formData.quantity);
    data.append('expDate', formData.expDate);
    data.append('status', formData.status);
    if (formData.image) {
      data.append('imageUrl', formData.image);
    }

    try {
      await axios.post('https://localhost:7104/api/medicines', data, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      alert('Medicine added successfully!');
      navigate('/admin/medicines');
    } catch (err) {
      console.error(err);
      alert('Failed to add medicine.');
    }
  };

  return (
    <AdminDashboard>
      <div className="container mt-4">
        <h2 className="text-center">Add Medicine</h2>
        <form onSubmit={handleSubmit}>
          <input name="name" className="form-control mb-2" placeholder="Name" value={formData.name} onChange={handleChange} required />
          <input name="manufacturer" className="form-control mb-2" placeholder="Manufacturer" value={formData.manufacturer} onChange={handleChange} required />
          <input name="unitPrice" type="number" className="form-control mb-2" placeholder="Unit Price" value={formData.unitPrice} onChange={handleChange} required />
          <input name="discount" type="number" className="form-control mb-2" placeholder="Discount" value={formData.discount} onChange={handleChange} />
          <input name="quantity" type="number" className="form-control mb-2" placeholder="Quantity" value={formData.quantity} onChange={handleChange} required />
          <input name="expDate" type="date" className="form-control mb-2" value={formData.expDate} onChange={handleChange} required />
          <input name="status" className="form-control mb-2" placeholder="Status" value={formData.status} onChange={handleChange} required />
          <input type="file" className="form-control mb-2" onChange={handleFileChange} accept="image/*" />
          <button type="submit" className="btn btn-primary">Add</button>
        </form>
      </div>
    </AdminDashboard>
  );
}
