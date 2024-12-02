import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ onSearch }: { onSearch: (query: string) => void }) => {
  return (
    <div className="relative max-w-2xl mx-auto">
      <input
        type="text"
        placeholder="Search your legal questions..."
        className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:outline-none focus:border-[#7A0000] focus:ring-1 focus:ring-[#7A0000]"
        onChange={(e) => onSearch(e.target.value)}
      />
      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
    </div>
  );
};

export default SearchBar;