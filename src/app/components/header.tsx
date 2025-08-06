'use client';
import { useState } from 'react';
import { useFreelancerFilters } from '../contexts/FilterContext';



export default function Header() {
    const { filters, setFilters } = useFreelancerFilters();


  return (
    <header className="w-full px-6 py-4 bg-white shadow sticky top-0 z-50">
        <input
        type="text"
        value={filters.search}
        onChange={(e) => setFilters({ search: e.target.value })}
        placeholder="Search freelancers..."
      />
    </header>
  );
}
