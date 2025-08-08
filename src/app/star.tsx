import React from 'react';

interface StarProps {
  rating: number;
}

function Star({ rating }: StarProps) {
  const fullStar = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-4 h-4 text-green-600 inline-block"
    >
      <path
        fillRule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 
        5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 
        1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 
        18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425
        l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305
        l5.404-.434 2.082-5.005Z"
        clipRule="evenodd"
      />
    </svg>
  );

  const emptyStar = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className="w-4 h-4 text-green-600 inline-block"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.718 
        5.292a1 1 0 00.95.69h5.574c.969 0 1.371 
        1.24.588 1.81l-4.516 3.28a1 1 0 00-.364 
        1.118l1.718 5.292c.3.921-.755 1.688-1.54 
        1.118l-4.516-3.28a1 1 0 00-1.176 
        0l-4.516 3.28c-.785.57-1.84-.197-1.54-1.118l1.718-5.292a1 
        1 0 00-.364-1.118L2.22 10.72c-.783-.57-.38-1.81.588-1.81h5.574a1 
        1 0 00.95-.69l1.718-5.292z"
      />
    </svg>
  );

  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(i <= Math.round(rating) ? fullStar : emptyStar);
  }

  return <span>{stars}</span>;
}

export default Star;
