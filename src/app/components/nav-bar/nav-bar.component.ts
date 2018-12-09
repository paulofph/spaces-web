import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { ModalComponent } from '../_shared/modal/modal.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    public loginDialog: MatDialog
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

  openDialog(): void {
    const dialogRef = this.loginDialog.open(ModalComponent, {
      width: '250px',
      data: {name: 'test', animal: 'test2'}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
}
