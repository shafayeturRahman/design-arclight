import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import ProjectCard from '../../components/ProjectCard';

const Dashboard = () => {
  const [allProjects, setAllProjects] = useState([]);

  // Fetch all projects
  const {
    data: projects,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['projects'],
    queryFn: async () => {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/api/projects`
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data.data || [];
    },
    onSuccess: (data) => {
      setAllProjects(data);
    },
  });

  useEffect(() => {
    if (projects) {
      setAllProjects(projects);
    }
  }, [projects]);

  if (error) {
    toast.error(error.message);
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <header className="bg-gray-800 p-4 flex flex-col lg:flex-row gap-4 justify-between items-center mt-1 md:mt-0">
        <h2 className="text-xl font-semibold text-white">Welcome Farzana!</h2>
        <Link
          to={`/add-project`}
          className="p-2 px-4 bg-cyan-600 hover:bg-cyan-500 text-white rounded text-center"
        >
          + Add New Project
        </Link>
      </header>

      {isLoading ? (
        <div className="m-4">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 p-4">
          {allProjects.length !== 0 ? (
            allProjects.map((project) => (
              <div className="h-full" key={project._id}>
                <ProjectCard project={project} />
              </div>
            ))
          ) : (
            <div>
              No Project to show. Please add a project.{' '}
              <Link
                className="underline text-cyan-600 text-nowrap"
                to={`/add-project`}
              >
                Add Project
              </Link>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Dashboard;
