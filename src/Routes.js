import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="add" element={<AddUser />} />
      <Route path="edit" element={<EditUser />} />
    </Routes>
  );
};

export default MyRoutes;
