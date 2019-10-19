import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '@theme/services/auth/auth.service';
import { Router } from '@angular/router';
import { themeAnimations } from '@theme/animations/index';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: themeAnimations
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    document.querySelector('body').setAttribute('themebg-pattern', 'theme1');
  }

  onHandlelogin(email: string, password: string) {
    this.authService
      .login(email, password)
      .subscribe((res: HttpResponse<any>) => {
        if (res.status === 200) {
          // we have logged in successfully
          this.router.navigate(['/']);
        }
        console.log(res);
      });
  }
}
