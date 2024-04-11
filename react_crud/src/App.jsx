import {Routes, Route, Link} from "react-router-dom"
import HomePage from "./Pages/HomePage";
import CreatePage from "./Pages/CreatePage";
import EditPage from "./Pages/EditPage";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const App = () => {
  return(
    <div className="">
      <nav className="bg-gray-800">
            <div className="container mx-auto p-2">
               <Link to="/"><h2 className="text-white text-2xl font-bold">React Crud</h2></Link> 
            </div>
        </nav>
      

      <div className="container mx-auto p-2 h-full">
      <Routes>
        <Route index element={<HomePage/>}></Route>
        <Route path="/create" element={<CreatePage/>}></Route>
        <Route path="/edit/:id" element={<EditPage/>}></Route>
      </Routes>
      </div>
      <ToastContainer/>
    </div>

   
  );
}

export default App;