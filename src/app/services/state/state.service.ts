import { Injectable } from '@angular/core';
import { Member } from 'src/app/models/entities/member';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private user: Member;

  setUser(user) {
    this.user = Object.assign({}, user);
  }

  getUser() {
    return this.user;
  }
}
