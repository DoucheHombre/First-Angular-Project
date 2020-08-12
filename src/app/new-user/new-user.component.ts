import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  firstName:string="";
  lastName:string="";
  personAge:string="";

  
  fnameClass="fName";
  lnameClass="lName"
  ageClass="pAge";

  constructor() { }

  ngOnInit(): void {
  }

  onClick()
  {
    console.log("First Name is"+this.firstName);
    console.log("Last Name is"+this.lastName);
    console.log("Age is"+this.personAge);
  }

  onRefresh()
  {
    this.firstName="";
    this.lastName="";
    this.personAge="";
    
  }


}
