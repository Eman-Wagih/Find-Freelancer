import React from "react";
import { Freelancer } from "./types/Freelancer";
import Star from "./star";


const FreelancerCard = ({ freelancer }: { freelancer: Freelancer }) => {
  return (
   <div className="border border-gray-200 rounded-lg shadow-sm bg-white hover:shadow-md transition flex flex-col p-2">
  <div className="w-full h-40 overflow-hidden rounded-t-lg">
    <img
      src={freelancer.backgroundPhoto}
      alt={freelancer.name}
      className="w-full h-full object-cover"
    />
  </div>

  <div className="p-4 flex flex-col flex-grow">
    <div className="flex items-center">
      <img
        src={freelancer.profilePhoto}
        alt={freelancer.name}
        className="w-10 h-10 object-cover rounded-full mr-3"
      />
      <span className="text-lg font-semibold">{freelancer.name}</span>
    </div>

    <div className="flex justify-between items-center mt-2">
      <p className="text-sm text-gray-500 font-semibold">{freelancer.level}</p>
      <Star rating={freelancer.rating} />
    </div>

    <p className="text-sm mt-1">{freelancer.role}</p>

    <div className="flex items-center gap-1 mt-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-4 h-4 text-green-600"
      >
        <path
          fillRule="evenodd"
          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 
          0l2.082 5.006 5.404.434c1.164.093 1.636 
          1.545.749 2.305l-4.117 3.527 1.257 
          5.273c.271 1.136-.964 2.033-1.96 
          1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425
          l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305
          l5.404-.434 2.082-5.005Z"
          clipRule="evenodd"
        />
      </svg>
      <span>{freelancer.rating}</span>
      <span className="text-gray-400 text-sm">
        ({freelancer.reviewCount})
      </span>
    </div>

    <p className="text-primary mt-2">Starts from ${freelancer.price}</p>

    <button className="w-full py-2 bg-green-600 text-white font-semibold rounded-md mt-3">
      See More
    </button>
  </div>
</div>

  );
};

export default FreelancerCard;
