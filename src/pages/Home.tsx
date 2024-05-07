import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "~/components/ui/input";
//import { Button } from "~/components/ui/button";
import axios from "axios";
import Loader from "../components/Loader/Loader";
import { useState } from "react";
import Buttons from "~/components/animated/button";
import Pagination from "~/components/pagination/Pagination";
import { FormLabel } from "../components/ui/form-label";
import Logout from "~/components/Logout/Logout";
import Multiselectbutton from "~/components/multiselect/Multiselectbutton";



type Inputs = {
  country: string;
  cityName: string;
  keyword: string;
};

export default function Home(): any {
  const [posts, setPosts] = useState<any>(null);
  const [loading, setLoading] = useState<any>(false);
  //const [currentPage, setCurrentPage] = useState<any>(1);
  //const [postsPerPage, setPostsPerPage] = useState<any>(10);
  const { register, handleSubmit } = useForm<Inputs>();
  

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    setPosts("")
    setLoading(true);
    const jsonData = JSON.stringify(data);
    const url = "/api/v1/home/datascrape";

    axios
      .post(url, jsonData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response: any) => {
        const data = response.data;

        console.log(response);
        setPosts(data);
        console.log(posts);
        setLoading(false);
        console.log(posts);
      })
      .catch();
  };

  

  return (
    <div className="w-full box-border">

      <div className="mr-8">
        <Logout/>
      </div>
        <div className="">
          <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
              <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                      <FormLabel
                        htmlFor="name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Country
                      </FormLabel>
                      <Input
                        id="name"
                        placeholder="fill your country name"
                        {...register("country", { required: true })}
                      />
                    </div>
                    <div>
                      <FormLabel
                        htmlFor="cityname"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        City
                      </FormLabel>
                      <Input
                        id="cityname"
                        {...register("cityName", { required: true })}
                      />
                    </div>
                    <div>
                      <FormLabel
                        htmlFor="keyword"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Keyword
                      </FormLabel>
                      <Input
                        id="keyword"
                        {...register("keyword", { required: true })}
                      />
                      
                      <div>
                        <Buttons/>
                      </div>
                      
                      
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div>
          {posts ? <Multiselectbutton posts={posts}/>: null}
        </div>
        
        <div>
            {loading ? <Loader /> : posts ? <Pagination posts={posts} /> : []}
        </div>
     
    </div>
  );
}


