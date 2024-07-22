export interface Video {
  id: string;
  created_at: string;
  video_url: string;
  description: string;
  num_comments: number;
  user_id: string;
  title: string;
}

export interface User {
  id: string;
  ipAddress: string;
  username: string;
}
