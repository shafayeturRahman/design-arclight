import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import SecButton from '../components/common/SecButton';
import { portfolioData } from '../data/staticPortfolioData';

const texts = [
  `Brand design . web design.  website in a day .Brand design . web design.  website in a day . Brand design . web design.  website in a day .  Brand design . web design.  website in a day .  Brand design . web design.  website in a day .`,
  `Brand design . web design.  website in a day .Brand design . web design.  website in a day . Brand design . web design.  website in a day .  Brand design . web design.  website in a day .  Brand design . web design.  website in a day . `,
];
const PortfolioDetails = () => {
  const [projectData, setProjectData] = useState({});
  const params = useParams();
  const projectId = params.id;

  useEffect(() => {
    window.scrollTo(0, 0);
    const project = portfolioData.find((item) => item.id === Number(projectId));
    setProjectData(project || {});
    console.log(project);
  }, [projectId]);

  return (
    <>
      <>
        {/* banner image */}
        <div>
          <img src={projectData?.bannerImage} alt="banner Image" />
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
          {/* content */}
          <div className="flex flex-col-reverse md:flex-row justify-between md:items-center gap-4 my-12">
            <div className="md:max-w-[350%] flex flex-col gap-y-4 md:gap-y-8">
              {/* study */}
              <div>
                <h4 className="text-xl md:text-2xl font-semibold pl-1.5 mb-3">
                  Case Study
                </h4>
                <h5 className="border border-themeGray rounded-full py-2.5 px-4 text-center leading-none text-sm font-semibold capitalize inline-flex">
                  {projectData?.study}
                </h5>
              </div>
              {/* platform */}
              <div>
                <h4 className="text-xl md:text-2xl font-semibold pl-1.5 mb-3">
                  CMS Platform
                </h4>
                <h5 className="border border-themeGray rounded-full py-2.5 px-4 text-center leading-none text-sm font-semibold capitalize inline-flex">
                  {projectData?.platform}
                </h5>
              </div>
              {/* vibe */}
              <div>
                <h4 className="text-xl md:text-2xl font-semibold pl-1.5 mb-3">
                  Vibe
                </h4>
                <h5 className="border border-themeGray rounded-full py-2.5 px-4 text-center !leading-[1.3] text-sm font-semibold capitalize inline-flex">
                  {projectData?.vibe}
                </h5>
              </div>
            </div>

            {/* title and desc */}
            <div className="md:max-w-[35%] flex justify-between flex-col gap-y-4 mb-12 md:mb-0">
              <h4 className="text-2xl font-medium font-theme md:mb-12">
                {projectData?.title}
              </h4>
              <div>
                <p>{projectData?.desc}</p>
                <div className="mt-8">
                  <SecButton />
                </div>
              </div>
            </div>
          </div>
          {/* top images */}
          <div className="flex flex-col md:flex-row gap-4 py-12 md:py-20">
            {projectData?.topImages?.length > 0 && (
              <>
                <img
                  src={projectData.topImages[0] || ''}
                  alt="gallery image"
                  className="object-cover w-full md:w-[38%]"
                />
                <img
                  src={projectData.topImages[1] || ''}
                  alt="gallery image"
                  className="object-cover w-full md:w-[24%]"
                />
                <img
                  src={projectData.topImages[2] || ''}
                  alt="gallery image"
                  className="object-cover w-full md:w-[38%]"
                />
              </>
            )}
          </div>

          {/* main image */}
          <div className="flex justify-center items-center py-12">
            <img
              src={projectData?.mainImage || ''}
              alt="main image"
              className=""
            />
          </div>

          {/* bottom images */}
          <div className="flex flex-col md:flex-row gap-4 pt-12 md:pt-20">
            {projectData?.bottomImages?.length > 0 && (
              <>
                <img
                  src={projectData.bottomImages[0] || ''}
                  alt="gallery image"
                  className="w-full object-cover md:w-1/2"
                />
                <div className="w-full md:w-1/2 flex flex-col gap-y-4">
                  <img
                    src={projectData.bottomImages[1] || ''}
                    alt="gallery image"
                    className="w-full object-cover"
                  />
                  <img
                    src={projectData.bottomImages[2] || ''}
                    alt="gallery image"
                    className="w-full object-cover"
                  />
                </div>
              </>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
            {projectData?.bottomImages?.length > 0 && (
              <>
                {/* Left large image (1/3 width) */}
                <img
                  src={projectData.bottomImages[3] || ''}
                  alt="gallery image"
                  className="w-full h-full object-cover"
                />

                {/* Middle stacked images (1/3 width) */}
                <div className="grid grid-rows-2 gap-y-4">
                  <img
                    src={projectData.bottomImages[4] || ''}
                    alt="gallery image"
                    className="w-full h-full object-cover"
                  />
                  <img
                    src={projectData.bottomImages[5] || ''}
                    alt="gallery image"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Right large image (1/3 width) */}
                <img
                  src={projectData.bottomImages[6] || ''}
                  alt="gallery image"
                  className="w-full h-full object-cover"
                />
              </>
            )}
          </div>
        </div>
      </>
    </>
  );
};

export default PortfolioDetails;
