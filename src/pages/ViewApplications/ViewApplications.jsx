import { useEffect, useState } from "react";
import { data, useLoaderData, useParams } from "react-router-dom";

const ViewApplications = () => {
  const [applications, setApplications] = useState();
  //   const applications = useLoaderData();
  const params = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/job-applications/jobs/${params.job_id}`)
      .then((res) => res.json())
      .then((data) => setApplications(data));
  }, []);
  console.log(applications);
  return (
    <div>
      <h2 className="text-2xl">
        application for this job:{applications?.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {applications?.map((app, i) => (
              <tr key={app._id} className="bg-base-200">
                <th>{i + 1}</th>
                <td>{app.applicant_email}</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewApplications;
