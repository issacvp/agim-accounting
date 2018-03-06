import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

let counter = 0;

@Injectable()
export class UserService {

  private users = {
    issac: { name: 'Issac Prasad', picture: 'assets/images/issac.png' },
    bruno: { name: 'Pastor Bruno', picture: 'assets/images/bruno.png' },
    joelma: { name: 'Joelma', picture: 'assets/images/joelma.png' },
    mahesh: { name: 'Mahesh Paul', picture: 'assets/images/mahesh.png' },
    sandra: { name: 'Snadra curichiba', picture: 'assets/images/sandra.png' },
    sonya: { name: 'Sonya', picture: 'assets/images/sonya.png' },
    nick: { name: 'Nick Jones', picture: 'assets/images/nick.png' },
    eva: { name: 'Eva Moor', picture: 'assets/images/eva.png' },
    jack: { name: 'Jack Williams', picture: 'assets/images/jack.png' },
    lee: { name: 'Lee Wong', picture: 'assets/images/lee.png' },
    alan: { name: 'Alan Thompson', picture: 'assets/images/alan.png' },
    kate: { name: 'Kate Martinez', picture: 'assets/images/kate.png' },
  };

  private userArray: any[];

  constructor() {
    // this.userArray = Object.values(this.users);
  }

  getUsers(): Observable<any> {
    return Observable.of(this.users);
  }

  getUserArray(): Observable<any[]> {
    return Observable.of(this.userArray);
  }

  getUser(): Observable<any> {
    counter = (counter + 1) % this.userArray.length;
    return Observable.of(this.userArray[counter]);
  }
}
