'use client';

import { useEffect, useState } from 'react';
import Filters from './components/filters';
import FreelancerCard from './freelancerCard';
import { Freelancer } from './types/Freelancer';
import { useFreelancerFilters } from './contexts/FilterContext';

export default function Home() {
  const [freelancers, setFreelancers] = useState<Freelancer[]>([]);
  const { filters } = useFreelancerFilters();

  useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await fetch('/api/freelancers');    
      const data = await res.json();
      setFreelancers(data);
    } catch (err) {
      console.error('Failed to fetch freelancers:', err);
    }
  };
  
  fetchData();
}, []);


  const filteredFreelancers = freelancers
  .filter(f => f.name.toLowerCase().includes(filters.search.toLowerCase()))
  .filter(f => {
    if (!filters.serviceCategory) return true;
    const catA = (f.serviceCategory ?? "").toString().trim().toLowerCase();
    const catB = filters.serviceCategory.toString().trim().toLowerCase();
    return catA === catB;
  })
  .filter(f => filters.sellerLevel ? f.level === filters.sellerLevel : true)
  .filter(f => filters.budget ? f.price <= Number(filters.budget) : true)
  .filter(f => {
    if (!filters.deliveryTime) return true;
    const freelancerDays = parseInt(f.deliveryTime as string, 10);
    const filterDays = Number(filters.deliveryTime);
    return !isNaN(freelancerDays) && freelancerDays <= filterDays;
  })
  .filter(f => filters.secondaryLocation ? f.secondaryLocation.toLowerCase().includes(filters.secondaryLocation.toLowerCase()) : true)
  .sort((a, b) => {
    switch (filters.sort) {
      case "mostRated": return b.rating - a.rating;
      case "lowestRated": return a.rating - b.rating;
      case "highestPrice": return b.price - a.price;
      case "lowestPrice": return a.price - b.price;
      default: return 0;
    }
  });


  return (
   <div className="min-h-screen">
  <main className="max-w-7xl mx-auto p-4">
    <Filters />
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
      {filteredFreelancers?.length ? (
        filteredFreelancers.map(freelancer => (
          <FreelancerCard key={freelancer.id} freelancer={freelancer} />
        ))
      ) : (
        <p className='text-center mx-auto'>No result matches your search</p>
      )}
    </div>
  </main>
</div>

  );
}
