export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;       // 文章摘要
  category: 'Teacher' | 'Student'; // 分類：教師或學生
  imageUrl: string;      // 封面圖
  date: string;
}