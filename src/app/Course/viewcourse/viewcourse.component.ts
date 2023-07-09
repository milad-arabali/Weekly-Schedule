import { Component } from '@angular/core';
import {Course} from "../../Share/Course.model";
import {CourseService} from "../Course.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-viewcourse',
  templateUrl: './viewcourse.component.html',
  styleUrls: ['./viewcourse.component.css']
})
export class ViewcourseComponent {
  course ?: Course;
  loading = false;
  // paramsSubscription: Subscription

  constructor(private courseServices: CourseService, private router: ActivatedRoute) {
  }

  ngOnInit() {
    this.router.params.subscribe(
      (params: Params) =>{
        this.course = this.courseServices.get(params['id']);
        // console.log(this.course)

      }
    )
  }
}
