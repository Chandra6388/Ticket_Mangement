import { Routes, Route } from 'react-router-dom';
import AddUser from './Component/AddUser';
import AllUser from './Component/AllUser';
import EditUser from './Component/EditUser';


const App = () => {
   return (
      <>
         <Routes>
            <Route path="/adduser" element={<AddUser />} />
            <Route path="/" element={<AllUser />} />
            <Route path="/edituser" element={<EditUser />} />
         </Routes>
      </>
   );
};
 

export default App;