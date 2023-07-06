import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ListSidebarComponent} from "./list-sidebar.component";
import {MatSidenavModule} from "@angular/material/sidenav";


@NgModule(
  {
    declarations: [
      ListSidebarComponent
    ],
    exports: [
      ListSidebarComponent
    ],
    imports: [
      CommonModule,
      MatSidenavModule
    ]
  }
)

export class ListSidebarModule {

}
