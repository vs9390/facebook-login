import { Component } from '@angular/core';
import { FacebookService, InitParams, LoginResponse } from 'ngx-facebook';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'facebook-app';

  constructor(private fb: FacebookService) {
    let initParams: InitParams = {
      appId: '316076385873113',
      xfbml: true,
      version: 'v3.1'
    };
    fb.init(initParams);
  }

  loginWithFacebook(): void {

    this.fb.login()
      .then((response: LoginResponse) => console.log(response))
      .catch((error: any) => console.error(error));

  }
}
