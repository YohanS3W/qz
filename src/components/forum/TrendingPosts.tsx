import React from 'react';
import { ChevronDown } from 'lucide-react';

interface TrendingPost {
  id: string;
  rank: number;
  title: string;
}

const trendingPosts: TrendingPost[] = [
  { id: '1', rank: 1, title: 'My lawyer dropped my case and I am in a soup. Can people tell me what to do?' },
  { id: '2', rank: 2, title: 'Can someone park their vehicle like this?' },
  { id: '3', rank: 3, title: 'I had an accident and the other driver does not have insurance' },
];

const TrendingPosts = () => {
  return (
    <div className="bg-white rounded-lg p-6">
      <h3 className="font-bold text-lg mb-4">Trending posts</h3>
      <div className="space-y-4">
        {trendingPosts.map((post) => (
          <div key={post.id} className="flex gap-3">
            <span className="text-[#7A0000] font-bold">#{post.rank}</span>
            <p className="text-gray-800 hover:text-[#7A0000] cursor-pointer line-clamp-2">
              {post.title}
            </p>
          </div>
        ))}
        <button className="w-full text-[#7A0000] hover:underline text-sm mt-4">
          View more popular threads...
        </button>
      </div>
    </div>
  );
};

export default TrendingPosts;