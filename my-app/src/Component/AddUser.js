import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddUser = () => {
  const navigate= useNavigate();

  const [userInput, setUserInput] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    notes: ''
  })

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserInput({ ...userInput, [name]: value })
  }


  const handleSubmit = async () => {
    const { name, email, phone, password, notes } = userInput;
    const data = { name, email, phone, password, notes };
    console.log(data);
  
    try {
      const res = await axios.post('http://localhost:8000/adduser', data);
      console.log(res);
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };
  

  return (
    <>
       <nav class="navbar navbar-expand-lg navbar-light bg-dark">
                <a class="navbar-brand" href="#">MY APP</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </nav>

      <div className='container'>
        <div className='shadow-lg p-3 mb-5 bg-white rounded mt-5'>
          <div className='row mt-2'>
            <div class="form-group col-lg-6">
              <label>User Name</label>
              <input type="text" class="form-control" placeholder="Enter username"
                onChange={(e) => handleInput(e)}
                value={userInput.name}
                name="name"

              />
            </div>
            <div class="form-group col-lg-6">
              <label>Email</label>
              <input type="email" class="form-control mb-2" placeholder="Enter email id"
                onChange={(e) => handleInput(e)}
                value={userInput.email}
                name="email"
              />
            </div>
            <div class="form-group col-lg-6">
              <label>Phone Number</label>
              <input type="number" class="form-control mb-2" placeholder="Enter Phone Number"
                onChange={(e) => handleInput(e)}
                value={userInput.phone}
                name="phone"
              />
            </div>
            <div class="form-group col-lg-6">
              <label>Password</label>
              <input type="password" class="form-control mb-2" placeholder="Password"
                onChange={(e) => handleInput(e)}
                value={userInput.password}
                name="password"
              />
            </div>

            <div class="form-group col-lg-6">
              <label>Notes</label>
              <textarea class="form-control mb-2" placeholder="Enter notes"
                onChange={(e) => handleInput(e)}
                value={userInput.notes}
                name="notes"
              ></textarea>
            </div>
          </div>

          <div className='d-flex justify-content-end'>
            <Link type="button" class="btn btn-danger mx-3" to={'/'}>Cancel</Link>
            <button type="button" class="btn btn-primary" onClick={handleSubmit}>Submit</button>
          </div>
        </div>


      </div>
    </>
  );
}

export default AddUser;
