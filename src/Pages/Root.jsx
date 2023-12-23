import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar";

const Root = () => {
  return (
    <div className="font-poppins max-w-6xl mx-auto px-3 lg:px-0">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
