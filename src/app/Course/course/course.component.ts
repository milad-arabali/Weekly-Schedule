import { Component, OnInit} from '@angular/core';
import {CourseService} from "../Course.service";
import {Course} from "../../Share/Course.model";
import {openEditCourseDialog} from "../course-dialog/course-dialog.component";
import {filter} from "rxjs";
import {MatDialog} from "@angular/material/dialog";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
  providers:[CourseService]
})
export class CourseComponent implements OnInit{

  courses !: Course[];
  cols = 1;

  rowHeight = '500px';

  handsetPortrait = false;


  constructor(private course: CourseService , private dialog: MatDialog ,private responsive:BreakpointObserver) {
  }

  ngOnInit() {
        this.courses = this.course.getCourse();

    this.responsive.observe([
        Breakpoints.TabletPortrait,
        Breakpoints.TabletLandscape,
        Breakpoints.HandsetPortrait,
        Breakpoints.HandsetLandscape
    ])
        .subscribe(result => {

            this.cols = 3;
            this.rowHeight = "500px";
            this.handsetPortrait = false;

            const breakpoints = result.breakpoints;

            if (breakpoints[Breakpoints.TabletPortrait]) {
                this.cols = 1;
            }
            else if (breakpoints[Breakpoints.HandsetPortrait]) {
                this.cols = 1;
                this.rowHeight = "430px";
                this.handsetPortrait = true;
            }
            else if (breakpoints[Breakpoints.HandsetLandscape]) {
                this.cols = 1;
            }
            else if (breakpoints[Breakpoints.TabletLandscape]) {
                this.cols = 2;
            }

        });

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
