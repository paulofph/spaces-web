import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module'
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

//Components
import { ModalComponent } from './components/_shared/modal/modal.component'

//Services
import { AuthService } from './services/auth/auth.service'

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ModalComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    AuthService
  ],
  entryComponents: [
    ModalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
