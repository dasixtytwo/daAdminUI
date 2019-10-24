import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { AuthService } from '@theme/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reg',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}
  model: any = {};

  ngOnInit() {
    document.querySelector('body').setAttribute('themebg-pattern', 'theme1');
  }

  onHandleSignUp(email: string, password: string) {
    console.log('SignUp:', { email, password });
    this.authService
      .signup(email, password)
      .subscribe((res: HttpResponse<any>) => {
        console.log(res);
        this.router.navigate(['/dashboard']);
      });
  }
}
