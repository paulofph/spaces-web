import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params: Params) => {
      if (params.code) {
        this.authService.requestFacebookAccessToken(params.code)
          .subscribe((params: Params) => {
            this.authService.facebookSignIn(params.access_token)
              .subscribe((params: Params) => {
                console.log(params)
                this.router.navigate(['/']);
              });
          });
      }
    });
  }

  facebookLogin() {
    this.authService.requestFacebookRedirectUri()
    .subscribe((response: {redirect_uri: string}) => {
      console.log(response)
      window.location.replace(response.redirect_uri);
    });
  }
}
