import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/models/profile/profile';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-my-network',
  templateUrl: './my-network.component.html',
  styleUrls: ['./my-network.component.scss']
})
export class MyNetworkComponent implements OnInit {
  profiles!: Profile[];
  constructor(private _profileService: ProfileService) { }

  ngOnInit(): void {
    this._profileService.getAllProfiles().subscribe({
      next: data => {
        this.profiles = data;
        console.log(data)
      },
      error: error => console.log(error),
      complete:() => console.log("completed")
    })
  }

}
