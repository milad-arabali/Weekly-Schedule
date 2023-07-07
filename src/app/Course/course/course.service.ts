import {Course} from "../../Share/Course.model";
export class CourseService{
  private courses: Course[] = [
    new Course('دستور پخت ماکارونی',
      'یک توضیح تست برای دستور پخت ماکارونی قرار می دهیم',
      'https://deow9bq0xqvbj.cloudfront.net/image-logo/935735/espageti.jpg',
      Date.now()),
    new Course('دستور پخت سوپ',
      'یک توضیح تست برای دستور پخت سوپ ایرانی و تغییرات بوجود آمده قرار می دهیم',
      'http://www.beytoote.com/images/stories/food/barley-soup-eb015.jpg',Date.now()

    ),
    new Course('دستور پخت قرمه سبزی',
      'یک توضیح تست برای دستور پخت قرمه سبزی برای تغییرات قرار می دهیم',
      'http://chelobarekat.com/wp-content/uploads/2017/08/%D8%AE%D9%88%D8%B1%D8%B4%D8%AA-%D9%82%D8%B1%D9%85%D9%87-%D8%B3%D8%A8%D8%B2%DB%8C.jpg',
      Date.now()),
  ]


  getCourse(){
      return  this.courses.slice()
  }
}
