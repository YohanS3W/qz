import React, { useState } from 'react';
import { Bot, MessageSquare, FileText, Book, Users, Gamepad } from 'lucide-react';
import FeatureSlider from './FeatureSlider';
import FeatureButton from './FeatureButton';
import LearnLawGames from './LearnLawGames';

const features = [
  {
    id: 'yukkthiBot',
    icon: <Bot size={20} />,
    label: 'YukkthiBot',
    description: 'AI-powered legal assistant providing instant answers to your legal queries 24/7.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        alt: 'AI Chat Interface'
      },
      {
        url: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        alt: 'AI Assistant'
      }
    ]
  },
  {
    id: 'learnLaw',
    icon: <Gamepad size={20} />,
    label: 'Learn Law',
    description: 'Gamified learning experience with quizzes, flashcards, and memory games. Earn points and compete with others while mastering legal concepts.',
    component: LearnLawGames,
    images: [
      {
        url: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        alt: 'Legal Learning Games'
      }
    ]
  },
  {
    id: 'forum',
    icon: <MessageSquare size={20} />,
    label: 'Legal Forum',
    description: 'Connect with legal professionals and get expert advice on complex legal matters.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        alt: 'Legal Forum Discussion'
      },
      {
        url: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        alt: 'Legal Community'
      }
    ]
  },
  {
    id: 'documents',
    icon: <FileText size={20} />,
    label: 'Document Analysis',
    description: 'Upload legal documents for AI-powered analysis and get instant insights.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        alt: 'Document Analysis'
      },
      {
        url: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        alt: 'Legal Documents'
      }
    ]
  },
  {
    id: 'resources',
    icon: <Book size={20} />,
    label: 'Legal Resources',
    description: 'Access our comprehensive database of legal information and educational materials.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        alt: 'Legal Library'
      },
      {
        url: 'https://images.unsplash.com/photo-1589391886645-d51941baf7fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        alt: 'Legal Resources'
      }
    ]
  },
  {
    id: 'experts',
    icon: <Users size={20} />,
    label: 'Expert Network',
    description: 'Connect with verified legal professionals for personalized consultation.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        alt: 'Legal Experts'
      },
      {
        url: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        alt: 'Professional Network'
      }
    ]
  }
];

const FeaturesSection = () => {
  const [activeFeature, setActiveFeature] = useState(features[0]);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-4 justify-center">
        {features.map((feature) => (
          <FeatureButton
            key={feature.id}
            icon={feature.icon}
            label={feature.label}
            isActive={activeFeature.id === feature.id}
            onClick={() => setActiveFeature(feature)}
          />
        ))}
      </div>

      <div className="bg-white rounded-lg p-6 shadow-lg">
        <p className="text-gray-700 mb-6">{activeFeature.description}</p>
        {activeFeature.component ? (
          <activeFeature.component />
        ) : (
          <FeatureSlider images={activeFeature.images} />
        )}
      </div>
    </div>
  );
};

export default FeaturesSection;