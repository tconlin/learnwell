export interface Video {
  id: string;
  created_at: string;
  video_url: string;
  description: string;
  num_comments: number;
  user_id: string;
  title: string;
}

export interface Comment {
  id: string;
  created_at: string;
  content: string;
  user_id: string;
  video_id: string;
}
