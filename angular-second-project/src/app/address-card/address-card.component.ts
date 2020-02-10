import { Component, OnInit, Input } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})


export class AddressCardComponent implements OnInit {
  
  @Input("user") user: User;  //get user property from parent component (when is defined as input)
  isCollapsed: boolean = true;

  constructor() {   
   }

   toggleCollapse() : void {
     this.isCollapsed = !this.isCollapsed;
   }

  ngOnInit(): void {   
  }

}
