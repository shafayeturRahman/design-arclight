import Marquee from 'react-fast-marquee';

const workFlowData = [
  {
    label: 'Top Notch Art Direction',
    image: '/images/common/star.png',
  },
  {
    label: 'Top Notch Art Direction',
    image: '/images/common/star.png',
  },
  {
    label: 'Top Notch Art Direction',
    image: '/images/common/star.png',
  },
  {
    label: 'Top Notch Art Direction',
    image: '/images/common/star.png',
  },
  {
    label: 'Top Notch Art Direction',
    image: '/images/common/star.png',
  },
  {
    label: 'Top Notch Art Direction',
    image: '/images/common/star.png',
  },
  {
    label: 'Top Notch Art Direction',
    image: '/images/common/star.png',
  },
  {
    label: 'Top Notch Art Direction',
    image: '/images/common/star.png',
  },
  {
    label: 'Top Notch Art Direction',
    image: '/images/common/star.png',
  },
  {
    label: 'Top Notch Art Direction',
    image: '/images/common/star.png',
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
