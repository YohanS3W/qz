import React from 'react';

interface NewsArticle {
  id: string;
  title: string;
  imageUrl: string;
  hasThread: boolean;
}

const newsArticles: NewsArticle[] = [
  {
    id: '1',
    title: 'Latest Supreme Court Ruling',
    imageUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800',
    hasThread: false,
  },
  {
    id: '2',
    title: 'Legal education reforms',
    imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800',
    hasThread: false,
  },
  {
    id: '3',
    title: 'Police officer arrests journalist',
    imageUrl: 'https://images.unsplash.com/photo-1589578527966-fdac0f44566c?w=800',
    hasThread: true,
  },
];

const WhatsHappening = () => {
  return (
    <div className="bg-white rounded-lg p-6">
      <h3 className="font-bold text-lg mb-4">What's happening?</h3>
      <div className="space-y-4">
        {newsArticles.map((article) => (
          <div key={article.id} className="group cursor-pointer">
            <div className="relative h-32 rounded-lg overflow-hidden mb-2">
              <img
                src={article.imageUrl}
                alt={article.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <h4 className="absolute bottom-2 left-2 text-white font-medium">
                {article.title}
              </h4>
            </div>
            <button className="text-[#7A0000] text-sm hover:underline">
              {article.hasThread ? 'Contribute to post' : 'Ask a new question'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatsHappening;