
import Employee from "../models/employeeSchema.js";
import bcrypt from "bcrypt";

export const employeeRegister = async (req, res) => {
  try {
    const {
      fullName,
      email,
      phone,
      gender,
      dob,
      qualification,
      department,
      position,
      hiringDate,
      salary,
      password,
    } = req.body;

    if (
      !fullName ||
      !email ||
      !phone ||
      !gender ||
      !dob ||
      !qualification ||
      !department ||
      !position ||
      !hiringDate ||
      !salary ||
      !password
    ) {
      console.log("All Fields Required");
      res.status(400).json({ message: "All Fields Required", error });
      return;
    }

    // Check Already Exist Employee
    const previousUser = await Employee.find({ email });
    if (previousUser[0]) {
      let error = new Error("User already Exists");
      error.StatusCode = 400;
      res.status(400).json({ message: "Employee already Exists", error });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newEmployee = await Employee.create({
      fullName,
      email,
      phone,
      gender,
      dob,
      qualification,
      department,
      position,
      hiringDate,
      salary,
      password: hashedPassword,
      status: "Active",
      profilePic: "",
    });

    res.status(200).json({ message: "Employee Created", newEmployee });
  } catch (error) {
    console.log(error);
  }
};

// employee Login controller

export const employeeLogin = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    let error = new Error("All Fields Required");
    error.StatusCode = 400;
    res.status(400).json({ message: "All Fields Required" });
    return;
  }

  const employee = await Employee.find({ email });

  if (!employee[0]) {
    let error = new Error("Invalid Email/Password");
    error.StatusCode = 404;
    res.status(404).json({ message: "Invalid Email/Password" });
    return;
  }

  const verifyPassword = await bcrypt.compare(password, employee[0].password);
  if (!verifyPassword) {
    let error = new Error("Inavild Password");
    error.StatusCode = 404;
    res.status(404).json({ message: "Invalid Password" });
    return;
  }


  // Generate JWT 
  genAuthToken(User._id, res);
  

  res
    .status(200)
    .json({ message: `"Login Successfull Welcome Back ${employee[0].name}"` });
};
