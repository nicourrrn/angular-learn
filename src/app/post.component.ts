import { Component, Input } from '@angular/core';
import { Post } from './services/postUpdater.module'

@Component({
  selector: 'post-view',
  template: `
    <div>
      <p> {{post.title}}: {{post.text}}</p>
    </div>
  `,
})
export class PostView {
  @Input() post: Post = new Post(0, '', '', '');
}
