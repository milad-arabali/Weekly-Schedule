import { Component, OnInit} from '@angular/core';
import {CourseService} from "../Course.service";
import {Course} from "../../Share/Course.model";
import {openEditCourseDialog} from "../course-dialog/course-dialog.component";
import {filter} from "rxjs";
import {MatDialog} from "@angular/material/dialog";


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
  providers:[CourseService]
})
export class CourseComponent implements OnInit{

  courses !: Course[];
  constructor(private course: CourseService , private dialog: MatDialog) {
  }

  ngOnInit() {
        this.courses = this.course.getCourse();
  }
  editCourse(course: Course) {

    openEditCourseDialog(this.dialog, course)
      .pipe(
        filter(val => !!val)
      )
      .subscribe(
        val => console.log('new course value:', val)
      );


  }
}
