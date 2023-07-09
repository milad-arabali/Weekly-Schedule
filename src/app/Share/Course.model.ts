export class Course{
  id: number;
  name: string;
  description: string;
  imagePath: string;
  date: number;

  constructor(id:number ,name: string, description: string, imagePath:string, date: number){
    this.id=id;
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this.date = date;
  }
}
