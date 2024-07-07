import HomePage from "./pages/HomePage";
import MainLayOut from "./layouts/MainLayOut";
import JobsPage from "./pages/JobsPage";
import NotFound from "./pages/NotFound";
import AddJobPage from "./pages/AddJobPage";
import JobPage, { jobLoader } from "./pages/JobPage";
import EditJobPage from "./pages/EditJobPage";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

const App = () => {
  const addJob = async (newJob) =>{
    const res = await fetch('/api/Jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newJob)
    });
    return;
 };

   // Delete job

 
  const deleteJob = async (id) => {

      const res = await fetch(`/api/Jobs/${id}`, {
        method: 'DELETE',
      });
      return;

  }


  const updateJob = async (job) => {
      const res = await fetch(`/api/Jobs/${job.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(job)
      });
      return;
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayOut />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/add-job" element={<AddJobPage addJobsubmit={addJob} />} />
        <Route path="/jobs/:id" element={<JobPage deleteJob={deleteJob}/>} loader={jobLoader} />
        <Route path="/edit-job/:id" element={<EditJobPage updateJobsubmit={updateJob} />} loader={jobLoader} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
