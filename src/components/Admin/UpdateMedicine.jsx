import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import AdminDashboard from './AdminDashboard';

export default function UpdateMedicine() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    unitPrice: '',
    discount: '',
    quantity: '',
    expDate: '',
    image: null
  });

  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchMedicine();
  }, []);

  const fetchMedicine = async () => {
    try {
      const response = await axios.get(`https://localhost:7104/api/Medicines/${id}`);
      const data = response.data;
      setFormData({
        name: data.name,
        unitPrice: data.unitPrice,
        discount: data.discount,
        quantity: data.quantity,
        expDate: data.expDate.split('T')[0], // For input[type="date"]
        image: null
      });
    } catch (error) {
      console.error('Error fetching medicine:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('id', id);
    data.append('name', formData.name);
    data.append('unitPrice', formData.unitPrice);
    data.append('discount', formData.discount);
    data.append('quantity', formData.quantity);
    data.append('expDate', formData.expDate);
    if (formData.image) {
      data.append('image', formData.image);
    }

    try {
      await axios.put(`https://localhost:7104/api/Medicines/${id}`, data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setMessage('Medicine updated successfully.');
      navigate('/Medicine');
    } catch (error) {
      console.error('Update failed:', error);
      setMessage('Failed to update medicine.');
    }
  };

  return (
    <AdminDashboard>
      <div className="container mt-4">
        <h2>Update Medicine</h2>
        {message && <p>{message}</p>}
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="form-group mb-3">
            <label>Name</label>
            <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="form-group mb-3">
            <label>Unit Price</label>
            <input type="number" className="form-control" name="unitPrice" value={formData.unitPrice} onChange={handleChange} required />
          </div>
          <div className="form-group mb-3">
            <label>Discount</label>
            <input type="number" className="form-control" name="discount" value={formData.discount} onChange={handleChange} />
          </div>
          <div className="form-group mb-3">
            <label>Quantity</label>
            <input type="number" className="form-control" name="quantity" value={formData.quantity} onChange={handleChange} required />
          </div>
          <div className="form-group mb-3">
            <label>Exp Date</label>
            <input type="date" className="form-control" name="expDate" value={formData.expDate} onChange={handleChange} required />
          </div>
          <div className="form-group mb-3">
            <label>New Image (optional)</label>
            <input type="file" className="form-control" name="image" accept="image/*" onChange={handleChange} />
          </div>
          <button type="submit" className="btn btn-success">Update Medicine</button>
        </form>
      </div>
    </AdminDashboard>
  );
}
