import {Component, EventEmitter, Output} from '@angular/core';
import {RegisterUserComponent} from "../users/register-user/register-user.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
 @Output() showSidebarEmitter: EventEmitter<boolean> =new EventEmitter<boolean>();
   sidebarStatus:boolean =true;
  showSidebar() {
        this.sidebarStatus =!this.sidebarStatus;
        this.showSidebarEmitter.emit(this.sidebarStatus);
  }

  protected readonly RegisterUserComponent = RegisterUserComponent;
}
