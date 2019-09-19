import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-newprofile',
  templateUrl: './newprofile.component.html',
  styleUrls: ['./newprofile.component.css']
})
export class NewprofileComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

}
