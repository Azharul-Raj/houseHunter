import { Route,Routes } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import SignIn from "./pages/Authentication/Login"
import SignUp from "./pages/Authentication/SignUp"
import SearchModal from "./components/Model/SearchModal"

function App() {
  

  return (
    <>
    <SearchModal/>
    <Routes>
      <Route path="/" element={<MainLayout/>}>
        <Route path="/login" element={<SignIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
      </Route>
      </Routes>
    </>
  )
}

export default App
