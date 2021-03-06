import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
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
  MatDatepickerModule,
  MatMenuModule,
  MatCheckboxModule
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
import { OwnerAreaComponent } from './components/owner-area/owner-area.component'
import { SpaceComponent } from './components/space/space.component'
import { InputComponent } from './components/_shared/form/input/input.component'
import { SpaceEditComponent } from './components/space/space-edit/space-edit.component'
import { SelectObjectComponent } from './components/_shared/form/select-object/select-object.component'
import { LocationInputComponent } from './components/_shared/form/location-input/location-input.component'
import { CheckboxComponent } from './components/_shared/form/checkbox/checkbox.component'
import { TextAreaComponent } from './components/_shared/form/text-area/text-area.component'
import { SpacesListComponent } from './components/home/components/spaces-list/spaces-list.component'
import { ListComponent } from './components/_shared/list/list.component'
import { SpaceCardComponent } from './components/home/components/space-card/space-card.component'
import { ColoredNumberBoxComponent } from './components/_shared/indicators/colored-number-box/colored-number-box.component'
import { IconLabelComponent } from './components/_shared/indicators/icon-label/icon-label.component'
import { IconLabelLabelComponent } from './components/_shared/indicators/icon-label-label/icon-label-label.component'
import { CommoditiesComponent } from './components/space/components/commodities/commodities.component'
import { CharacteristicsComponent } from './components/space/components/characteristics/characteristics.component'

//Services
import { AuthService } from './services/http/auth/auth.service'
import { TranslationService } from './services/translation/translation.service'

//Pipes
import { TranslatePipe } from './_shared/pipes/translate.pipe'

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'owner-area', component: OwnerAreaComponent },
  { path: 'space/edit/:id', component: SpaceEditComponent },
  { path: 'space/:id', component: SpaceComponent }
];

export function initConfiguration(
  translationService: TranslationService
): Function {
  return () => {
    return translationService.load(); // makes http request and returns Promise correctly
  }
}

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
    MapPlaceDetailsComponent,
    OwnerAreaComponent,
    SpaceComponent,
    InputComponent,
    SpaceEditComponent,
    SelectObjectComponent,
    LocationInputComponent,
    CheckboxComponent,
    TextAreaComponent,
    SpacesListComponent,
    ListComponent,
    SpaceCardComponent,
    ColoredNumberBoxComponent,
    IconLabelComponent,
    IconLabelLabelComponent,
    CommoditiesComponent,
    CharacteristicsComponent,
    TranslatePipe
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
    MatMenuModule,
    MatCheckboxModule,
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
    },
    { 
      provide: APP_INITIALIZER, 
      useFactory: initConfiguration, 
      deps: [TranslationService], 
      multi: true 
    },
    TranslationService,
    TranslatePipe
  ],
  entryComponents: [
    ModalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
