import React, { useEffect, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessName: '',
    socialMediaHandle: '',
    websiteURL: '',
    startDate: '',
    completionDate: '',
    interestedService: '',
    budget: '',
    description: '',
  });

  const mutation = useMutation({
    mutationFn: async (newContact) => {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/api/contact`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newContact),
        }
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      return response.json();
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(formData);
  };

  useEffect(() => {
    console.log('Mutation Status:', mutation.status);
    console.log(mutation.isLoading);
  }, [mutation.status, mutation.isLoading]);

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-10 xl:p-12 bg-[#ECECEA] my-12 rounded-xl">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-col md:flex-row gap-4 md:gap-12 lg:gap-20 xl:gap-20">
          {/* name */}
          <div className="md:w-1/2">
            <label htmlFor="name" className="input_label">
              Your Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter Your Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="input-field"
            />
          </div>
          {/* email */}
          <div className="md:w-1/2">
            <label htmlFor="email" className="input_label">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Your Email"
              required
              value={formData.email}
              onChange={handleChange}
              className="input-field"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 md:gap-12 lg:gap-20 xl:gap-20">
          {/* business name */}
          <div className="md:w-1/2">
            <label htmlFor="businessName" className="input_label">
              Business Name
            </label>
            <input
              type="text"
              id="businessName"
              name="businessName"
              placeholder="Your business name"
              value={formData.businessName}
              onChange={handleChange}
              className="input-field"
            />
          </div>
          {/* social media handle */}
          <div className="md:w-1/2">
            <label htmlFor="socialMediaHandle" className="input_label">
              Social Media Handle
            </label>
            <input
              type="text"
              id="socialMediaHandle"
              name="socialMediaHandle"
              placeholder="@yourhandlehere"
              value={formData.socialMediaHandle}
              onChange={handleChange}
              className="input-field"
            />
          </div>
        </div>

        {/* website url */}
        <div className="w-full">
          <label htmlFor="websiteURL" className="input_label">
            Website URL
          </label>
          <input
            type="url"
            id="websiteURL"
            name="websiteURL"
            placeholder="Your business website"
            value={formData.websiteURL}
            onChange={handleChange}
            className="input-field"
          />
        </div>

        <div className="flex flex-col md:flex-row gap-4 md:gap-12 lg:gap-20 xl:gap-20">
          {/* project start date */}
          <div className="md:w-1/2">
            <label htmlFor="startDate" className="input_label">
              Desired Project Start Date
            </label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              className="input-field"
            />
          </div>
          {/* project completion date */}
          <div className="md:w-1/2">
            <label htmlFor="completionDate" className="input_label">
              Desired Project Completion Date
            </label>
            <input
              type="date"
              id="completionDate"
              name="completionDate"
              value={formData.completionDate}
              onChange={handleChange}
              className="input-field"
            />
          </div>
        </div>

        {/* interestedService */}
        <div className="w-full">
          <label className="input_label">
            What service are you interested in? *
          </label>
          <div className="flex flex-col space-y-2 mt-2">
            <label>
              <input
                type="radio"
                name="interestedService"
                value="Branding"
                checked={formData.interestedService === 'Branding'}
                onChange={handleChange}
                required
              />{' '}
              Branding
            </label>
            <label>
              <input
                type="radio"
                name="interestedService"
                value="Custom Website"
                checked={formData.interestedService === 'Custom Website'}
                onChange={handleChange}
                required
              />{' '}
              Custom Website
            </label>
            <label>
              <input
                type="radio"
                name="interestedService"
                value="Website in a Day"
                checked={formData.interestedService === 'Website in a Day'}
                onChange={handleChange}
                required
              />{' '}
              Website in a Day
            </label>
          </div>
        </div>

        {/* budget */}
        <div className="w-full">
          <label className="input_label">
            What is your budget for the entire project? *
          </label>
          <div className="flex flex-col space-y-2  mt-2">
            <label>
              <input
                type="radio"
                name="budget"
                value="$1200 - $2000"
                checked={formData.budget === '$1500 - $2000'}
                onChange={handleChange}
                required
              />{' '}
              $1500 - $2000
            </label>
            <label>
              <input
                type="radio"
                name="budget"
                value="$2000 - $3600"
                checked={formData.budget === '$2000 - $3600'}
                onChange={handleChange}
                required
              />{' '}
              $2000 - $3600
            </label>
            <label>
              <input
                type="radio"
                name="budget"
                value="Whatever it takes!"
                checked={formData.budget === 'Whatever it takes!'}
                onChange={handleChange}
                required
              />{' '}
              Whatever it takes!
            </label>
          </div>
        </div>

        <div className="w-full">
          <label htmlFor="description" className="input_label">
            Tell us a little about your business & what you do.
          </label>
          <textarea
            id="description"
            name="description"
            placeholder="What is your mission & vision? What do you do & what do you offer? Do you have any background story, or dreams that you would like me to know about?"
            value={formData.description}
            onChange={handleChange}
            className="input-field"
            rows="4"
          />
        </div>

        {/* submit button */}
        <div className="flex justify-end pt-6">
          <button
            type="submit"
            className={`flex items-center group text-white ${
              mutation.status == 'pending'
                ? 'opacity-50 cursor-not-allowed'
                : 'hover:scale-90 duration-300'
            }`}
            disabled={mutation.isLoading}
          >
            <span className="bg-themeDark group-hover:bg-themeDark px-12 py-3 rounded-full">
              {mutation.status == 'pending' ? 'Submitting...' : 'Submit Now'}
            </span>
            <span className="bg-themeDark group-hover:bg-themeDark p-3 rounded-full">
              <img src="/images/common/button_arrow.png" alt="arrow down" />
            </span>
          </button>
        </div>

        {/* success message */}
        {mutation.isSuccess && (
          <p className="text-emerald-400">Your form was sent successfully!</p>
        )}
        {/* error message */}
        {mutation.isError && (
          <p className="text-red-400">
            Something went wrong! Form sending failed. Please contact at{' '}
            <Link
              className="underline text-blue-600"
              to="mailto:contact@designarclight.com"
            >
              contact@designarclight.com
            </Link>
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
