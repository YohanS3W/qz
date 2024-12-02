import React from 'react';
import { FileText, Bookmark, MessageSquare, History } from 'lucide-react';

interface FilterButtonProps {
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const FilterButton = ({ icon, label, isActive, onClick }: FilterButtonProps) => (
  <button 
    className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-colors ${
      isActive ? 'bg-[#7A0000] text-white' : 'bg-white hover:bg-gray-50'
    }`}
    onClick={onClick}
  >
    {icon}
    <span>{label}</span>
  </button>
);

interface PostFiltersProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const PostFilters = ({ activeFilter, onFilterChange }: PostFiltersProps) => {
  return (
    <div className="flex gap-4 mb-6 overflow-x-auto pb-2">
      <FilterButton
        icon={<FileText size={20} />}
        label="View drafts"
        isActive={activeFilter === 'drafts'}
        onClick={() => onFilterChange('drafts')}
      />
      <FilterButton
        icon={<Bookmark size={20} />}
        label="Bookmarks"
        isActive={activeFilter === 'bookmarks'}
        onClick={() => onFilterChange('bookmarks')}
      />
      <FilterButton
        icon={<MessageSquare size={20} />}
        label="Track my comments"
        isActive={activeFilter === 'comments'}
        onClick={() => onFilterChange('comments')}
      />
      <FilterButton
        icon={<History size={20} />}
        label="Track my posts"
        isActive={activeFilter === 'posts'}
        onClick={() => onFilterChange('posts')}
      />
    </div>
  );
};

export default PostFilters;