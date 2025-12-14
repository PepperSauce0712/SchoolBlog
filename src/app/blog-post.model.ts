export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;       // 文章摘要
  category: 'Teacher' | 'Student'; // 教師or學生
  imageUrl: string;      // 封面圖
  date: string;
  authorName: string;
  authorAvatarUrl: string;
}