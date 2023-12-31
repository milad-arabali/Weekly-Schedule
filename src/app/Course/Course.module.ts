import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {CourseComponent} from "./course/course.component";
import {MatTabsModule} from "@angular/material/tabs";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {CreateCourseComponent} from "./create-course/create-course.component";
import {MatStepperModule} from "@angular/material/stepper";
import { Createstep2Component } from './create-course/createstep2/createstep2.component';
import {TextFieldModule} from "@angular/cdk/text-field";
import {MatInputModule} from "@angular/material/input";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatOptionModule} from "@angular/material/core";
import {MatRadioModule} from "@angular/material/radio";
import {MatSelectModule} from "@angular/material/select";
import {ReactiveFormsModule} from "@angular/forms";
import {Createstep1Module} from "./create-course/createstep1/createstep1.module";
import { ViewcourseComponent } from './viewcourse/viewcourse.component';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import { CourseDialogComponent } from './course-dialog/course-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatGridListModule} from "@angular/material/grid-list";



@NgModule({
  declarations:[
    CourseComponent,
    CreateCourseComponent,
    Createstep2Component,
    ViewcourseComponent,
    CourseDialogComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    MatStepperModule,
    TextFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatOptionModule,
    MatRadioModule,
    MatSelectModule,
    ReactiveFormsModule,
    Createstep1Module,
    RouterLinkActive,
    RouterLink,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatGridListModule
  ]
})
export class CourseModule {}
