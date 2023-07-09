import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {CourseComponent} from "./Course/course/course.component";
import {RegisterUserComponent} from "./users/register-user/register-user.component";
import {LoginUserComponent} from "./users/login-user/login-user.component";
import {CreateCourseComponent} from "./Course/create-course/create-course.component";
import {ViewcourseComponent} from "./Course/viewcourse/viewcourse.component";




const appRoute : Routes =[
  {path:'',component: CourseComponent},
  {path:'Courses' , component: CourseComponent },
  {path:'RegisterUsers' , component: RegisterUserComponent},
  {path:'loginUsers' , component: LoginUserComponent},
  {path:'CreateCourse' ,component: CreateCourseComponent},
  {path:'viewCourse/:id' , component: ViewcourseComponent}
]

@NgModule({
  imports:[
    RouterModule.forRoot(appRoute)
  ],
  exports:[
    RouterModule
  ]
})
export class RouteModule{

}
