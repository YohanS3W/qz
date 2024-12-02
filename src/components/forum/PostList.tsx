import React from 'react';
import { ThumbsUp, ThumbsDown, MessageSquare, Bookmark, Link2 } from 'lucide-react';

interface Comment {
  id: string;
  author: string;
  authorImage: string;
  isLawyer?: boolean;
  content: string;
}

interface Post {
  id: string;
  author: string;
  authorImage: string;
  isLawyer?: boolean;
  question: string;
  content?: string;
  image?: string;
  comments: Comment[];
  isBookmarked: boolean;
  isExpanded: boolean;
}

interface PostListProps {
  posts: Post[];
  onToggleExpand: (postId: string) => void;
  onCopyLink: (postId: string) => void;
}

const PostList = ({ posts, onToggleExpand, onCopyLink }: PostListProps) => {
  return (
    <div className="space-y-6">
      {posts.map(post => (
        <div key={post.id} className="bg-white rounded-lg p-6">
          <div className="flex items-center gap-4 mb-4">
            <img
              src={post.authorImage}
              alt={post.author}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <span className="font-medium">{post.author}</span>
              {post.isLawyer && (
                <span className="ml-2 text-green-500">✓</span>
              )}
            </div>
          </div>

          <h3 className="font-bold text-lg mb-4">{post.question}</h3>

          {post.isExpanded && (
            <>
              {post.image && (
                <img
                  src={post.image}
                  alt="Post content"
                  className="w-full rounded-lg mb-4"
                />
              )}
              
              <div className="space-y-4">
                {post.comments.map(comment => (
                  <div
                    key={comment.id}
                    className={`p-4 rounded-lg ${
                      comment.isLawyer ? 'bg-gray-50' : ''
                    }`}
                  >
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
                ))}
              </div>
            </>
          )}

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
              onClick={() => onCopyLink(post.id)}
            >
              <Link2 size={20} />
            </button>
            <button
              className="ml-auto text-[#7A0000] hover:underline"
              onClick={() => onToggleExpand(post.id)}
            >
              {post.isExpanded ? 'Close replies' : 'View replies...'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;