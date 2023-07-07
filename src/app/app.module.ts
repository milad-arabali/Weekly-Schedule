import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import {headerModule} from "./header/header.module";
import {ListSidebarModule} from "./main/list-sidebar/List-sidebar.module";
import {UserSidebarModule} from "./main/user-sidebar/User-sidebar.module";
import {ThemeModule} from "./main/Theme.module";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";




@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,




  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    headerModule,
    ListSidebarModule,
    UserSidebarModule,
    ThemeModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
