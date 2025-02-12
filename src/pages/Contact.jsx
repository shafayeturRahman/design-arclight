import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    businessName: '',
    socialMediaHandle: '',
    websiteURL: '',
    startDate: '',
    completionDate: '',
    services: '',
    budget: '',
    businessDescription: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex space-x-4">
          <div className="w-1/2">
            <label htmlFor="fullName" className="block mb-1">
              Full Name *
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
          <div className="w-1/2">
            <label htmlFor="email" className="block mb-1">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
        </div>
        <div className="flex space-x-4">
          <div className="w-1/2">
            <label htmlFor="businessName" className="block mb-1">
              Business Name
            </label>
            <input
              type="text"
              id="businessName"
              name="businessName"
              value={formData.businessName}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
          <div className="w-1/2">
            <label htmlFor="socialMediaHandle" className="block mb-1">
              Social Media Handle
            </label>
            <input
              type="text"
              id="socialMediaHandle"
              name="socialMediaHandle"
              value={formData.socialMediaHandle}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
        </div>
        <div className="w-full">
          <label htmlFor="websiteURL" className="block mb-1">
            Website URL
          </label>
          <input
            type="url"
            id="websiteURL"
            name="websiteURL"
            value={formData.websiteURL}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>
        <div className="flex space-x-4">
          <div className="w-1/2">
            <label htmlFor="startDate" className="block mb-1">
              Desired Project Start Date
            </label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
          <div className="w-1/2">
            <label htmlFor="completionDate" className="block mb-1">
              Desired Project Completion Date
            </label>
            <input
              type="date"
              id="completionDate"
              name="completionDate"
              value={formData.completionDate}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
        </div>
        <div className="w-full">
          <label htmlFor="services" className="block mb-1">
            What services are you interested in? *
          </label>
          <select
            id="services"
            name="services"
            required
            value={formData.services}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
          >
            <option value="">Select a service</option>
            <option value="Branding">Branding</option>
            <option value="Custom Website">Custom Website</option>
            <option value="Website in a Day">Website in a Day</option>
          </select>
        </div>
        <div className="w-full">
          <label htmlFor="budget" className="block mb-1">
            What is your budget for the entire project? *
          </label>
          <select
            id="budget"
            name="budget"
            required
            value={formData.budget}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
          >
            <option value="">Select a budget</option>
            <option value="$1500 - $2000">$1500 - $2000</option>
            <option value="$2000 - $3600">$2000 - $3600</option>
            <option value="Whatever it takes!">Whatever it takes!</option>
          </select>
        </div>
        <div className="w-full">
          <label htmlFor="businessDescription" className="block mb-1">
            Tell us a little about your business & what you do.
          </label>
          <textarea
            id="businessDescription"
            name="businessDescription"
            value={formData.businessDescription}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            rows="4"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
