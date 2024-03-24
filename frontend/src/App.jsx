import { BrowserRouter, Routes, Route } from "react-router-dom"
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import Departments from "./pages/Departments";
import ApplyGreviance from "./pages/ApplyGreviance";
import Greviances from "./pages/Greviances";
import Home from "./pages/Home";

function App() {

  return (
    <>
      <BrowserRouter >
        <Routes >
          <Route path="/student/signup" element={<SignupPage />} />
          <Route path="/student/signin" element={<LoginPage />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/ApplyGreviance" element={<ApplyGreviance />} />
          <Route path="/greviances" element={<Greviances />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>


  )
}

export default App
