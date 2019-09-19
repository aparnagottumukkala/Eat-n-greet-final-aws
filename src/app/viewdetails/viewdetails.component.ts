import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import { DataService } from '../data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder, Validator, ValidatorFn, ValidationErrors } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { disableDebugTools } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewdetails',
  templateUrl: './viewdetails.component.html',
  styleUrls: ['./viewdetails.component.css']
})
export class ViewdetailsComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  constructor(private router: Router, private data: DataService, private toastr: ToastrService) { }

  ngOnInit() {
    this.galleryOptions = [
      {
          width: '600px',
          height: '400px',
          thumbnailsColumns: 4,
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
        small: 'assets/food2.jpg',
        medium: 'assets/food2.jpg',
        big: 'assets/food2.jpg'
      },
      {
          small: 'assets/3-small.jpg',
          medium: 'assets/3-medium.jpg',
          big: 'assets/3-big.jpg'
      }
  ];
  }
  /* logout() {
    sessionStorage.clear();
    this.router.navigateByUrl('/login');
  }
  orders() {
   this.router.navigateByUrl('/myorders');
  }
  postMeal()  {
    this.router.navigateByUrl('/postmeal');
   }
  wallet()  {
    this.router.navigateByUrl('/wallet');
   }
   homeitself() {
    this.router.navigateByUrl('/home');
   }
   onBook() {
      this.toastr.success('successfully booked');
      this.router.navigateByUrl('/myorders');
    }*/
}
