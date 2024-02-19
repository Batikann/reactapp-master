import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import SignUp from './components/SignUp/SignUp.jsx'
import Login from './components/Login/Login.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import Homepage from './components/Homepage/Homepage.jsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/">
          <Route index element={<Homepage />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
          <Route path="test0" element={<Navbar />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
