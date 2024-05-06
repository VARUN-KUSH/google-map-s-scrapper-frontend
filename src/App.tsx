//import { useState } from 'react'
import AuthProvider from "./provider/authProvider"
import './App.css'
import Routes from "./routes";


function App() {
  //const [count, setCount] = useState(0)

  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  )
}

export default App
