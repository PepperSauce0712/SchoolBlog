import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { BlogPost } from '../../blog-post.model'; 

@Component({
  selector: 'app-post-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post-card.html',
  styles: []
})
export class PostCard {

  @Input() post!: BlogPost;
}