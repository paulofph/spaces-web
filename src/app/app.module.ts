import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module'
import { AppHttpInterceptor } from './_shared/app-http.interceptor'
import { RouterModule, Routes } from '@angular/router';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

//Angular Material
import {
  MatInputModule,
  MatSelectModule,
  MatDatepickerModule
} from '@angular/material';

//Components
import { ModalComponent } from './components/_shared/modal/modal.component'
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { IconTextButtonComponent } from './components/_shared/buttons/icon-text-button/icon-text-button.component'
import { HorizontalAccountComponent } from './components/_shared/account/horizontal-account/horizontal-account.component'
import { HomeComponent } from './components/home/home.component'
import { SearchBarComponent } from './components/home/components/search-bar/search-bar.component'
import { SelectComponent } from './components/_shared/form/select/select.component'
import { NumericalInputComponent } from './components/_shared/form/numerical-input/numerical-input.component'
import { MapComponent } from './components/_shared/map/map.component'
import { MapPlaceDetailsComponent } from './components/_shared/map/map-place-details/map-place-details.component'

//Services
import { AuthService } from './services/http/auth/auth.service'

const appRoutes: Routes = [
  { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ModalComponent,
    IconTextButtonComponent,
    HorizontalAccountComponent,
    HomeComponent,
    SearchBarComponent,
    SelectComponent,
    NumericalInputComponent,
    MapComponent,
    MapPlaceDetailsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    GooglePlaceModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    MatInputModule,
    FormsModule,
    MatSelectModule,
    MatDatepickerModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA_AFdEHBZhijRUI1XZOTcfZ59vi11j7nM',
      libraries: ['places']
    })
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
