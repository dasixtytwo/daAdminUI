import { Injectable } from '@angular/core';
import { WebRequestService } from '@theme/services/web-request.service';
import { Profile } from '@theme/models/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  constructor(private webRequestService: WebRequestService) {}

  getProfiles() {
    return this.webRequestService.get('profiles/all');
  }
}
