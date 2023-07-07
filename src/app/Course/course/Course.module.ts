import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {CourseComponent} from "./course.component";
import {MatTabsModule} from "@angular/material/tabs";



@NgModule({
  declarations:[
    CourseComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule
  ]
})
export class CourseModule {}
