import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {UserSidebarComponent} from "./user-sidebar.component";
import {MatSidenavModule} from "@angular/material/sidenav";





@NgModule({
  declarations: [
    UserSidebarComponent
  ],
  exports: [
    UserSidebarComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule
  ]
})

export class UserSidebarModule{}
