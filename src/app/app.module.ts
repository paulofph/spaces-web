import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module'
import { AppHttpInterceptor } from './_shared/app-http.interceptor'

//Components
import { ModalComponent } from './components/_shared/modal/modal.component'
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { IconTextButtonComponent } from './components/_shared/buttons/icon-text-button/icon-text-button.component'
import { HorizontalAccountComponent } from './components/_shared/account/horizontal-account/horizontal-account.component'

//Services
import { AuthService } from './services/http/auth/auth.service'

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ModalComponent,
    IconTextButtonComponent,
    HorizontalAccountComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    AuthService,
    { 
      provide: HTTP_INTERCEPTORS, 
      useClass: AppHttpInterceptor, 
      multi: true 
    }
  ],
  entryComponents: [
    ModalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
