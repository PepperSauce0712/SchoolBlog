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
      title: '如何運用 AI 輔助備課？給老師的實用指南',
      excerpt: '探討生成式 AI 如何幫助教師節省時間，從教案設計到作業批改的完整應用流程。',
      category: 'Teacher',
      imageUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=500&q=80',
      date: '2025-10-12'
    },
    {
      id: 2,
      title: '高效學習法：番茄鐘工作術實戰',
      excerpt: '你是否常常分心？試試看番茄鐘工作法，讓你在 25 分鐘內保持高度專注。',
      category: 'Student',
      imageUrl: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=500&q=80',
      date: '2025-10-15'
    },
    {
      id: 3,
      title: '班級經營的藝術：建立正向的師生關係',
      excerpt: '良好的師生關係是教學成功的基石，分享三個實用的溝通技巧。',
      category: 'Teacher',
      imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=500&q=80',
      date: '2025-11-01'
    },
    {
      id: 4,
      title: '考前焦慮怎麼辦？心理師教你三招放鬆',
      excerpt: '面對大考壓力，適度的緊張有助於表現，但過度焦慮則會適得其反。',
      category: 'Student',
      imageUrl: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=500&q=80',
      date: '2025-11-20'
    },
     {
      id: 5,
      title: '數位教學工具大評比',
      excerpt: '從 Kahoot 到 Google Classroom，盤點適合國小至高中的數位工具。',
      category: 'Teacher',
      imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=500&q=80',
      date: '2025-12-05'
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