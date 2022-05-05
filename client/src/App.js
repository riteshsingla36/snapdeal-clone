import { Route, Routes } from "react-router-dom";
import UserPrivateComponent from "./Components/UserPrivateComponent";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route element={<UserPrivateComponent />}>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
}

export default App;
