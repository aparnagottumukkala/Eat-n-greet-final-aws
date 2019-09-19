import { Postmeal } from './../postmeal';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { PostmealserService } from '../postmealser.service';

@Component({
  selector: 'app-newhome',
  templateUrl: './newhome.component.html',
  styleUrls: ['./newhome.component.css']
})
export class NewhomeComponent implements OnInit {
  public userinfo: Postmeal[] = [];
  message: string;
  obj: any;
/*userinfo = [
  {
    producerOrderId : '2',
firstName : 'app2',
lastName : 'raj2',
itemList :  [
  {
    id: 1,
    name: 'chapathi'
   },
   {
    id: 2,
    name: 'chicken'
   }
],
address: [
  {
  blockNo : 108,
  FloorNo: '8',
  UnitNo: '64',
  StreetName: 'West Avenue 6',
  BuildingName: 'app',
  postCode: '60048'
}],
servingDate : '2019-09-01T01:01',
paymentDeadline : '2019-09-05T01:01',
reservationDeadline : '2019-09-13T01:01',
price : 25,
maxPeopleCount: 4,
actualPeopleCount : 2,
preferenceType : 'DineIn',
otherItems : 'nothing for now',
note : 'this is made chapathi flour and chicken',

    uri: "https://demostore121332.blob.core.windows.net/images/food_sample.jpg?sv=2018-03-28&ss=b&srt=sco&sp=rlac&se=2019-10-17T09:50:35Z&st=2019-09-16T01:50:35Z&spr=https&sig=tPN6aDJSveCJ%2BDa0E2HFftepTGYFMGt6CDPqQmbYbQU%3D"
  },
  {
    producerOrderId : '1',
firstName : 'app1',
lastName : 'raj1',
itemList :  [
  {
    id: 1,
    name: 'chapathi'
   },
   {
    id: 2,
    name: 'chicken'
   }
],
address: [
  {
  blockNo : 108,
  FloorNo: 8,
  UnitNo: 64,
  StreetName: 'West Avenue 6',
  BuildingName: 'app',
  postCode: 60048}],
servingDate : '2019-09-01T01:01',
paymentDeadline : '2019-09-05T01:01',
reservationDeadline : '2019-09-13T01:01',
price : 25,
maxPeopleCount: 4,
actualPeopleCount : 2,
preferenceType : 'DineIn',
otherItems : 'nothing for now1',
note : 'this is made chapathi flour and chicken1',
uri : "https://demostore121332.blob.core.windows.net/images/food1.jpg?sv=2018-03-28&ss=b&srt=sco&sp=rlac&se=2019-10-17T09:50:35Z&st=2019-09-16T01:50:35Z&spr=https&sig=tPN6aDJSveCJ%2BDa0E2HFftepTGYFMGt6CDPqQmbYbQU%3D"
  },
  {
    producerOrderId : '3',
firstName : 'app3',
lastName : 'raj3',
itemList :  [
  {
    id: 1,
    name: 'chapathi'
   },
   {
    id: 2,
    name: 'chicken'
   }
],
address: [
  {
  blockNo : 108,
  FloorNo: 8,
  UnitNo: 64,
  StreetName: 'West Avenue 6',
  BuildingName: 'app',
  postCode: 60048}],
servingDate : '2019-09-01T01:01',
paymentDeadline : '2019-09-05T01:01',
reservationDeadline : '2019-09-13T01:01',
price : 25,
maxPeopleCount: 4,
actualPeopleCount : 2,
preferenceType : 'DineIn',
otherItems : 'nothing for now',
note : 'this is made chapathi flour and chicken',
uri: "https://demostore121332.blob.core.windows.net/images/food_sample.jpg?sv=2018-03-28&ss=b&srt=sco&sp=rlac&se=2019-10-17T09:50:35Z&st=2019-09-16T01:50:35Z&spr=https&sig=tPN6aDJSveCJ%2BDa0E2HFftepTGYFMGt6CDPqQmbYbQU%3D"
  },
  {
    producerOrderId : '5',
firstName : 'app5',
lastName : 'raj5',
itemList :  [
  {
    id: 1,
    name: 'chapathi'
   },
   {
    id: 2,
    name: 'chicken'
   }
],
address: [
  {
  blockNo : 108,
  FloorNo: 8,
  UnitNo: 64,
  StreetName: 'West Avenue 6',
  BuildingName: 'app',
  postCode: 60048}],
servingDate : '2019-09-01T01:01',
paymentDeadline : '2019-09-05T01:01',
reservationDeadline : '2019-09-13T01:01',
price : 25,
maxPeopleCount: 4,
actualPeopleCount : 2,
preferenceType : 'DineIn',
otherItems : 'nothing for now',
note : 'this is made chapathi flour and chicken',
uri : "https://demostore121332.blob.core.windows.net/images/food1.jpg?sv=2018-03-28&ss=b&srt=sco&sp=rlac&se=2019-10-17T09:50:35Z&st=2019-09-16T01:50:35Z&spr=https&sig=tPN6aDJSveCJ%2BDa0E2HFftepTGYFMGt6CDPqQmbYbQU%3D"
  },
  {
    producerOrderId : '4',
    firstName : 'app4',
    lastName : 'raj4',
    itemList : [
      {
        id: 1,
        name: 'chapathi'
       },
       {
        id: 2,
        name: 'chicken'
       }
    ],
    address: [
      {
      blockNo : 108,
      FloorNo: 8,
      UnitNo: 64,
      StreetName: 'West Avenue 6',
      BuildingName: 'app',
      postCode: 60048}],
    servingDate : '2019-09-01T01:01',
    paymentDeadline : '2019-09-05T01:01',
    reservationDeadline : '2019-09-13T01:01',
    price : 25,
    maxPeopleCount: 4,
    actualPeopleCount : 2,
    preferenceType : 'DineIn',
    otherItems : 'nothing for now',
    note : 'this is made chapathi flour and chicken',    
    uri: "https://demostore121332.blob.core.windows.net/images/food_sample.jpg?sv=2018-03-28&ss=b&srt=sco&sp=rlac&se=2019-10-17T09:50:35Z&st=2019-09-16T01:50:35Z&spr=https&sig=tPN6aDJSveCJ%2BDa0E2HFftepTGYFMGt6CDPqQmbYbQU%3D"
  }
];*/
  constructor(private router: Router, private data: DataService, private post: PostmealserService) { }

  ngOnInit() {
    this.post.getpostmeal().subscribe(
      (data) => {this.userinfo = data;
      console.log(this.userinfo);
      console.log(this.userinfo.uri);
    });
  }
logout() {
  sessionStorage.clear();
  this.router.navigate(['login']);
}
orders() {
 this.router.navigateByUrl('/myorders');
}
postMeal()  {
  this.router.navigateByUrl('/postmeal');
 }
 homeitself() {
  this.router.navigateByUrl('/home');
 }
 /*Profile() {
   this.router.navigateByUrl('/profile');
 }*/
 newMessage(user1: object) {
  this.data.changeMessage(user1);
 }
 bookmeal() {
   this.router.navigateByUrl('/bookameal');
 }
}
