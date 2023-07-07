import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {LoginUserComponent} from "./login-user/login-user.component";
import {RegisterUserComponent} from "./register-user/register-user.component";




@NgModule({
  declarations:[
    LoginUserComponent,
    RegisterUserComponent
  ]
  ,
  imports:[
    CommonModule,

  ]
})
export class UserModule{

}
