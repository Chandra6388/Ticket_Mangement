
import React , {useState , useEffect} from 'react';
import { Trash2, Pencil } from 'lucide-react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const AllUser = () => {
    const [getAllUser, setGetAllUser] = useState([])
    

    useEffect(() => {
        GetAllUsers();
    }, [])

    const GetAllUsers = async () => {
        try {
            const res = await axios.post('http://localhost:8000/alluser');
            setGetAllUser(res.data.data)
          } 
          catch (err) {
            console.log(err);
          }
    }



    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-dark">
                <a class="navbar-brand" href="#">MY APP</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </nav>

            <div className='m-3'>
                <div className='shadow-lg p-3 mb-5 bg-white rounded mt-5' style={{ height: '80vh' }}>
                <div className='d-flex justify-content-end mb-4'>
                <Link to={'/adduser'} className='btn btn-primary '>Add New Tecket</Link>
                </div>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">SR. NO</th>
                                <th scope="col">User Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone Number</th>
                                <th scope="col">Notes</th>
                                <th scope="col">Action</th>


                            </tr>
                        </thead>
                        <tbody>
                        {
                            getAllUser.map((item , index) => {
                                return (
                                    <tr>
                                        <th scope="row">{index + 1}</th>
                                        <td>{item.Username}</td>
                                        <td>{item.Email}</td>
                                        <td>{item.PhoneNo}</td>
                                        <td>{item.Notes}</td>
                                        <td>
                                            <Pencil /> <Trash2 />
                                        </td>
                                    </tr>
                                )
                            })
                        }
                           


                        </tbody>
                    </table>
                </div>


            </div>
        </>
    );
}

export default AllUser;
