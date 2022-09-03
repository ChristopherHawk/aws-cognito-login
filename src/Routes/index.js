
import { Routes, Route } from "react-router-dom";
import {Home, Login, PrincipalView, SignUp, SuccessView} from "../views/index";

function RoutesFile() {
  return (
    <div className="master-conatiner">
   {/*  NavBar  */}

   {/* Routes */}
    <Routes>
      <Route path="/" element={<PrincipalView/>} />
      <Route path="/sign-up" element={< SignUp/>} />
      <Route path="/success" element={<SuccessView/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/home" element={<Home />} />
    </Routes>
  </div>
  );
}

export default RoutesFile;
