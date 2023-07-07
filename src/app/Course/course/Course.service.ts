import {Course} from "../../Share/Course.model";
export class CourseService{
  private courses: Course[] = [
    new Course('دستور پخت ماکارونی',
      'یک توضیح تست برای دستور پخت ماکارونی قرار می دهیم',
      '../assets/img/book.jpg',
      Date.now()),
    new Course('دستور پخت سوپ',
      'یک توضیح تست برای دستور پخت سوپ ایرانی و تغییرات بوجود آمده قرار می دهیم',
      '../assets/img/book.jpg',
      Date.now()

    ),
    new Course('دستور پخت قرمه سبزی',
      'یک توضیح تست برای دستور پخت قرمه سبزی برای تغییرات قرار می دهیم',
      '../assets/img/book.jpg',
      Date.now()),
  ]


  getCourse(){
      return  this.courses.slice()
  }
}
