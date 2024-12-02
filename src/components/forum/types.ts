export interface Comment {
  id: string;
  author: string;
  authorImage: string;
  isLawyer?: boolean;
  content: string;
}

export interface Post {
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
  isDraft?: boolean;
}

export interface Expert {
  id: string;
  name: string;
  imageUrl: string;
  isFollowed: boolean;
}

export interface NewsArticle {
  id: string;
  title: string;
  imageUrl: string;
  hasThread: boolean;
}

export interface TrendingPost {
  id: string;
  rank: number;
  title: string;
}