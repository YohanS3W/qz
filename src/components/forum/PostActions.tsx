import React from 'react';
import { ThumbsUp, ThumbsDown, MessageSquare, Bookmark, Link2 } from 'lucide-react';

interface PostActionsProps {
  postId: string;
  isExpanded: boolean;
  onToggleExpand: (postId: string) => void;
  onCopyLink: (postId: string) => void;
}

const PostActions = ({ postId, isExpanded, onToggleExpand, onCopyLink }: PostActionsProps) => {
  return (
    <div className="flex items-center gap-4 mt-4">
      <button className="text-gray-500 hover:text-[#7A0000]">
        <ThumbsUp size={20} />
      </button>
      <button className="text-gray-500 hover:text-[#7A0000]">
        <ThumbsDown size={20} />
      </button>
      <button className="text-gray-500 hover:text-[#7A0000]">
        <MessageSquare size={20} />
      </button>
      <button className="text-gray-500 hover:text-[#7A0000]">
        <Bookmark size={20} />
      </button>
      <button
        className="text-gray-500 hover:text-[#7A0000]"
        onClick={() => onCopyLink(postId)}
      >
        <Link2 size={20} />
      </button>
      <button
        className="ml-auto text-[#7A0000] hover:underline"
        onClick={() => onToggleExpand(postId)}
      >
        {isExpanded ? 'Close replies' : 'View replies...'}
      </button>
    </div>
  );
};

export default PostActions;