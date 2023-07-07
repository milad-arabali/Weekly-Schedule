import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {CourseComponent} from "./course.component";
import {MatTabsModule} from "@angular/material/tabs";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations:[
    CourseComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class CourseModule {}
