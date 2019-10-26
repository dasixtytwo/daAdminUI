import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { animate, style, transition, trigger } from '@angular/animations';

import { ProfileService } from '@theme/services/profile/profile.service';
import { Profile } from '@theme/models/profile';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: [
    './user-profile.component.scss',
    '../../../../assets/icon/icofont/css/icofont.scss'
  ],
  animations: [
    trigger('fadeInOutTranslate', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('400ms ease-in-out', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        style({ transform: 'translate(0)' }),
        animate('400ms ease-in-out', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class UserProfileComponent implements OnInit {
  profiles: Profile[];

  constructor(private profileService: ProfileService, private router: Router) {}

  ngOnInit() {
    this.profileService.getProfiles().subscribe((profiles: Profile[]) => {
      console.log('Profiles:', profiles);
      this.profiles = profiles;
    });
  }
}
