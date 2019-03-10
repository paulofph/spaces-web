import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(
    private router: Router,
  ) { }

  addQueryParams(queryParams) {
    this.router.navigate(
      [], 
      { queryParams: queryParams }
    );
  }

  ownerArea() {
    this.router.navigate(['owner-area'])
  }
}
