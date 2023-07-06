import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {UserSidebarComponent} from "./user-sidebar.component";





@NgModule({
  declarations: [
    UserSidebarComponent
  ],
  exports: [
    UserSidebarComponent
  ],
  imports: [
    CommonModule
  ]
})

export class UserSidebarModule{}
