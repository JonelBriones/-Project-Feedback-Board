export type Feedback = {
  _id: string;
  owner: string;
  title: string;
  category: string;
  description: string;
  status: string;
  upvotes: string[];
  comments: Comment[];
};

export type Comment = {
  content: string;
  replyingTo: string;
  owner: string;
  replies?: Comment[];
};

export type Reply = {
  owner: string;
  imageUrl: string;
  username: string;
  content: string;
  _id: string;
};
