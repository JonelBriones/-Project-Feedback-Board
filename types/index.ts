export type Feedback = {
  _id: String;
  title: String;
  category: String;
  description: String;
  status: String;
  upvotes: String[];
  comments: Comment[];
};

export type Comment = {
  content: String;
  replyingTo: String;
  owner: String;
  replies?: Comment[];
};
