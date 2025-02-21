import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Marquee from 'react-fast-marquee';
import { useQuery } from '@tanstack/react-query';

const texts = [
  `Brand design . web design.  website in a day .Brand design . web design.  website in a day . Brand design . web design.  website in a day .  Brand design . web design.  website in a day .  Brand design . web design.  website in a day .`,
  `Brand design . web design.  website in a day .Brand design . web design.  website in a day . Brand design . web design.  website in a day .  Brand design . web design.  website in a day .  Brand design . web design.  website in a day . `,
];
const PortfolioDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [projectData, setProjectData] = useState({});
  const params = useParams();
  const projectId = params.id;
  const imgUrl =
    'https://res.cloudinary.com/deqpfnzrp/image/upload/v1740149985';

  // Fetch project data
  const {
    data: project,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['project'],
    queryFn: async () => {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/api/projects/${projectId}`
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data.data || [];
    },
    onSuccess: (data) => {
      setProjectData(data);
    },
  });

  useEffect(() => {
    if (project) {
      setProjectData(project);
      console.log(project);
    }
  }, [project]);

  if (error) {
    toast.error(error.message);
    return <div>Error: {error.message}</div>;
  }
  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          {/* banner image */}
          <div>
            <img
              src={`${imgUrl}/${projectData?.bannerImage}`}
              alt="banner Image"
            />
          </div>

          {/* marquee */}
          <div className="w-full border-y border-[#577C8E] text-theme py-4">
            <Marquee speed={50}>
              {texts.map((item, i) => (
                <h4 key={i} className="text-lg capitalize">
                  {item}
                </h4>
              ))}
            </Marquee>
          </div>

          <div className="container">
            {/* top images */}
            <div className="flex flex-col md:flex-row gap-4 py-12 md:py-20">
              {projectData?.topImages?.length > 0 && (
                <>
                  <img
                    src={`${imgUrl}/${projectData.topImages[0] || ''}`}
                    alt="gallery image"
                    className="object-cover w-full md:w-[38%]"
                  />
                  <img
                    src={`${imgUrl}/${projectData.topImages[1] || ''}`}
                    alt="gallery image"
                    className="object-cover w-full md:w-[24%]"
                  />
                  <img
                    src={`${imgUrl}/${projectData.topImages[2] || ''}`}
                    alt="gallery image"
                    className="object-cover w-full md:w-[38%]"
                  />
                </>
              )}
            </div>

            {/* main image */}
            <div className="flex justify-center items-center py-12">
              <img
                src={`${imgUrl}/${projectData.mainImage || ''}`}
                alt="main image"
                className=""
              />
            </div>

            {/* bottom images */}
            <div className="flex flex-col md:flex-row gap-4 py-12 md:py-20">
              {projectData?.bottomImages?.length > 0 && (
                <>
                  <img
                    src={`${imgUrl}/${projectData.bottomImages[0] || ''}`}
                    alt="gallery image"
                    className="w-full object-cover md:w-[38%]"
                  />
                  <img
                    src={`${imgUrl}/${projectData.bottomImages[1] || ''}`}
                    alt="gallery image"
                    className="w-full object-cover md:w-[24%]"
                  />
                  <img
                    src={`${imgUrl}/${projectData.bottomImages[2] || ''}`}
                    alt="gallery image"
                    className="w-full object-cover md:w-[38%]"
                  />
                </>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default PortfolioDetails;
