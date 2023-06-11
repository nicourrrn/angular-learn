import { Component } from '@angular/core';
import { PostUpdateService, Post } from './services/postUpdater.module'
import { AuthProvider, AuthData } from './services/login.module';

class AuthForm {
  username: string;
  password: string;
  constructor (username: string, password: string) {
    this.username = username;
    this.password = password;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers: [PostUpdateService, AuthProvider]
})
export class AppComponent {
  constructor(private updater: PostUpdateService, private auth: AuthProvider) {}
  formAuth = new AuthForm("", "");
  token = "";

  posts: Array<Post> = [];
  updatePosts() {
    this.updater.updatePost()
      .subscribe((data: Array<Post>) => this.posts = data);
  }
  submit() {
    this.auth.login(this.formAuth.username, this.formAuth.password).subscribe((data: AuthData) => this.token = data.token);
    console.log(this.formAuth);
  }
}
