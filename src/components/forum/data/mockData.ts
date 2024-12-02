import { Expert, NewsArticle, Post, TrendingPost } from '../types';

export const mockPosts: Post[] = [
  {
    id: '1',
    author: 'Anonymous User',
    authorImage: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop',
    question: 'I had an accident and the other driver does not have insurance and is now refusing to pay me. What can I do?',
    image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800',
    comments: [
      {
        id: 'c1',
        author: 'Nimal Peiris',
        authorImage: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop',
        isLawyer: true,
        content: 'You may take him to courts. he would be fined if he is in the wrong.'
      },
      {
        id: 'c2',
        author: 'Jason Jansz',
        authorImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
        content: 'You have a nice Jaguar. You seem like you can pay for it yourself'
      }
    ],
    isBookmarked: false,
    isExpanded: false
  },
  {
    id: '2',
    author: 'Anonymous User',
    authorImage: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop',
    question: 'Where do I go to put in a RTI request?',
    isDraft: true,
    comments: [],
    isBookmarked: false,
    isExpanded: false
  }
];

export const mockExperts: Expert[] = [
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
  }
];

export const mockNewsArticles: NewsArticle[] = [
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
  }
];

export const mockTrendingPosts: TrendingPost[] = [
  { id: '1', rank: 1, title: 'My lawyer dropped my case and I am in a soup. Can people tell me what to do?' },
  { id: '2', rank: 2, title: 'Can someone park their vehicle like this?' },
  { id: '3', rank: 3, title: 'I had an accident and the other driver does not have insurance and is now refusing to pay me. What can I do?' },
];