import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Comments } from 'src/app/models/post/comments';
import { Post } from 'src/app/models/post/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  likeButtonColor: string = 'primary';
  posts: Post[] | undefined;
  pComments: Comments[] | undefined;
  
  postId!: number;
  commentsPostId!: number; //passing the postId to get comments
  isShown: boolean = false; // hidden by default
  isLikeClicked: boolean = false;
  likedPostId!: number;
  commentPostId!: number;
  showCommentsToggle: boolean = false;

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

    this._postService.getCommentsByPostId(305).subscribe({
      next: (data) => {
        console.log(data);
        this.pComments = data;
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('completed');
      },
    });
  }

  toggleShow = (postId: number) => {
    this.isShown = !this.isShown;
    console.log(postId);
    this.commentPostId = postId;
  };

  showComments = (id: number) => {
    this.showCommentsToggle = !this.showCommentsToggle;
    // console.log(id);
    this.commentsPostId = id;
    console.log(this.commentPostId);
    console.log(this.pComments)
  };

  likeClicked = (postId: number) => {
    this.isLikeClicked = !this.isLikeClicked;
    this.likedPostId = postId;
    console.log(this.likedPostId);
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
