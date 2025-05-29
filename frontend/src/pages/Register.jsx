import { useState } from "react";
import {useNavigate} from "react-router-dom"
import axios from "axios";
import toast from 'react-hot-toast';


// Address , Shift Start Time, Shift end time and Week of <select option>

const Register = () => {

    const navigate = useNavigate();

  const [Data, setData] = useState({
    fullName: "",
    email: "",
    phone: "",
    gender: "",
    dob: "",
    qualification: "",
    department: "",
    position: "",
    hiringDate: "",
    salary: "",
    crPassword: "",
    password: "",
  });

  const [error,setError] = useState({});

  const HandleChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

// Form Validations
  const validate = () =>{
    let tempErrors = {};

// Regural Expression in JS start with "/^...." & end with doller sign "...$", like "/^.....&"

    if(!/^[A-Za-z\s]+$/.test(Data.fullName) || Data.fullName < 3){
      tempErrors.fullName= "Please use only alphabates and should be  more than three characters";
    }

    if(!/^[6-9]\d{9}$/.test(Data.phone)){
      tempErrors.phone= "Please enter a valid 10 digits Mobile number";
    }

    if(!/^[A-Za-z\d._]+@(gmail.com|yahoo.com|outlook.com|ricr.in)$/.test(Data.email)){
      tempErrors.email= "Please enter a valid Email address";
    }

    if(Data.password !== Data.crPassword){
      tempErrors.password = "Password must be same.";
    }

    setError(tempErrors);

    return Object.keys(tempErrors).length ===0;
  }

  const HandleSubmit = async (e) => {
    e.preventDefault();


  // Data validation 
      if(!validate()){
          return;
        };  

    console.log(Data);

    try {
      const response = await axios.post(
        "http://localhost:4500/auth/register",
        Data
      );
      console.log(response.data);
      toast.success(response.data.message);
      setData({ fullName: "",
                email: "",
                phone: "",
                gender: "",
                dob: "",
                qualification: "",
                department: "",
                position: "",
                hiringDate: "",
                salary: "",
                crPassword: "",
                password: "",});

       navigate("/login");
    } catch (e) {
      console.log("Uanble to fetch Data from Server");
     toast.error(e.response.data.message);
    }
    
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-300 via-blue-200 to-cyan-100 p-6">
      <div className="w-full max-w-2xl bg-white/40 backdrop-blur-md rounded-3xl shadow-2xl p-10 border border-white/30">
        <h2 className="text-4xl font-extrabold text-center text-blue-800 mb-8 drop-shadow">
          Create Account
        </h2>
        <form className="space-y-6" onSubmit={HandleSubmit}>
          {/* Name */}
          <div>
            <label className="block mb-1 text-blue-900 font-medium">
              Full Name
            </label>
            <input
              name="fullName"
              value={Data.fullName}
              onChange={HandleChange}
              type="text"
              className="w-full px-4 py-3 rounded-xl bg-white/60 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="John Doe"
              required
            />
            {
              error.fullName && <p className="text-sm text-red-500">{error.fullName}</p>
            }

          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 text-blue-900 font-medium">
              Email
            </label>
            <input
              name="email"
              value={Data.email}
              onChange={HandleChange}
              type="email"
              className="w-full px-4 py-3 rounded-xl bg-white/60 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="example@mail.com"
              required
            />
             {
              error.email && <p className="text-sm text-red-500">{error.email}</p>
            }
          </div>
          {/* phone */}
          <div>
            <label className="block mb-1 text-blue-900 font-medium">
              Mobile Number
            </label>
            <input
              name="phone"
              value={Data.phone}
              onChange={HandleChange}
              type="tel"
              className="w-full px-4 py-3 rounded-xl bg-white/60 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="0000000000"
              required
            />
             {
              error.phone && <p className="text-sm text-red-500">{error.phone}</p>
            }
          </div>

          {/* Gender */}
          <div>
            <label className="block mb-1 text-blue-900 font-medium">
              Gender
            </label>
            <div className="flex gap-6">
              <label className="flex items-center text-gray-800">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                    checked={Data.gender === "male"}
                  onChange={HandleChange}
                  className="mr-2"
                  required
                />
                Male
              </label>
              <label className="flex items-center text-gray-800">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                   checked={Data.gender === "female"}
                  onChange={HandleChange}
                  className="mr-2"
                  required
                />
                Female
              </label>
            </div>
          </div>

          {/* DOB */}
          <div>
            <label className="block mb-1 text-blue-900 font-medium">
              Date of Birth
            </label>
            <input
              name="dob"
              value={Data.dob}
              onChange={HandleChange}
              type="date"
              className="w-full px-4 py-3 rounded-xl bg-white/60 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            />
          </div>

          {/* Qualification */}
          <div>
            <label className="block mb-1 text-blue-900 font-medium">
              Qualification
            </label>
            <select
              name="qualification"
              value={Data.qualification}
              onChange={HandleChange}
              className="w-full px-4 py-3 rounded-xl bg-white/60 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            >
              <option value="">Select</option>
              <option value="highschool">High School</option>
              <option value="bachelors">Bachelors</option>
              <option value="masters">Masters</option>
              <option value="phd">PhD</option>
            </select>
          </div>

          {/* Department */}
          <div>
            <label className="block mb-1 text-blue-900 font-medium">
              Department
            </label>
            <select
              name="department"
              value={Data.department}
              onChange={HandleChange}
              className="w-full px-4 py-3 rounded-xl bg-white/60 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            >
              <option value="">Select</option>
              <option value="hr">HR</option>
              <option value="it">Information Technology</option>
              <option value="finance">Finance</option>
              <option value="marketing">Marketing</option>
              <option value="sales">Sales</option>
              <option value="operations">Operations</option>
              <option value="support">Customer Support</option>
            </select>
          </div>

          {/* Position */}
          <div>
            <label className="block mb-1 text-blue-900 font-medium">
              Position
            </label>
            <input
              name="position"
              value={Data.position}
              onChange={HandleChange}
              type="text"
              className="w-full px-4 py-3 rounded-xl bg-white/60 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="e.g. Team Lead"
              required
            />
          </div>

          {/* Hiring Date */}
          <div>
            <label className="block mb-1 text-blue-900 font-medium">
              Hiring Date
            </label>
            <input
              name="hiringDate"
              value={Data.hiringDate}
              onChange={HandleChange}
              type="date"
              className="w-full px-4 py-3 rounded-xl bg-white/60 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            />
          </div>

          {/* Salary */}
          <div>
            <label className="block mb-1 text-blue-900 font-medium">
              Salary (₹)
            </label>
            <input
              name="salary"
              value={Data.salary}
              onChange={HandleChange}
              type="number"
              className="w-full px-4 py-3 rounded-xl bg-white/60 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            />
          </div>

          {/* Create Password */}
          <div>
            <label className="block mb-1 text-blue-900 font-medium">
              Create Password
            </label>
            <input
              name="crPassword"
              value={Data.crPassword}
              onChange={HandleChange}
              type="password"
              className="w-full px-4 py-3 rounded-xl bg-white/60 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="********"
              required
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block mb-1 text-blue-900 font-medium">
              Confirm Password
            </label>
            <input
              name="password"
              value={Data.password}
              onChange={HandleChange}
              type="text"
              className="w-full px-4 py-3 rounded-xl bg-white/60 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="********"
              required
            />
             {
              error.password && <p className="text-sm text-red-500">{error.password}</p>
            }
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-3 rounded-full transition duration-300 shadow-xl"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
