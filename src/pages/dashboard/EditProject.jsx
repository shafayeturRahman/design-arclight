import { useMutation } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const EditProject = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [category, setCategory] = useState('');
  const [study, setStudy] = useState('');
  const [platform, setPlatform] = useState('');
  const [vibe, setVibe] = useState('');
  const [bannerImage, setBannerImage] = useState(null);
  const [showImage, setShowImage] = useState(null);
  const [mainImage, setMainImage] = useState(null);
  const [topImages, setTopImages] = useState([]);
  const [bottomImages, setBottomImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const params = useParams();
  const projectId = params.id;

  useEffect(() => {
    const fetchProjectData = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/api/projects/${projectId}`
      );
      if (response.ok) {
        const data = await response.json();
        const projectData = data.data;
        setTitle(projectData.title);
        setDesc(projectData.desc);
        setCategory(projectData.category);
        setStudy(projectData.study);
        setPlatform(projectData.platform);
        setVibe(projectData.vibe);
        setBannerImage(projectData.bannerImage);
        setShowImage(projectData.showImage);
        setMainImage(projectData.mainImage);
        setTopImages(projectData.topImages);
        setBottomImages(projectData.bottomImages);
      } else {
        toast.error('Failed to fetch project data');
      }
    };

    fetchProjectData();
  }, [projectId]);

  const handleImageChange = (e, setImage, multiple = false) => {
    if (multiple) {
      setImage([...e.target.files]);
    } else {
      setImage(e.target.files[0]);
    }
  };

  const editProjectMutation = useMutation({
    mutationFn: async (updatedProject) => {
      const formData = new FormData();
      formData.append('title', updatedProject.title);
      formData.append('desc', updatedProject.desc);
      formData.append('category', updatedProject.category);
      formData.append('study', updatedProject.study);
      formData.append('platform', updatedProject.platform);
      formData.append('vibe', updatedProject.vibe);
      formData.append('bannerImage', updatedProject.bannerImage);
      formData.append('mainImage', updatedProject.mainImage);
      formData.append('showImage', updatedProject.showImage);
      updatedProject.topImages.forEach((image) =>
        formData.append('topImages', image)
      );
      updatedProject.bottomImages.forEach((image) =>
        formData.append('bottomImages', image)
      );

      const response = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/api/projects/${projectId}`,
        {
          method: 'PATCH',
          body: formData,
        }
      );

      if (!response.ok) {
        setIsLoading(false);
        const errorData = await response.json();
        toast.error(errorData.message || 'Failed to update project');
        throw new Error(
          errorData.message || `Failed to update project: ${response.status}`
        );
      }

      return response.json();
    },
    onSuccess: () => {
      setIsLoading(false);
      toast.success('Project updated successfully');
    },
    onError: (error) => {
      setIsLoading(false);
      toast.error(error.message || 'Failed to update project');
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    editProjectMutation.mutate({
      title,
      desc,
      category,
      study,
      platform,
      vibe,
      showImage,
      bannerImage,
      mainImage,
      topImages,
      bottomImages,
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12">
      <div className="container max-w-3xl">
        <div className="w-full p-4 bg-theme text-white rounded-xl">
          <h2 className="text-2xl font-bold text-center mb-4">Edit Project</h2>
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            {/* title */}
            <div className="mb-4">
              <label className="block text-white mb-2">Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-2 rounded bg-gray-600 focus:outline-none focus:bg-gray-500"
              />
            </div>
            {/* desc */}
            <div className="mb-4">
              <label className="block text-white mb-2">Description</label>
              <textarea
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                className="w-full p-2 rounded bg-gray-600 focus:outline-none focus:bg-gray-500"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-x-4">
              {/* Study */}
              <div className="mb-4">
                <label className="block text-white mb-2">Study</label>
                <input
                  type="text"
                  value={study}
                  placeholder="elegant, classic, romantic, elevated, timeless"
                  onChange={(e) => setStudy(e.target.value)}
                  className="w-full p-2 rounded bg-gray-600 focus:outline-none focus:bg-gray-500"
                />
              </div>
              {/* platform */}
              <div className="mb-4">
                <label className="block text-white mb-2">Platform</label>
                <input
                  type="text"
                  value={platform}
                  placeholder="elegant, classic, romantic, elevated, timeless"
                  onChange={(e) => setPlatform(e.target.value)}
                  className="w-full p-2 rounded bg-gray-600 focus:outline-none focus:bg-gray-500"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-x-4">
              {/* vibe */}
              <div className="mb-4">
                <label className="block text-white mb-2">Vibe</label>
                <input
                  type="text"
                  value={vibe}
                  placeholder="elegant, classic, romantic, elevated, timeless"
                  onChange={(e) => setVibe(e.target.value)}
                  className="w-full p-2 rounded bg-gray-600 focus:outline-none focus:bg-gray-500"
                />
              </div>
              {/* category */}
              <div className="mb-4">
                <label className="block text-white mb-2">Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full p-2 rounded bg-gray-600 focus:outline-none focus:bg-gray-500"
                >
                  <option value="" defaultSelected hidden>
                    Select Category
                  </option>
                  <option value="branding">Branding</option>
                  <option value="custom-website">Custom Website</option>
                  <option value="website-in-a-day">Website In A Day</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-x-4">
              {/* show image */}
              <div className="mb-4">
                <label className="block text-white mb-2">Show Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageChange(e, setShowImage)}
                  className="w-full p-2 rounded bg-gray-600"
                />
              </div>
              {/* banner image */}
              <div className="mb-4">
                <label className="block text-white mb-2">Banner Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageChange(e, setBannerImage)}
                  className="w-full p-2 rounded bg-gray-600"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-x-4">
              {/* main image */}
              <div className="mb-4">
                <label className="block text-white mb-2">Main Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageChange(e, setMainImage)}
                  className="w-full p-2 rounded bg-gray-600"
                />
              </div>
              {/* top images */}
              <div className="mb-4">
                <label className="block text-white mb-2">Top Images(3)</label>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={(e) => handleImageChange(e, setTopImages, true)}
                  className="w-full p-2 rounded bg-gray-600"
                />
              </div>
            </div>

            {/* bottom images */}
            <div className="mb-4">
              <label className="block text-white mb-2">Bottom Images(7)</label>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={(e) => handleImageChange(e, setBottomImages, true)}
                className="w-full p-2 rounded bg-gray-600"
              />
            </div>

            <button
              type="submit"
              className="w-full p-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded"
              disabled={isLoading}
            >
              {isLoading ? 'Updating...' : 'Update Project'}
            </button>
          </form>
        </div>{' '}
      </div>
    </div>
  );
};

export default EditProject;
