import {Course} from "../Share/Course.model";
import {Injectable} from "@angular/core";


@Injectable({
  providedIn: 'root'
}

)
export class CourseService{
  private courses: Course[] = [
    new Course(1,'دستور پخت ماکارونی',
      'یک توضیح تست برای دستور پخت ماکارونی قرار می دهیم',
      '../assets/img/book.jpg',
      Date.now()),
    new Course(2,'دستور پخت سوپ',
      'یک توضیح تست برای دستور پخت سوپ ایرانی و تغییرات بوجود آمده قرار می دهیم',
      '../assets/img/book.jpg',
      Date.now()

    ),
    new Course(3,'دستور پخت قرمه سبزی',
      'یک توضیح تست برای دستور پخت قرمه سبزی برای تغییرات قرار می دهیم',
      '../assets/img/book.jpg',
      Date.now()),
    new Course(4,'دستور پخت قرمه سبزی',
      'یک توضیح تست برای دستور پخت قرمه سبزی برای تغییرات قرار می دهیم',
      '../assets/img/book.jpg',
      Date.now()),
    new Course(5,'دستور پخت قرمه سبزی',
      'یک توضیح تست برای دستور پخت قرمه سبزی برای تغییرات قرار می دهیم',
      '../assets/img/book.jpg',
      Date.now()),
    new Course(6,'دستور پخت قرمه سبزی',
      'یک توضیح تست برای دستور پخت قرمه سبزی برای تغییرات قرار می دهیم',
      '../assets/img/book.jpg',
      Date.now()),
    new Course(7,'دستور پخت قرمه سبزی',
      'یک توضیح تست برای دستور پخت قرمه سبزی برای تغییرات قرار می دهیم',
      '../assets/img/book.jpg',
      Date.now()),
    new Course(8,'دستور پخت قرمه سبزی',
      'یک توضیح تست برای دستور پخت قرمه سبزی برای تغییرات قرار می دهیم',
      '../assets/img/book.jpg',
      Date.now()),
  ]


  getCourse(){
      return  this.courses.slice()
  }
  get(id: number): Course{
    return <Course>this.getCourse().find(value => value.id === Number(id));
  }
}
