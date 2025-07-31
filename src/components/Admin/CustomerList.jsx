import React from 'react';
import AdminDashboard from './AdminDashboard';

export default function CustomerList() {
  // Sample dummy customer data
  const customers = [
    { id: 1, name: 'John Doe', email: 'john@example.com', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'Inactive' },
    { id: 3, name: 'Alice Johnson', email: 'alice@example.com', status: 'Active' },
  ];

  return (
    <AdminDashboard>
      <div className="mb-4">
        <h1 className="h3 mb-0 text-gray-800">Customer List</h1>
      </div>

      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Customers</h6>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-bordered" width="100%" cellSpacing="0">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Password</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {customers.map((customer) => (
                  <tr key={customer.id}>
                    <td>{customer.id}</td>
                    <td>{customer.name}</td>
                    <td>{customer.email}</td>
                    <td>
                        {customer.name}
                    </td>
                    <td><a href="#" class="btn btn-danger btn-circle">
                            <i class="fas fa-trash"></i>
                        </a>   

                        <a href="#" class=" ms-1 btn btn-info btn-circle">
                                        <i class="fas fa-info-circle"></i>
                        </a>
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
