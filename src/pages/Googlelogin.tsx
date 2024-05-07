import { useGoogleLogin } from "@react-oauth/google";
//import React from "react";
//import { Button } from "~/components/ui/button";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../provider/authProvider";

const Googlelogin = ({value}:any) => {
  const navigate = useNavigate();
  const {setCurrentUser} = useContext(AuthContext)
 
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      console.log(tokenResponse);
      setCurrentUser(true)
      navigate("/home");
    },
    //for error handling
  });
  return (
    <div className="flex items-center justify-center dark:bg-gray-800">
      <button
        className="px-4 py-2 bg-black border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-neutral-50 dark:text-slate-200 hover:border-spacing-1 hover:border-white hover:text-neutral-100 dark:hover:text-slate-300 hover:shadow transition duration-150"
        onClick={() => {
         login();
        }}
      >
        <img
          className="w-6 h-6"
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          loading="lazy"
          alt="google logo"
        />
        <span>{value} with Google</span>
      </button>
    </div>
  );
};

export default Googlelogin;
