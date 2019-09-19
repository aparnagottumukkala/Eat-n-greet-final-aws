import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder, Validator, ValidatorFn, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  showMainContent: Boolean = true;
  constructor(private fb: FormBuilder) { }

userDetails  = [
  {
    fname: 'pooja',
lname: 'ranganathan',
email: 'poojars34@gmail.com',
MobileNo: '90674523',
gender: 'female',
DOB: '31/01/1994',
address:[{
  "blockNo":108,
  "FloorNo":8,
  "UnitNo":64,
  "StreetName":"West Avenue 6",
  "BuildingName":"Cho chu Kang",
  "postCode":60048}],
Password: 'demo12345'
  }
];
 /* {
    fname: 'pooja',
lname: 'kokkula',
email: 'poojarskokkula@gmail.com',
MobileNo: '90674523',
gender: 'female',
DOB: '11/05/1996',
address: [
  {
  blockNo : 108,
  FloorNo: 8,
  UnitNo: 64,
  StreetName: 'West Avenue 6',
  BuildingName: 'app',
  postCode: 60048}],
Password: 'demo12345',
  }*/

  registrationform = this.fb.group({
    firstname: ['{{userDetails.fname}}', []]
  });
ngOnInit() {
    }
  }
