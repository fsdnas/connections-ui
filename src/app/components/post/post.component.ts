import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { Post } from 'src/app/models/post/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  // longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  // from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  // originally bred for hunting.`;
  likeButtonColor: string = 'primary';
  posts: Post[] | undefined;
  postId!: number;
  isShown: boolean = false; // hidden by default
  isLikeClicked: boolean = false;

  // like!:any;

  like: string = '';
  unlike: string = '';
  shareComponent: string = `success`;
  constructor(
    public dialog: MatDialog,
    private _router: Router,
    private _postService: PostService
  ) {}

  ngOnInit(): void {
    this._postService.getAllPosts().subscribe({
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

  toggleShow = () => {
    this.isShown = !this.isShown;
  };

  likeClicked = (postId: Number) => {
    this.isLikeClicked = !this.isLikeClicked;
  };

  onShare = () => {
    this.dialog.open(Popup);
  };
}

// for popup
@Component({
  selector: 'popup',
  templateUrl: 'popup.html',
})
export class Popup {}
