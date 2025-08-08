'use client';
import { useFreelancerFilters } from '../contexts/FilterContext'; 

export default function Filters() {
  const { filters, setFilters } = useFreelancerFilters();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters({ [name]: value });
  };

  return (
    <div className="flex flex-col">
      <div className='grid grid-cols-4 gap-3 mb-3'>
      <select
        name="serviceCategory"
        value={filters.serviceCategory}
        onChange={handleChange}
        className="border border-gray-300 p-2 rounded"
      >
        <option value="">All categories</option>
        <option value="Photography">Photography</option>
        <option value="Development">Development</option>
        <option value="Writing">Writing</option>
      </select>
      <select name="sellerLevel" value={filters.sellerLevel} onChange={handleChange} className="border p-2 rounded border-gray-300">
        <option value="">Seller Level</option>
        <option value="Top Rated">Top Rated</option>
        <option value="Level 2">Level 2</option>
        <option value="Level 1">Level 1</option>
      </select>

      <input
        type="number"
        name="budget"
        value={filters.budget}
        placeholder="Max Budget"
        onChange={handleChange}
        className="border p-2 rounded border-gray-300"
      />

      <input
        type="text"
        name="deliveryTime"
        value={filters.deliveryTime}
        placeholder="Delivery Time (e.g., 2 days)"
        onChange={handleChange}
        className="border p-2 rounded border-gray-300"
      />
</div>
<div className='flex justify-between'> 
      <input
        type="text"
        name="secondaryLocation"
        value={filters.secondaryLocation}
        placeholder="Secondary Location"
        onChange={handleChange}
        className="border p-2 rounded border-gray-300"
      />

      <select name="sort" value={filters.sort} onChange={handleChange} className="border p-2 rounded border-gray-300">
        <option value="">Sort By</option>
        <option value="mostRated">Most Rated</option>
        <option value="lowestRated">Lowest Rated</option>
        <option value="highestPrice">Highest Price</option>
        <option value="lowestPrice">Lowest Price</option>
      </select>
      </div>
    </div>
  );
}
