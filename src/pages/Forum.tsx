import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import TrendingPosts from '../components/forum/TrendingPosts';
import WhatsHappening from '../components/forum/WhatsHappening';
import ExpertsList from '../components/forum/ExpertsList';
import PostList from '../components/forum/PostList';
import NewPostModal from '../components/forum/NewPostModal';
import PostFilters from '../components/forum/PostFilters';
import NewPostButton from '../components/forum/NewPostButton';
import { Post } from '../components/forum/types';
import { mockPosts } from '../components/forum/data/mockData';

const Forum = () => {
  const [posts, setPosts] = useState<Post[]>(mockPosts);
  const [isNewPostOpen, setIsNewPostOpen] = useState(false);
  const [isPublic, setIsPublic] = useState(true);
  const [activeFilter, setActiveFilter] = useState('all');

  const handleCopyLink = (postId: string) => {
    navigator.clipboard.writeText(`https://yukkthiya.com/forum/post/${postId}`);
    alert('Link copied!');
  };

  const togglePostExpansion = (postId: string) => {
    setPosts(posts.map(post => ({
      ...post,
      isExpanded: post.id === postId ? !post.isExpanded : false
    })));
  };

  const filteredPosts = posts.filter(post => {
    switch (activeFilter) {
      case 'drafts':
        return post.isDraft;
      case 'bookmarks':
        return post.isBookmarked;
      case 'comments':
        return !post.isDraft; // Add comment filtering logic here
      case 'posts':
        return !post.isDraft; // Add post filtering logic here
      default:
        return !post.isDraft;
    }
  });

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <SearchBar onSearch={() => {}} />
        
        <div className="mt-8 flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-grow lg:max-w-[66%]">
            <PostFilters
              activeFilter={activeFilter}
              onFilterChange={setActiveFilter}
            />

            <NewPostButton onClick={() => setIsNewPostOpen(true)} />

            <PostList
              posts={filteredPosts}
              onToggleExpand={togglePostExpansion}
              onCopyLink={handleCopyLink}
            />
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-1/3 space-y-6">
            <TrendingPosts />
            <WhatsHappening />
            <ExpertsList />
          </div>
        </div>
      </div>

      <NewPostModal
        isOpen={isNewPostOpen}
        onClose={() => setIsNewPostOpen(false)}
        isPublic={isPublic}
        onToggleVisibility={setIsPublic}
      />
    </div>
  );
};

export default Forum;