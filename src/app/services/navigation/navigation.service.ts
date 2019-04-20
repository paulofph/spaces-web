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

  space(id: number) {
    this.router.navigate(['space', id])
  }

  //To deprecate and Delete Component
  ownerArea() {
    this.router.navigate(['owner-area'])
  }
}
