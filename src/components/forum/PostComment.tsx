import React from 'react';
import { Comment } from './types';

interface PostCommentProps {
  comment: Comment;
}

const PostComment = ({ comment }: PostCommentProps) => {
  return (
    <div className={`p-4 rounded-lg ${comment.isLawyer ? 'bg-gray-50' : ''}`}>
      <div className="flex items-center gap-4 mb-2">
        <img
          src={comment.authorImage}
          alt={comment.author}
          className="w-8 h-8 rounded-full"
        />
        <span className="font-medium">
          {comment.author}
          {comment.isLawyer && (
            <span className="ml-2 text-green-500">✓</span>
          )}
        </span>
      </div>
      <p>{comment.content}</p>
    </div>
  );
};

export default PostComment;