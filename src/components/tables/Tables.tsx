import React from 'react'

const Tables = ({tabledata}:any) => {
  return (
    <div>
        <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
    <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
        
        <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
          
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-4 py-3">name</th>
                            <th scope="col" className="px-4 py-3">Mob no.</th>
                            <th scope="col" className="px-4 py-3">Website</th>
                            <th scope="col" className="px-4 py-3">Reviews</th>
                            <th scope="col" className="px-4 py-3">Stars</th>
                            <th scope="col" className="px-4 py-3">Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b dark:border-gray-700">
                            <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">{tabledata.title}</th>
                            <td className="px-4 py-3">{tabledata.phone}</td>
                            <td className="px-4 py-3">{tabledata.website}</td>
                            <td className="px-4 py-3">{tabledata.reviews}</td>
                            <td className="px-4 py-3">{tabledata.stars}</td>
                            <td className="px-4 py-3 ">{tabledata.link}</td>
                        </tr>
                      
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    </section>
    </div>
  )
}

export default Tables