import mongoose from "mongoose";

const employeeSchema = mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    dob: {
      type: String,
      required: true,
    },
    qualification: {
      type: String,
      required: true,
    },
    department: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    hiringDate: {
      type: String,
      required: true,
    },
    salary: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["Active", "Suspended", "Terminated", "Retired", "Resigned"],
      required: true,
      default: "Active",
    },
    profilePic: {
      type: String,
    },
  },
  { timestamps: true }
);

const employee = mongoose.model("employee", employeeSchema);

export default employee;