import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/post/post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private _baseUrl: string = 'http://localhost:8083/posts-api';
  constructor(private _http: HttpClient) {}

  getAllPosts = (): Observable<Post[]> => {
    return this._http.get<Post[]>(this._baseUrl + '/posts',);
  };

  getPostsByProfileId=(profileId:number): Observable<Post[]>=>{
    return this._http.get<Post[]>(this._baseUrl + '/posts/profile/'+ profileId);
  }

  getById = (postId: number): Observable<Post> => {
    let url = this._baseUrl + '/post/id/' + postId;
    return this._http.get<Post>(url);
  };
 
}
