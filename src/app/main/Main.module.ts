import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MainComponent} from "./main.component";
import {ListSidebarModule} from "./list-sidebar/List-sidebar.module";
import {UserSidebarModule} from "./user-sidebar/User-sidebar.module";




@NgModule({
  declarations: [
    MainComponent
  ],
  exports: [
    MainComponent
  ],
  imports: [
    CommonModule,
    ListSidebarModule,
    UserSidebarModule
  ]
})


export class MainModule{}
