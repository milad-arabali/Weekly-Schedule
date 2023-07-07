import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {CourseComponent} from "./course.component";
import {MatTabsModule} from "@angular/material/tabs";
import {MatCardModule} from "@angular/material/card";



@NgModule({
  declarations:[
    CourseComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    MatCardModule
  ]
})
export class CourseModule {}
