import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/models/post/post';
import { PostService } from 'src/app/services/post.service';
import { NgForm } from '@angular/forms';
import { ProfileService } from 'src/app/services/profile.service';
import { Profile } from 'src/app/models/profile/profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  posts: Post[] = [];
  profile: Profile = JSON.parse(localStorage.getItem('profile'));

  postedPost: Post;
  constructor(
    private _router: Router,
    private _postService: PostService,
    private _profileService: ProfileService
  ) {}

  ngOnInit(): void {
    this._postService.getPostsByProfileId(this.profile.profileId).subscribe({
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

    this._profileService.getByProfileId(this.profile.profileId).subscribe({
      next: (data) => {
        console.log(data);
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

  onAddingPost = (addingPost: NgForm) => {
    let post = addingPost.value;
    post.profile = this.profile;
    this._postService.addPost(post).subscribe({
      next: (data) => {
        console.log(data);
        // window.location.reload();
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('completed');
      },
    });
  };

  onDeletePost = (postId: number) => {
    console.log(postId);
    this._postService.deletePost(postId).subscribe({
      next: (data) => {
        console.log('deleted');
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
