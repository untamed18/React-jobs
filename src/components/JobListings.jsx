// import JobListing from "./JobListing";
// import Spinners from "./Spinners";  
// import { useState, useEffect } from "react";
// import Jobs from "./jobs";



// const JobListings = ({ isHome = false }) => {
//   const [Jobs, setJobs] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const apiUrl = isHome ? '/api/Jobs?_limit=3': '/api/Jobs'

//   useEffect(() => {
//     const fetchJobs = async()=>{
//       try {
//         const res = await fetch(apiUrl);
//       const data = await res.json()
     
//       setJobs(data)
//       } catch (error) {
//         console.log( " Error,fecthing data", error,)
//       }
//       finally{
//         setLoading(false)
//       }
//     }
//     fetchJobs()
//   }, []);

//   return (
//     <section className="bg-blue-50 px-4 py-10">
//       <div className="container-xl lg:container m-auto">
//         <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
//           Browse Jobs
//         </h2>
//           { loading ? (<Spinners loading={loading}/>) : 

//           (
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {Jobs.map((job) => (
//             <JobListing job={job} key={job.id} />
//           ))}
//            </div>
//           )}
//       </div>
//     </section>
//   );
// };

// export default JobListings;


import JobListing from "./JobListing";
import Spinners from "./Spinners";  
import { useState, useEffect } from "react";
import Jobs from "../assets/jobs.json";

console.log(Jobs)

const JobListings = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        // Filter Jobs based on isHome
        const data = isHome ? Jobs.slice(0, 3) : Jobs; // Limit to 3 jobs if isHome is true
        setJobs(data);
      } catch (error) {
        console.log("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, [isHome]);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          Browse Jobs
        </h2>
        {loading ? (
          <Spinners loading={loading} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <JobListing job={job} key={job.id} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default JobListings; 
