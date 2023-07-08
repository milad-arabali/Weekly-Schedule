import {NgModule} from "@angular/core";
import {Createstep1Component} from "./createstep1.component";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatRadioModule} from "@angular/material/radio";
import {MatSelectModule} from "@angular/material/select";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatCheckboxModule} from "@angular/material/checkbox";

@NgModule(
  {
    declarations: [
      Createstep1Component

    ]
    ,
    exports: [
      Createstep1Component
    ],
    imports: [
      CommonModule,
      ReactiveFormsModule,
      MatInputModule,
      MatRadioModule,
      MatSelectModule,
      MatDatepickerModule,
      MatCheckboxModule
    ]
  }
)
export class Createstep1Module{

}
