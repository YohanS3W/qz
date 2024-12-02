import React from 'react';
import { PenSquare } from 'lucide-react';

interface NewPostButtonProps {
  onClick: () => void;
}

const NewPostButton = ({ onClick }: NewPostButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="w-full bg-white rounded-lg p-4 mb-6 flex items-center gap-4 hover:bg-gray-50 transition-colors"
    >
      <img
        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop"
        alt="User"
        className="w-10 h-10 rounded-full"
      />
      <span className="text-gray-500 flex-grow text-left">Post a new question...</span>
      <PenSquare size={20} className="text-gray-400" />
    </button>
  );
};

export default NewPostButton;