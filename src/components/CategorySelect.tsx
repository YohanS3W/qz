import React from 'react';
import { ChevronDown } from 'lucide-react';

const categories = [
  'Fundamental Rights',
  'Employment Law',
  'Company Law',
  'Road Traffic Law',
  'Divorce Law',
  'Criminal Law'
];

const CategorySelect = ({ onSelect }: { onSelect: (category: string) => void }) => {
  return (
    <div className="relative max-w-md mx-auto">
      <select
        onChange={(e) => onSelect(e.target.value)}
        className="w-full px-4 py-3 rounded-lg border border-gray-300 appearance-none bg-white focus:outline-none focus:border-[#7A0000] focus:ring-1 focus:ring-[#7A0000] cursor-pointer hover:bg-gray-50"
      >
        <option value="">Select field</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
    </div>
  );
};

export default CategorySelect;