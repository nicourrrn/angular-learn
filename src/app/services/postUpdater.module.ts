import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

export class Post {
  id: number;
  title: string;
  text: string;
  author: string;

  constructor(id: number, title: string, text: string, author: string) {
    this.id = id;
    this.title = title;
    this.text = text;
    this.author = author;
  }
}

@Injectable({
  providedIn: 'root',
})
export class PostUpdateService {
  constructor(private http: HttpClient) {}
  updatePost() {
    return this.http.get<Array<Post>>('http://localhost:8000/api/post/');
  }
}
