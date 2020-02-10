import { Component } from '@angular/core';
import { User } from './address-card/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userP: User;  
  inputText: string = "Initial value"; 

  constructor() {
    this.userP = new User();
    this.userP.name = "My Name";
    this.userP.designation = "My title";
    this.userP.address = "My Address";
    this.userP.phone = ["234234-234234", "567567-56757567"];
  }
}
