import ProductList from "./components/ProductList";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="container">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/add" element={<AddProduct />}/>
        <Route path="/edit/:id" element={<EditProduct />} />
      </Routes>
      </BrowserRouter>
      <ToastContainer />
      
      
    
    </div>
  );
}

export default App;
