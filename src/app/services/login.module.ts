import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"

export class AuthData {
  token: string;
  constructor(token: string ) {
    this.token = token;
  }
}

@Injectable({providedIn: 'root'})
export class AuthProvider {
  constructor(private http: HttpClient) {}
  auth: AuthData = new AuthData("");
  login(username: string, password: string) {
    const req = this.http.post<AuthData>("http://localhost:8000/api/api-token-auth", {
      username: username,
      password: password
    });
    req.subscribe((data) => this.auth = data);
    return req;
  }
}
