import mongoose from "mongoose";

mongoose.connect(process.env.DB_URL );

const userSchema = mongoose.Schema({
 firstName: {
    type: String,
    required: true,
    unique: false,
    lowercase: true,
    maxlength: 30,
    minlength: 2,
 },
 lastName: {
    type: String,
    required: true,
    unique: false,
    lowercase: true,
    maxlength: 30,
    minlength: 2,
 },
 email: {
    type: String,
    required: true, 
    unique: true,
 },
 password: {
    type: String,
    required: true,
    minlength: 6,
 },
 greviances: {
    type: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Greviance",
    }],
 }
})

const departmentSchema = new mongoose.Schema({
 title: {
    type: String,
    required: true,
    unique: true,
 },
 description: {
    type: String,
    required: true,
 },
 greviances: {
    type: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Greviance",
    }]
 },
 employees: {
    type: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Employee",
    }]
 }
})

const grevianceSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ["assigned, pending, resolved"],
        default: "pending",
    },
    department: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Department",
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }
})

//employee
const employeeSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50,
    },
    lastName: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    department: {
        type: {
            type: mongoose.Types.ObjectId,
            ref: "Department"
        }
    }
})

//admin's will have only login and we can get this through the db
const adminSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 10,
    }
})

const User = mongoose.model("User", userSchema);
const Employee = mongoose.model("Employee", employeeSchema);
const Admin = mongoose.model("Admin", adminSchema);
const Department = mongoose.model("Department", departmentSchema);
const Greviance = mongoose.model("Greviance", grevianceSchema);

export {User,Employee,Admin,Department,Greviance};