import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/models/post/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  posts:Post[]=[];

  constructor(  private _router: Router,
    private _postService: PostService) { }

  ngOnInit(): void {
    this._postService.getPostsByProfileId(105).subscribe({
      next: (data) => {
        console.log(data); 
        this.posts = data;
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('completed');
      },
    });

  }

}
