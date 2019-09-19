import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder, Validator, ValidatorFn, ValidationErrors } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { disableDebugTools } from '@angular/platform-browser';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import { PAGE_DOWN } from '@angular/cdk/keycodes';


@Component({
  selector: 'app-bookameal',
  templateUrl: './bookameal.component.html',
  styleUrls: ['./bookameal.component.css']
})
export class BookamealComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor(private data: DataService, private router: Router, private fb: FormBuilder, private toastr: ToastrService) {  }
obj: object;
/*bookmealform = this.fb.group({
  pname1 : ['{{obj.pname}}', []],
  location1 : ['{{obj.location}}', []],
  reservationdate1 : ['{{obj.reservationdate}}', []],
  servingdate1 : ['{{obj.servingdate}}', []],
  name1 : ['{{obj.name}}', []],
  options1 : ['{{obj.options}}', []],
  quantity1: ['{{obj.quantity}}', []],
  price1: ['{{obj.price}}', []],
});*/

ngOnInit() {
this.data.currentMessage.subscribe(obj => this.obj = obj);
console.log(this.obj);
this.galleryOptions = [
  {
      width: '600px',
      height: '400px',
      thumbnailsColumns: 3,
      imageAnimation: NgxGalleryAnimation.Slide
  },
  // max-width 800
  {
      breakpoint: 800,
      width: '101%',
      height: '600px',
      imagePercent: 80,
      thumbnailsPercent: 20,
      thumbnailsMargin: 20,
      thumbnailMargin: 20
  },
  // max-width 400
  {
      breakpoint: 400,
      preview: false
  }
];

this.galleryImages = [
  {
    small: 'assets/food2.jpg',
    medium: 'assets/food2.jpg',
    big: 'assets/food2.jpg'
      },
      {
        small: 'assets/thai-food.jpg',
        medium: 'assets/thai-food.jpg',
        big: 'assets/thai-food.jpg'
      }
];

  }
 // obj1 = JSON.stringify(this.obj);
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
  /* wallet()  {
    this.router.navigateByUrl('/wallet');
   }*/
   homeitself() {
    this.router.navigateByUrl('/home');
   }
   onBook() {
      this.toastr.success('successfully booked');
    }
    onBack() {
      this.router.navigateByUrl('/home');
    }
  }
