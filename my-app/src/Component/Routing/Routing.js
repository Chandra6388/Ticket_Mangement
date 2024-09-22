import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AddUser from '../AddUser';
import AllUser from '../AllUser';

const Admin_Routing = () => {
  return (
    <div className="page-wrapper">
      <Routes>
        <Route path="/subadmin/add" element={<AddUser />} />
        <Route path="/subadmin/edit/:id" element={<AllUser />} />
      </Routes>
    </div>
  );
};

export default Admin_Routing;
