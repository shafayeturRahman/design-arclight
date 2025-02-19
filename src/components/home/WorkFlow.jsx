import Marquee from 'react-fast-marquee';
import image1 from '/images/common/workflow1.png';
import image2 from '/images/common/workflow2.png';
import image3 from '/images/common/workflow3.png';
import image4 from '/images/common/workflow4.png';
import image5 from '/images/common/workflow5.png';

const workFlowData = [
  {
    label: 'Top Notch Art Direction',
    image: image1,
  },
  {
    label: ' Design Expertise',
    image: image2,
  },
  {
    label: 'Swift Workflow',
    image: image3,
  },
  {
    label: 'Top Notch Art Direction',
    image: image1,
  },
  {
    label: 'track every step of the way',
    image: image4,
  },
  {
    label: 'No cookie-cutter solution',
    image: image5,
  },
  {
    label: 'Swift Workflow',
    image: image3,
  },
];

const WorkFlow = () => {
  return (
    <div className="w-full bg-theme text-white py-8">
      <Marquee speed={50}>
        {workFlowData.map((item, index) => (
          <div key={index} className="flex justify-center items-center mx-4">
            <div className="border border-[#576576] bg-[#445467] py-3 px-8 rounded-lg flex justify-center items-center gap-2">
              <img
                src={item.image}
                alt={`Slide ${index + 1}`}
                className="rounded-lg shadow-lg w-full"
              />
              <h5 className="text-nowrap opacity-75">{item.label}</h5>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default WorkFlow;
