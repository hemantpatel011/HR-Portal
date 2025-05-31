import {useState} from 'react';
import { Link, useNavigate} from 'react-router-dom';
import axios from "../config/api";
import toast, { Toaster } from "react-hot-toast";
 

 const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email:"",
    password:"",
  })

const handleChange = (e) =>{
  const {name,value} =e.target;

  setData((prev) =>(
    {...prev,[name]:value,}
  ));
};



 const handleSubmit = async (e) => {
  e.preventDefault();

try{
  const response = await axios.post("auth/login",data);
  console.log(response.data);
  toast.success(response.data.message);
  navigate("/dashboard");
}catch (e) {
      console.log("Uanble to fetch Data from Server");
      toast.error(e.response.data.message);
    }

 }

  return (
    <div className="max-w-md mx-auto mt-16 px-6 py-8 bg-white shadow-xl rounded-2xl border border-gray-100">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">Welcome Back</h2>
      <form className="space-y-5" onSubmit={handleSubmit}>
        <div>
          <label className="block mb-1 text-gray-700">Email</label>
          <input
            name='email'
            value={Data.email}
             onChange={handleChange}
            type="email"
            className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300"
            required
          />
        </div>
        <div>
          <label className="block mb-1 text-gray-700">Password</label>
          <input
          name='password'
            value={Data.password}
             onChange={handleChange}
            type="password"
            className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full text-white py-3 rounded-3xl text-lg font-semibold shadow-lg transition duration-300
            bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500
"
        >
          Login
        </button>
      </form>

      <p className="mt-6 text-center text-gray-600">
        Don't have an account?{' '}
        <Link to="/register" className="text-blue-600 hover:underline font-medium">
          Register here
        </Link>
      </p>
    </div>
  );
};

export default Login;