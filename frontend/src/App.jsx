import { BrowserRouter,  Routes, Route } from "react-router-dom"
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import Departments from "./pages/Departments";
function App() {
 
  return (
    <>
    <BrowserRouter >
    <Routes >
    <Route path="/student/signup" element={<SignupPage />} />
    <Route path="/student/signin" element={<LoginPage />} />
    <Route path="/departments" element={<Departments />} />
    </Routes>
    </BrowserRouter>
    </>


  )
}

export default App
