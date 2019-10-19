import { Injectable } from '@angular/core';
import { AuthService } from '@theme/services/auth/auth.service';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  UrlTree
} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {
    if (!this.authService.isUserLoggedIn()) {
      console.log('You are not Authorized to see Admin Page.');

      // navigate to login page
      this.router.navigate(['/auth/login'], {
        queryParams: { retUrl: route.url }
      });
      // you can save redirect url so after authing we can move them back to the page they requested
      return false;
    }

    return true;
  }
}
