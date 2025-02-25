import { useMutation } from '@tanstack/react-query';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const AddProject = () => {
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

  const handleImageChange = (e, setImage, multiple = false) => {
    if (multiple) {
      setImage([...e.target.files]);
    } else {
      setImage(e.target.files[0]);
    }
  };

  const addProjectMutation = useMutation({
    mutationFn: async (newProject) => {
      const formData = new FormData();
      formData.append('title', newProject.title);
      formData.append('desc', newProject.desc);
      formData.append('category', newProject.category);
      formData.append('study', newProject.study);
      formData.append('platform', newProject.platform);
      formData.append('vibe', newProject.vibe);
      formData.append('bannerImage', newProject.bannerImage);
      formData.append('mainImage', newProject.mainImage);
      formData.append('showImage', newProject.showImage);
      newProject.topImages.forEach((image) =>
        formData.append('topImages', image)
      );
      newProject.bottomImages.forEach((image) =>
        formData.append('bottomImages', image)
      );

      const response = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/api/projects`,
        {
          method: 'POST',
          body: formData,
        }
      );

      if (!response.ok) {
        setIsLoading(false);
        const errorData = await response.json();
        toast.error(errorData.message || 'Failed to add project');
        throw new Error(
          errorData.message || `Failed to add project: ${response.status}`
        );
      }

      return response.json();
    },
    onSuccess: () => {
      setIsLoading(false);
      // Reset form fields
      setTitle('');
      setDesc('');
      setCategory('');
      setStudy('');
      setPlatform('');
      setVibe('');
      setBannerImage(null);
      setShowImage(null);
      setMainImage(null);
      setTopImages([]);
      setBottomImages([]);
      toast.success('Project added successfully');
    },
    onError: (error) => {
      setIsLoading(false);
      toast.error(error.message || 'Failed to add project');
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    addProjectMutation.mutate({
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
          <h2 className="text-2xl font-bold text-center mb-4">
            Add New Project
          </h2>
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            {/* title */}
            <div className="mb-4">
              <label className="block text-white mb-2">Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-2 rounded bg-gray-600 focus:outline-none focus:bg-gray-500"
                required
              />
            </div>
            {/* desc */}
            <div className="mb-4">
              <label className="block text-white mb-2">Description</label>
              <textarea
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                className="w-full p-2 rounded bg-gray-600 focus:outline-none focus:bg-gray-500"
                required
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
                  required
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
                  required
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
                  required
                />
              </div>
              {/* category */}
              <div className="mb-4">
                <label className="block text-white mb-2">Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full p-2 rounded bg-gray-600 focus:outline-none focus:bg-gray-500"
                  required
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
                  required
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
                  required
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
                  required
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
                  required
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
                required
              />
            </div>

            <button
              type="submit"
              className="w-full p-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded"
              disabled={isLoading}
            >
              {isLoading ? 'Adding...' : 'Add Project'}
            </button>
          </form>
        </div>{' '}
      </div>
    </div>
  );
};

export default AddProject;
