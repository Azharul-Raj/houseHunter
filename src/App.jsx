import { Route,Routes } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import SignIn from "./pages/Authentication/Login"
import SignUp from "./pages/Authentication/SignUp"

function App() {
  

  return (
    <>
      <Route path="/" element={<MainLayout/>}>
        <Route path="/login" element={<SignIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
      </Route>
    </>
  )
}

export default App
