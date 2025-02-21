import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const ProjectCard = ({ project }) => {
  console.log(project);
  const { showImage, title, desc, category, _id } = project;
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: async (projectId) => {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/api/projects/${projectId}`,
        {
          method: 'DELETE',
        }
      );

      if (!response.ok) {
        throw new Error('Failed to delete event');
      }

      return projectId;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] });
      toast.success('Project deleted successfully');
    },
    onError: (error) => {
      toast.error(error.message || 'Failed to delete Project');
    },
  });

  const handleDelete = (projectId) => {
    if (window.confirm('Are you sure you want to delete this Project?')) {
      deleteMutation.mutate(projectId);
    }
  };

  const handleEdit = (id) => {
    navigate(`/edit-project/${id}`);
  };

  return (
    <div className="rounded-xl overflow-hidden ring-1">
      <img src={showImage} alt="" className="w-full h-44 object-cover" />
      <div className="p-4">
        <h4 className="font-theme font-medium text-xl md:text-2xl">{title}</h4>
        <p className="line-clamp-2">{desc}</p>
        <p>
          Category:{' '}
          <span className="border rounded-full border-emerald-500 py-1 px-2 text-xs">
            {category}
          </span>
        </p>

        <div className="flex gap-x-4 mt-6">
          <button
            className="text-cyan-400 hover:scale-125 duration-300"
            onClick={() => handleEdit(_id)}
          >
            <FaEdit />
          </button>
          <button
            className="text-red-400 hover:scale-125 duration-300"
            onClick={() => handleDelete(_id)}
          >
            <FaTrash />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
