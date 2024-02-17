import { Routes, Route } from "react-router-dom";
import "./index.css";
import Sidebar from "./sidebar/Sidebar";
import Home from "./home/Home";
import Header from "./header/Header";
import Dashboard from "./dashboard/Dashboard";
import Task from "./task/Task";
import Addstudent from "./addstudent/Addstudent";
import Add from "./addstudent/Add";
import Update from "./addstudent/Update";
import Delete from "./addstudent/Delete";
import Mainadd from "./addAdmin/Mainadd";
import Addadmin from "./addAdmin/Addadmin";
import Deleteadmin from "./addAdmin/Deleteadmin";
import Addclass from "./addClass/Addclass";
import Mainclass from "./addClass/Mainclass";
import Gotoclass from "./gotoclass/Gotoclass";
import Studentlist from "./studentList/Studentlist";
import Profile from "./login/Profile";

function App() {
  return (
    <div className="row">
      <div className="col-lg-1">
        <Sidebar />
      </div>
      <div className="col-lg-11">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dash" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/addStudent/" element={<Addstudent />} />
          <Route path="/addStudent/add" element={<Add />} />
          <Route path="/addStudent/update" element={<Update />} />
          <Route path="/addStudent/delete" element={<Delete />} />
          <Route path="/addAdmin" element={<Mainadd />} />
          <Route path="/addAdmin/add" element={<Addadmin />} />
          <Route path="/addAdmin/delelte" element={<Deleteadmin />} />
          <Route path="/addClass" element={<Mainclass />} />
          <Route path="/addClass/add" element={<Addclass />} />
          <Route path="/goToClass" element={<Gotoclass />} />
          <Route path="/studentList" element={<Studentlist />} />
          <Route path="/task" element={<Task />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
