import React, { useState } from 'react';

const ContactForm = () => {
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
    desc: '',
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
    <div className="max-w-4xl mx-auto p-4 md:p-10 xl:p-12 bg-[#ECECEA] my-12 rounded-xl">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-col md:flex-row gap-4 md:gap-12 lg:gap-20 xl:gap-20">
          {/* name */}
          <div className="md:w-1/2">
            <label htmlFor="fullName" className="input_label">
              Full Name *
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Enter Your Name"
              required
              value={formData.fullName}
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

        {/* services */}
        <div className="w-full">
          <label className="input_label">
            What services are you interested in? *
          </label>
          <div className="flex flex-col space-y-2 mt-2">
            <label>
              <input
                type="radio"
                name="services"
                value="Branding"
                checked={formData.services === 'Branding'}
                onChange={handleChange}
                required
              />{' '}
              Branding
            </label>
            <label>
              <input
                type="radio"
                name="services"
                value="Custom Website"
                checked={formData.services === 'Custom Website'}
                onChange={handleChange}
                required
              />{' '}
              Custom Website
            </label>
            <label>
              <input
                type="radio"
                name="services"
                value="Website in a Day"
                checked={formData.services === 'Website in a Day'}
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
                value="$1500 - $2000"
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
          <label htmlFor="desc" className="input_label">
            Tell us a little about your business & what you do.
          </label>
          <textarea
            id="desc"
            name="desc"
            placeholder="What is your mission & vision? What do you do & what do you offer? Do you have any background story, or dreams that you would like me to know about?"
            value={formData.desc}
            onChange={handleChange}
            className="input-field"
            rows="4"
          />
        </div>

        {/* submit button */}
        <div className="flex justify-end pt-6">
          <button
            type="submit"
            className="flex items-center hover:scale-90 duration-300 group text-white"
          >
            <span className="bg-themeDark group-hover:bg-themeDark px-12 py-3 rounded-full">
              Submit Now
            </span>
            <span className="bg-themeDark group-hover:bg-themeDark p-3 rounded-full">
              <img src="/images/common/button_arrow.png" alt="arrow down" />
            </span>
          </button>{' '}
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
