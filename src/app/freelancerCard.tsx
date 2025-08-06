import React from "react";
import { Freelancer } from "./types/Freelancer";


const FreelancerCard = ({ freelancer }: { freelancer: Freelancer }) => {
  return (
    <div className="border rounded-lg p-4 shadow-sm bg-white hover:shadow-md transition">
      <img
        src={freelancer.profilePhoto}
        alt={freelancer.name}
        className="w-24 h-24 object-cover rounded-full mx-auto"
      />
      <div className="text-center mt-4">
        <h2 className="text-lg font-semibold">{freelancer.name}</h2>
        <p className="text-sm text-gray-500">{freelancer.level}</p>
        <p className="text-sm mt-1">{freelancer.role}</p>
        <div className="flex justify-center items-center gap-1 mt-2">
          <span className="text-yellow-500">⭐ {freelancer.rating}</span>
          <span className="text-gray-400 text-sm">({freelancer.reviewCount})</span>
        </div>
        <p className="text-primary font-bold mt-2">${freelancer.price}</p>
        <button className="mt-3 px-4 py-1 border border-primary text-primary rounded hover:bg-primary hover:text-white transition">
          See More
        </button>
      </div>
    </div>
  );
};

export default FreelancerCard;
