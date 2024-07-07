// import { useState, useEffect } from "react"
import { useParams, useLoaderData,useNavigate } from "react-router-dom";
import { FaArrowLeft, FaMapMarker } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import {toast} from "react-toastify";
//import Spinners from "../components/Spinners";

const JobPage = ({ deleteJob }) => {

  const { id } = useParams();
  const Job = useLoaderData();
  const navigate = useNavigate();
  
  const onDeleteClick = (jobId) => {
    const confirm = window.confirm("Are you sure you want to delete");

    if (!confirm) return;


    deleteJob(jobId)

    toast.success('Job deleted successfully')

    navigate('/Jobs')
  };
  return (
    <>
      <section>
        <div className="container m-auto py-6 px-6">
          <NavLink
            to="/jobs"
            className="text-indigo-500 hover:text-indigo-600 flex items-center"
          >
            <FaArrowLeft className="mr-2" /> Back to Job Listings
          </NavLink>
        </div>
      </section>

      <section className="bg-indigo-50">
        <div className="container m-auto py-10 px-6">
          <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
            <main>
              <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
                <div className="text-gray-500 mb-4">Full-Time</div>
                <h1 className="text-3xl font-bold mb-4">{Job.title}</h1>
                <div className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
                  <i className="fa-solid fa-location-dot text-lg text-orange-700 mr-2"></i>
                  <FaMapMarker className="text-orange-700 mr- 2 " />
                  {Job.location}
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-indigo-800 text-lg font-bold mb-6">
                  Job description
                </h3>

                <p className="mb-4">{Job.description}</p>

                <h3 className="text-indigo-800 text-lg font-bold mb-2">
                  Salary
                </h3>

                <p className="mb-4">{Job.salary}/ Year</p>
              </div>
            </main>

            {/* <!-- Sidebar --> */}
            <aside>
              {/* <!-- Company Info --> */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-6">Company Info</h3>

                <h2 className="text-2xl">{Job.company.name}</h2>

                <p className="my-2">
                  NewTek Solutions is a leading technology company specializing
                  in web development and digital solutions. We pride ourselves
                  on delivering high-quality products and services to our
                  clients while fostering a collaborative and innovative work
                  environment.
                </p>

                <hr className="my-4" />

                <h3 className="text-xl">Contact Email:</h3>

                <p className="my-2 bg-indigo-100 p-2 font-bold">
                  {Job.company.contactEmail}
                </p>

                <h3 className="text-xl">Contact Phone:</h3>

                <p className="my-2 bg-indigo-100 p-2 font-bold">
                  {Job.company.contactPhone}
                </p>
              </div>

              {/* <!-- Manage --> */}
              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-xl font-bold mb-6">Manage Job</h3>
                <NavLink
                  to={`/edit-job/${Job.id}`}
                  className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >
                  Edit Job
                </NavLink>
                <button
                  onClick={() => onDeleteClick(Job.id)}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >
                  Delete Job
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

const jobLoader = async ({ params }) => {
  const res = await fetch(`/api/Jobs/${params.id}`);
  const data = await res.json();
  return data;
};

export { JobPage as default, jobLoader };
