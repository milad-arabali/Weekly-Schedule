export class Course{
  name: string;
  description: string;
  imagePath: string;
  date: number;

  constructor(name: string, description: string, imagePath:string, date: number){
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this.date = date;
  }
}
