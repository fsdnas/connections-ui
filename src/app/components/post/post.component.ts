import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
  likeButtonColor: string = 'primary';

  isShown: boolean = false; // hidden by default
  isLikeClicked: boolean = false;

  // like!:any;

  like: string = '';
  unlike: string = '';
  shareComponent: string = `success`;
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}
  toggleShow = () => {
    this.isShown = !this.isShown;
  };

  likeClicked = () => {
    this.isLikeClicked = !this.isLikeClicked;
  };

  onShare = () => {
    this.dialog.open(Popup);
  };
}
@Component({
  selector: 'popup',
  templateUrl: 'popup.html',
})
export class Popup {}
