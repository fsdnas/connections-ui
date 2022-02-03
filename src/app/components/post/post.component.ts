import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Comments } from 'src/app/models/post/comments';
import { Like } from 'src/app/models/post/like';
import { Post } from 'src/app/models/post/post';
import { Profile } from 'src/app/models/profile/profile';
import { PostService } from 'src/app/services/post.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  likeButtonColor: string = 'primary';
  posts: Post[] | undefined;
  pComments: Comments[] | undefined;
  comment: Comments;
  profile: Profile;
  post: Post;
  like:Like;

  addCommentFromFeed: '';

  postId!: number;
  commentsPostId!: number; //passing the postId to get comments
  isShown: boolean = false; // hidden by default
  isLikeClicked: boolean = false;
  likedPostId!: number;
  commentPostId!: number;
  showCommentsToggle: boolean = false;

  // like: string = '';
  // unlike: string = '';
  shareComponent: string = `success`;
  constructor(
    public dialog: MatDialog,
    private _router: Router,
    private _postService: PostService,
    private _profileService: ProfileService,
    private _datePipe: DatePipe
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

    this._profileService.getByProfileId(105).subscribe({
      next: (data) => {
        // console.log(data);
        this.profile = data;
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

    this._postService.getPostById(this.commentPostId).subscribe({
      next: (data) => {
        this.post = data;
        console.log(this.post);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('completed');
      },
    });
  };

  showComments = (id: number) => {
    this.showCommentsToggle = !this.showCommentsToggle;
    this.commentsPostId = id;

    this._postService.getCommentsByPostId(this.commentsPostId).subscribe({
      next: (data) => {
        this.pComments = data;
        console.log(this.pComments);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('completed');
      },
    });
  };

  likeClicked = (postId: number) => {
    this.isLikeClicked = !this.isLikeClicked;
    this.likedPostId = postId;
    console.log(this.likedPostId);

    // this._postService.addLike(like).subscribe({

    // });
  };

  onShare = () => {
    this.dialog.open(Popup);
  };

  onCommenting = (commentData: NgForm) => {
    console.log(commentData);
    let comment = commentData.value;
    comment.profile = this.profile;
    comment.post = this.post;
    comment.commentTime = this._datePipe.transform(new Date(), 'yyyy-MM-dd HH:mm:ss');

    this._postService.addComment(comment).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('completed');
      },
    });
  };
}

// for popup
@Component({
  selector: 'popup',
  templateUrl: 'popup.html',
})
export class Popup {}
