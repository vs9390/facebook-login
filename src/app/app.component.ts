import { Component } from '@angular/core';
import { FacebookService, InitParams, LoginResponse, LoginOptions } from 'ngx-facebook';

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

  // Simple login
  loginWithFacebook(): void {
    this.fb.login()
      .then((response: LoginResponse) => console.log(response))
      .catch((error: any) => console.error(error));
  }


  // Login with different permissions
  loginWithOptions(): void {
    const loginOptions: LoginOptions = {
      enable_profile_selector: true,
      return_scopes: true,
      scope: 'public_profile,user_friends,manage_pages,email,pages_show_list'
    };

    this.fb.login(loginOptions)
      .then((res: LoginResponse) => {
        console.log('Logged in', res);
      })
      .catch((error: any) => console.error(error));
  }

   // Check if user is login
  getLoginStatus(): void  {
    this.fb.getLoginStatus()
      .then(console.log.bind(console))
      .catch(console.error.bind(console));
  }

  // Get the user's profile
  getProfile(): void  {
    this.fb.api('/me')
      .then((res: any) => {
        console.log('Got the users profile', res);
      })
      .catch((error: any) => console.error(error));
  }

   // Get the users friends
  getFriends(): void {
    this.fb.api('/me/friends')
      .then((res: any) => {
        console.log('Got the users friends', res);
      })
      .catch((error: any) => console.error(error));
  }

   // Get the pages list
   getPages(): void {
    this.fb.api('/me/accounts')
      .then((res: any) => {
        console.log('Got the users pages', res);
      })
      .catch((error: any) => console.error(error));
  }

  // Get the campaigns list
  getCampaigns(): void {
    this.fb.api('/act_1113979152100135/campaigns')
      .then((res: any) => {
        console.log('Got the page campaigns', res);
      })
      .catch((error: any) => console.error(error));
  }

  // Get the ads list
  getAds(): void {
    this.fb.api('/act_1113979152100135/ads')
      .then((res: any) => {
        console.log('Got the page campaigns', res);
      })
      .catch((error: any) => console.error(error));
  }

}
