import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Registration from './Registration';
import Cart from './user/Cart';
import Dashboard from './user/Dashboard';
import Orders from './user/Orders';
import MedicineDisplay from './user/MedicineDisplay';
import Profile from './user/Profile';
import AddminDashBoard from './Admin/AdminDashboard';
import AdminOrders from './Admin/AdminOrders';
import CustomerList from './Admin/CustomerList';
import Medicine from './Admin/Medicine';



export default function RouterPage(){
    return(
       
            <Routes>
                <Route path='/' element={<Login/>}></Route>
                <Route path='/Registration' element={<Registration/>}></Route>
                <Route path='/Dashboard' element={<Dashboard/>}></Route>
                <Route path='/Orders' element={<Orders/>}></Route>
                <Route path='/Cart' element={<Cart/>}></Route>
                <Route path='/MedicineDisplay' element={<MedicineDisplay/>}></Route>
                <Route path='/Profile' element={<Profile/>}></Route>


                <Route path='/AddminDashBoard' element={<AddminDashBoard/>}></Route>
                <Route path='/AdminOrders' element={<AdminOrders/>}></Route>
                <Route path='/CustomerList' element={<CustomerList/>}></Route>
                <Route path='/Medicine' element={<Medicine/>}></Route>
                
            </Routes>
       
    )

}