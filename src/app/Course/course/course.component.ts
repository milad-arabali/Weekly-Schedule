import {Component, OnInit} from '@angular/core';
import {CourseService} from "../Course.service";
import {Course} from "../../Share/Course.model";

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
  providers:[CourseService]
})
export class CourseComponent implements OnInit{

  courses !: Course[];
  constructor(private course: CourseService) {
  }

  ngOnInit() {
        this.courses = this.course.getCourse();
  }

}
