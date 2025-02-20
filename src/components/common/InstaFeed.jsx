import React from 'react';
import { FaInstagram } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';

const instaData = []; // Initialize as empty array

const InstaFeed = () => {
  // Fetch Instagram posts
  React.useEffect(() => {
    const fetchInstaPosts = async () => {
      try {
        const response = await fetch('YOUR_INSTAGRAM_API_ENDPOINT'); // Replace with your API endpoint
        const data = await response.json();
        // Assuming data contains an array of posts with image URLs
        const posts = data.map((post) => ({ image: post.imageUrl })); // Adjust according to your API response
        // setInstaData(posts); // Update state with fetched posts
      } catch (error) {
        console.error('Error fetching Instagram posts:', error);
      }
    };

    fetchInstaPosts();
  }, []);

  return (
    <div className="mt-12">
      <Link
        to={`https://www.instagram.com/design.arclight/`}
        target="_blank"
        className="flex justify-center items-center gap-4 mb-4 hover:text-cyan-500"
      >
        <div className="text-lg p-2 border bg-themeLight rounded-full border-themeMedium">
          <FaInstagram />
        </div>
        <span>designarclight</span>
      </Link>
      <Marquee speed={30}>
        {instaData.map((item, i) => (
          <div key={i} className="flex justify-center items-center mx-2">
            <div className="">
              <img
                src={item.image}
                alt={`Insta image`}
                className="rounded w-full"
              />
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default InstaFeed;
