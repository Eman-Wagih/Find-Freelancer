"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type SortOption = "mostRated" | "lowestRated" | "highestPrice" | "lowestPrice";

export interface FilterState {
  search: string;
  serviceCategory: string;
  sellerLevel: string;         
  budget: string;
  deliveryTime: string;        
  secondaryLocation: string;   
  sort: string;
}


interface FilterContextType {
  filters: FilterState;
  setFilters: (filters: Partial<FilterState>) => void;
}

const defaultState: FilterState = {
 search: '',
  serviceCategory: '',
  sellerLevel: '',
  budget: '',
  deliveryTime: '',
  secondaryLocation: '',
  sort: '',
};

const FreelancerFilterContext = createContext<FilterContextType | undefined>(undefined);

export const FreelancerFilterProvider = ({ children }: { children: ReactNode }) => {
  const [filters, updateFilters] = useState<FilterState>(defaultState);

  const setFilters = (newValues: Partial<FilterState>) => {
    updateFilters(prev => ({ ...prev, ...newValues }));
  };

  return (
    <FreelancerFilterContext.Provider value={{ filters, setFilters }}>
      {children}
    </FreelancerFilterContext.Provider>
  );
};

export const useFreelancerFilters = () => {
  const context = useContext(FreelancerFilterContext);
  if (!context) throw new Error("useFreelancerFilters must be used within FreelancerFilterProvider");
  return context;
};
