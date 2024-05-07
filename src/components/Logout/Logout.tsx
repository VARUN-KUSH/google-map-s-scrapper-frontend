
import { Button } from '../ui/button';
//import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../provider/authProvider";



const Logout = () => {
    //const navigate = useNavigate();
    const {setCurrentUser} = useContext(AuthContext)
    const handlelogout = () => {
      //const url = "http://localhost:8000/api/v1/users/logout";

      //   axios.post<any>(url)
        setCurrentUser((prev:any) => !prev)
      //   navigate("/login")
      }
  return (
    <div>
        <div>
            <Button onClick={handlelogout} className=''>Logout</Button>
      </div>
    </div>
  )
}

export default Logout