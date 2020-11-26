import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataTransferService } from './../../services/data-transfer.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private fb: FormBuilder, private router: Router, private service: DataTransferService, private snackBar: MatSnackBar) { }

  
  searchForm = this.fb.group({
    field :[''],
    val : [''],
    fieldUpdated:[''],
    newValue:['']
  })

  fields = ['recId','age','gender','height','weight','aphi','aplo','cholesterol','gluc','smoke','alco','active','cardio'];


  onUpdate(){
    var data = [];
    var search = {};
    var updateQuery = {};
    var skey = this.searchForm.value.field;
    var sval = this.searchForm.value.val;
    var ukey = this.searchForm.value.fieldUpdated;
    var uval = this.searchForm.value.newValue;
    
      sval = parseInt(sval,10);
    
      uval = parseInt(uval,10);
    
    search[skey] = sval;
    updateQuery[ukey] = uval;
    data[0] = search;
    data[1] = updateQuery;
    console.log(data);
    this.service.sendDataUpdate(data).then(response=>{
      this.snackBar.open("Your record has been successfully updated",null, {
        duration: 2000,
        panelClass: ['green-snackbar']  
      });
    });
  }

  ngOnInit() {
  }

}
