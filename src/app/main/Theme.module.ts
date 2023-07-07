import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ListSidebarModule} from "./list-sidebar/List-sidebar.module";
import {UserSidebarModule} from "./user-sidebar/User-sidebar.module";
import {MatSidenavModule} from "@angular/material/sidenav";
import { ThemeComponent } from './theme.component';
import { MainSidebarComponent } from './main-sidebar/main-sidebar.component';
import {headerModule} from "../header/header.module";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";




@NgModule({
  declarations: [

    ThemeComponent,
      MainSidebarComponent
  ],
  exports: [
    ThemeComponent
  ],
  imports: [
    CommonModule,
    ListSidebarModule,
    UserSidebarModule,
    MatSidenavModule,
    headerModule,
    MatButtonModule,
    MatIconModule
  ]
})


export class ThemeModule {}
