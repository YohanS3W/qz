import React from 'react';

interface Expert {
  id: string;
  name: string;
  imageUrl: string;
  isFollowed: boolean;
}

const experts: Expert[] = [
  {
    id: '1',
    name: 'Nimal Peiris',
    imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100',
    isFollowed: false,
  },
  {
    id: '2',
    name: 'Alison Perera',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
    isFollowed: false,
  },
  {
    id: '3',
    name: 'Rajith Ambuldeniya',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
    isFollowed: true,
  },
];

const ExpertsList = () => {
  return (
    <div className="bg-white rounded-lg p-6">
      <h3 className="font-bold text-lg mb-4">Follow the experts</h3>
      <div className="space-y-4">
        {experts.map((expert) => (
          <div key={expert.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src={expert.imageUrl}
                alt={expert.name}
                className="w-10 h-10 rounded-full"
              />
              <span className="font-medium">{expert.name}</span>
            </div>
            <button
              className={`px-4 py-1 rounded-full text-sm ${
                expert.isFollowed
                  ? 'bg-gray-100 text-gray-700'
                  : 'bg-[#7A0000] text-white'
              }`}
            >
              {expert.isFollowed ? 'Following' : 'Follow'}
            </button>
          </div>
        ))}
        <button className="w-full text-[#7A0000] hover:underline text-sm mt-2">
          Show more...
        </button>
      </div>
    </div>
  );
};

export default ExpertsList;