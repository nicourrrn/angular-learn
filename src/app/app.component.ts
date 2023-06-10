import { Component } from '@angular/core';
import { PostUpdateService, Post } from './services/postUpdater.module'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers: [PostUpdateService]
})
export class AppComponent {
  constructor(private updater: PostUpdateService) {}

  posts: Array<Post> = [];
  updatePosts() {
    this.updater.updatePost()
      .subscribe((data: Array<Post>) => this.posts = data);
  }
}
