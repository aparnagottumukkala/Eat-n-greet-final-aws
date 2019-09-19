import { Router } from '@angular/router';
import { Component, OnInit , ElementRef, ViewChild} from '@angular/core';
import {MatAutocompleteSelectedEvent, MatAutocomplete} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder, Validator, ValidatorFn, ValidationErrors } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-newpostmeal',
  templateUrl: './newpostmeal.component.html',
  styleUrls: ['./newpostmeal.component.css']
})
export class NewpostmealComponent implements OnInit {

  constructor(private fb: FormBuilder, private toastr: ToastrService, private router: Router) {
    this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
        startWith(null),
        map((fruit: string | null) => fruit ? this._filter(fruit) : this.Fooditems.slice()));
  }
  MealForm = this.fb.group({
    quantity: ['', [Validators.pattern('^(-?)[\d]*$')]],
    servingdate: ['', []],
    reservationdate : ['', []],
    price : ['', []],
    options: ['', [Validators.required]],
    foodchip: ['', []]
  });
  filterValue = '';
  showMsg: Boolean = false;
  visible = true;
  selectable = true;
  radiovar: Boolean = false;
  fooditem1: Boolean = false;
  isprice: Boolean = false;
  iserror1: Boolean = false;
  iserror2: Boolean = false;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  fruitCtrl = new FormControl();
  filteredFruits: Observable<string[]>;
  fruits: string[] = [];

  Fooditems = [
            {
                name: 'Fried Carrot Cake',
                cuisine: 'Chinese',
                description: 'Chinese',
                id: 3
            },
            {
                name: 'Ice Kacang',
                cuisine : 'Chinese',
                description: 'Chinese',
                id: 15
            },
            {
                name: 'Chwee Kueh',
                cuisine: 'Chinese',
                description: 'Chinese',
                id: 16
            },
            {
                name: 'Char Kway Teow',
                cuisine: 'Chinese',
                description: 'Chinese',
                id: 20
            },
            {
                name: 'Chicken Rice',
                cuisine: 'Chinese',
                description: 'Chinese',
                id: 21
            },
            {
                name: 'Curry Puff',
                cuisine: 'Chinese',
                description: 'Chinese',
                id: 22
            }
        ];

        get quantity() {
          return this.MealForm.get('quantity');
        }
        get serveDate() {
          return this.MealForm.get('servingdate');
        }
        get reserveDate() {
          return this.MealForm.get('reservationdate');
        }
       get options() {
          return this.MealForm.get('options');
        }
        get foodchip() {
          return this.MealForm.get('foodchip');
        }
      //  arr = JSON.stringify(this.Fooditems);
  @ViewChild('fruitInput', {static: false}) fruitInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto', {static: false}) matAutocomplete: MatAutocomplete;

  checkquantity(event) {
    console.log(this.MealForm.controls['quantity']);
    console.log(this.MealForm.controls['quantity'].value);
    const qty = event.target.value;
    console.log(event.target.value);

    if (qty >= '1') {
        this.iserror1 = false;
        console.log('if block');
      } else {
        this.iserror1 = true;
        console.log('else block');
      }
  }
  checkoptions(event) {
    console.log(event.target.value);
    const rad = event.target.value;
    if (rad !== '') {
      this.radiovar = false;
      console.log('if block');
    } else {
      this.radiovar = true;
      console.log('else block');
    }
  }
  checkPrice(event) {
    const price = event.target.value;
    console.log(event.target.value);
    if (price !== '' && price >= '1') {
        this.isprice = false;
    } else {
      this.isprice = true;
      console.log('else block');
    }

  }
  /*checkitems(event) {
    let fitem = event.target.value.name;
    console.log(event.options.value.name);
    console.log(this.MealForm.controls['foodchip'].value);
    console.log(fitem);
  }*/
  compareDate() {
    console.log(this.MealForm.controls['reservationdate']);
    const date1 = this.MealForm.controls['reservationdate'];
    const date2 = this.MealForm.controls['servingdate'];
    if (date1.value < date2.value) {
      console.log('reservationdate is greater');
      this.iserror2 = false;

    } else {
      console.log('serving date is greater');
      this.iserror2 = true;
    }
  }
  ngOnInit() {
  }
  /*checkQuant() {
    if (this.MealForm.controls['quantity'].value <= 1 ) {
        this.toastr.error('quantity should be greter than or equal to 1');
    }
  }*/
  add(event: MatChipInputEvent): void {
    // Add fruit only when MatAutocomplete is not open
    // To make sure this does not conflict with OptionSelected Event
    if (!this.matAutocomplete.isOpen) {
      const input = event.input;
      const value = event.value;

      // Add our fruit
      if ((value || '').trim()) {
        this.fruits.push(value.trim());
      }

      // Reset the input value
      if (input) {
        input.value = '';
      }

      this.fruitCtrl.setValue(null);
    }
  }

  remove(fruit: string): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.fruits.push(event.option.viewValue);
    this.fruitInput.nativeElement.value = '';
    this.fruitCtrl.setValue(null);
    console.log(event);
  }

   private _filter(value: string): string[] {
    this.filterValue = value.toLowerCase();

    return this.Fooditems.filter(fruit => fruit.toLowerCase().indexOf(filterValue) === 0);
  }
 checkValid() {
    if (this.MealForm.controls['Quantity'].value === '') {
      this.toastr.error('quantity is missing');
    }
  }
  /*testlogin() {
    this.router.navigate(['/login']);
  }*/
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
   onSubmit() {
     if (this.MealForm.valid) {
      this.router.navigateByUrl('/postmeal');
      this.showMsg = true;
      this.toastr.success('Successfully posted a meal');
      this.router.navigate(['home']);
      console.log('form is valid');

     } else {
       this.showMsg = false;
       console.log('form is not valid');
     }
   }
}
