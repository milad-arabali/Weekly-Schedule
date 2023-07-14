import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Course} from "../../Share/Course.model";
import {CourseService} from "../Course.service";
import {ActivatedRoute, Params} from "@angular/router";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {PeriodicElement} from "../../Share/table.model";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-viewcourse',
  templateUrl: './viewcourse.component.html',
  styleUrls: ['./viewcourse.component.css']
})
export class ViewcourseComponent implements OnInit,AfterViewInit{
  @ViewChild(MatPaginator) paginator : MatPaginator;
  @ViewChild(MatSort) sort : MatSort;

  data: PeriodicElement[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  ];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(this.data);
  loading = false;
  course ?: Course;

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
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }
}
