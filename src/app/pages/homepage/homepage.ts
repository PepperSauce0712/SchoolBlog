import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostCard } from '../../components/post-card/post-card';
import { BlogPost } from '../../blog-post.model';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, PostCard],
  templateUrl: './homepage.html',
  styles: []
})
export class Homepage {
  currentFilter: string = 'All';

  allPosts: BlogPost[] = [
    {
      id: 1,
      title: '東方哲學經典選讀的現代解析與批判',
      excerpt: '主要在講易經。',
      category: 'Teacher',
      imageUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=500&q=80',
      date: '2025-10-12',
      authorName: '李小華',
      authorAvatarUrl: 'https://ui-avatars.com/api/?name=李小華&background=random',
    },
    {
      id: 2,
      title: '管理學分組報告心得',
      excerpt: '為什麼要強制分組做六周報告RRRRRRR。',
      category: 'Student',
      imageUrl: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=500&q=80',
      date: '2025-10-15',
      authorName: 'Shan',
      authorAvatarUrl: 'https://ui-avatars.com/api/?name=Shan&background=random',
    },
    {
      id: 3,
      title: '文學通識',
      excerpt: '期末需分組報告紅樓夢，請自行點開報告細節。',
      category: 'Teacher',
      imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=500&q=80',
      date: '2025-11-01',
      authorName: 'Emma',
      authorAvatarUrl: 'https://ui-avatars.com/api/?name=Emma&background=random',
    },
    {
      id: 4,
      title: '微積分',
      excerpt: '不及格的自己看補考事項。',
      category: 'Teacher',
      imageUrl: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=500&q=80',
      date: '2025-11-20',
      authorName: 'Kevin',
      authorAvatarUrl: 'https://ui-avatars.com/api/?name=Kevin&background=random',
    },
     {
      id: 5,
      title: '程式設計期末專題',
      excerpt: '有人知道怎麼做嗎？開價50求幫做。',
      category: 'Student',
      imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=500&q=80',
      date: '2025-12-05',
      authorName: '明大志',
      authorAvatarUrl: 'https://ui-avatars.com/api/?name=明大志&background=random',
    }
  ];

  get filteredPosts() {
    if (this.currentFilter === 'All') {
      return this.allPosts;
    }
    return this.allPosts.filter(post => post.category === this.currentFilter);
  }

  setFilter(filter: string) {
    this.currentFilter = filter;
  }
}