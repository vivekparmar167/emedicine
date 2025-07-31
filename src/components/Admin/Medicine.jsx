import React, { useEffect, useState } from 'react';
import AdminDashboard from './AdminDashboard';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Medicine() {
  const [medicines, setMedicines] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchMedicines();
  }, []);

  const fetchMedicines = async () => {
    try {
      const response = await axios.get('https://localhost:7104/api/Medicines');
      setMedicines(response.data);
    } catch (error) {
      console.error('Error fetching medicines:', error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this medicine?")) {
      try {
        await axios.delete(`https://localhost:7104/api/Medicines/${id}`);
        fetchMedicines(); // Refresh list
      } catch (error) {
        console.error('Error deleting medicine:', error);
        alert("Failed to delete medicine.");
      }
    }
  };

  const handleUpdate = (id) => {
    navigate(`/UpdateMedicine/${id}`); // Navigate to UpdateMedicine form
  };

  return (
    <AdminDashboard>
      <div className="mb-4">
        <h1 className="h3 mb-0 text-gray-800">Medicine List</h1>
      </div>

      <div className="card shadow mb-4">
        <div className="card-header py-3 d-flex justify-content-between">
          <h6 className="m-0 font-weight-bold text-primary">Medicines</h6>
          <Link to="/AddMedicine" className="btn btn-facebook r-0">Add Medicine</Link>
        </div>

        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-bordered" width="100%" cellSpacing="0">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Unit Price</th>
                  <th>Discount</th>
                  <th>Quantity</th>
                  <th>Exp Date</th>
                  <th>Image</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {medicines.map((medicine) => (
                  <tr key={medicine.id}>
                    <td>{medicine.id}</td>
                    <td>{medicine.name}</td>
                    <td>{medicine.unitPrice}</td>
                    <td>{medicine.discount}</td>
                    <td>{medicine.quantity}</td>
                    <td>{medicine.expDate}</td>
                    <td>
                      {medicine.imageUrl ? (
                        <img
                          src={`https://localhost:7104${medicine.imageUrl}`}
                          alt="medicine"
                          width="50"
                          height="50"
                        />
                      ) : (
                        "No Image"
                      )}
                    </td>
                    <td>
                      <button
                        onClick={() => handleDelete(medicine.id)}
                        className="btn btn-danger btn-circle"
                      >
                        <i className="fas fa-trash"></i>
                      </button>
                      <button
                        onClick={() => handleUpdate(medicine.id)}
                        className="ms-1 btn btn-info btn-circle"
                      >
                        <i className="fas fa-edit"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminDashboard>
  );
}
