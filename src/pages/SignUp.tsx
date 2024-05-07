import { FormLabel } from "../components/ui/form-label";
import { Input } from "~/components/ui/input";
//import { Button, type ButtonProps } from "../components/ui/button";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../provider/authProvider";
import Googlelogin from "./Googlelogin";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";


export const Signup = () => {
    const { register, handleSubmit } = useForm<any>();
    const navigate = useNavigate();
    const {setCurrentUser} = useContext(AuthContext)
   
    const onSubmit: SubmitHandler<any> = (data) => {
        console.log(data);
    
        const jsonData = JSON.stringify(data);
        const url = "/api/v1/users/register";
    
        axios
          .post<any>(url, jsonData, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((response: any) => {
            console.log(response.data);
            console.log(response.data.statusCode);
            const responseData = response.data;
            if(responseData) {
              setCurrentUser((prev:any) => !prev);
              navigate("/home"); // Use useNavigate and state for tokens
            }
              
           
          })
          .catch((error) => {
            // Handle various error scenarios
            if (error.response) {
              // Request made and server responded with a status code that falls out of the range of 2xx
              console.error("API request error:", error.response.data);
              alert(`API request failed with status: ${error.response.status}`);
            } else if (error.request) {
              // The request was made but no response was received
              console.error("Network error:", error.request);
              alert(
                "An error occurred while communicating with the server. Please check your network connection and try again."
              );
            } else {
              // Something happened in setting up the request that triggered an Error
              console.error("Error preparing request:", error.message);
              //alert("An unexpected error occurred. Please try again later.");
            }
          });
      };
    
  return (
    <section className="bg-gray-50 md:h-screen dark:bg-gray-900">
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
        <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo"/>
            Map's Scrapper 
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Create and account
                </h1>
                <Googlelogin value="Sign up"/>
              
                <form className="space-y-4 md:space-y-6"  onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <FormLabel htmlFor="name">full Name</FormLabel>
                    <Input id="name" placeholder="name"  {...register("fullName", { required: true })} />
                </div>
                <div>
                    <FormLabel htmlFor="name">Your email</FormLabel>
                    <Input id="name" placeholder="name@company.com"  {...register("email", { required: true })} />
                 </div>
                 <div>
                    <FormLabel htmlFor="name">Password</FormLabel>
                    <Input id="name" placeholder="*******"  {...register("password", { required: true })} />
                </div>
                <div>
                    <FormLabel htmlFor="name">Confirm password</FormLabel>
                    <Input id="name" placeholder="********"  {...register("password", { required: true })} />
                </div>
                    
                    <button type="submit" className="w-full text-white bg-black hover:bg-neutral-950 focus:ring-4 focus:outline-none focus:ring-neutral-950 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                        Already have an account? <a href="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
                    </p>
                </form>
            </div>
        </div>
    </div>
  </section>
  );
};