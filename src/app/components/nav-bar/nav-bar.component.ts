import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/http/auth/auth.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { ModalComponent } from '../_shared/modal/modal.component';
import { UserService } from 'src/app/services/http/user/user.service';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';
import { StateService } from 'src/app/services/state/state.service';
import { Member } from 'src/app/models/entities/member';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  public user: Member;

  constructor(
    private authService: AuthService,
    private localStorage: LocalStorageService,
    private state: StateService,
    private userService: UserService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    public loginDialog: MatDialog
  ) { }

  ngOnInit() {
    if(this.localStorage.get('token')) {
      this.getLoggedinUser()
    }
    this.route.queryParams.subscribe((params: Params) => {
      if (params.code) {
        this.authService.requestFacebookAccessToken(params.code)
          .subscribe((params: Params) => {
            this.authService.facebookSignIn(params.access_token)
              .subscribe((params: Params) => {
                this.localStorage.set('token', params.token);
                this.getLoggedinUser();
                this.router.navigate(['/']);
              });
          });
      }
    });
  }

  facebookLogin = () => {
    this.authService.requestFacebookRedirectUri()
    .subscribe((response: {redirect_uri: string}) => {
      window.location.replace(response.redirect_uri);
    });
  }
    
  openDialog(): void {
    const dialogRef = this.loginDialog.open(ModalComponent, {
      width: '250px',
      data: {
        facebook: this.facebookLogin
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  getLoggedinUser () {
    let subscriber = this.userService.getMe().subscribe(user => {
      this.state.setUser(user);
      this.user = this.state.getUser();
      subscriber.unsubscribe();
    })
  }
}
