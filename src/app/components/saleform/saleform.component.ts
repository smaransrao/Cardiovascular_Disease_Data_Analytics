import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {DataTransferService} from './../../services/data-transfer.service';

@Component({
  selector: 'app-saleform',
  templateUrl: './saleform.component.html',
  styleUrls: ['./saleform.component.css']
})
export class SaleformComponent implements OnInit {

  cardioForm = this.fb.group({
    
      recId:[''],
      age:[''],
      gender:[''],
      height:[''],
      weight:[''],
      aphi:[''],
      aplo:[''],
      cholesterol:[''],
      gluc:[''],
      smoke:[''],
      alco:[''],
      active:[''],
      cardio:['']
  });

  gender = ['Male','Female'];
  cholesterol = ['Normal','Above Normal','Well Above Normal'];
  gluc = ['Normal','Above Normal','Well Above Normal'];
  smokes = ['Yes','No'];
  drinks = ['Yes','No'];
  active = ['Yes','No'];
  cardio = ['Yes','No'];


  constructor(private fb: FormBuilder, private snackBar: MatSnackBar, private sendData: DataTransferService) { }

  ngOnInit() {
  }

  
  onSubmit(){
    console.log(this.cardioForm.value);
    console.log(this.cardioForm.status);

    if(this.cardioForm.value.gender == 'Male'){
      this.cardioForm.value.gender = 2;
    }
    if(this.cardioForm.value.gender == 'Female'){
      this.cardioForm.value.gender = 1;
    }
    if(this.cardioForm.value.cholesterol == 'Normal'){
      this.cardioForm.value.cholesterol = 1;
    }
    if(this.cardioForm.value.cholesterol == 'Above Normal'){
      this.cardioForm.value.cholesterol = 2;
    }
    if(this.cardioForm.value.cholesterol == 'Well Above Normal'){
      this.cardioForm.value.cholesterol = 3;
    }
    if(this.cardioForm.value.gluc == 'Normal'){
      this.cardioForm.value.gluc = 1;
    }
    if(this.cardioForm.value.gluc == 'Above Normal'){
      this.cardioForm.value.gluc = 2;
    }
    if(this.cardioForm.value.gluc == 'Well Above Normal'){
      this.cardioForm.value.gluc = 3;
    }
    if(this.cardioForm.value.smoke == 'Yes'){
      this.cardioForm.value.smoke = 1;
    }
    if(this.cardioForm.value.smoke == 'No'){
      this.cardioForm.value.smoke = 0;
    }
    if(this.cardioForm.value.alco == 'Yes'){
      this.cardioForm.value.alco = 1;
    }
    if(this.cardioForm.value.alco == 'No'){
      this.cardioForm.value.alco = 0;
    }
    if(this.cardioForm.value.active == 'Yes'){
      this.cardioForm.value.active = 1;
    }
    if(this.cardioForm.value.active == 'No'){
      this.cardioForm.value.active = 0;
    }
    if(this.cardioForm.value.cardio == 'Yes'){
      this.cardioForm.value.cardio = 1;
    }
    if(this.cardioForm.value.cardio == 'No'){
      this.cardioForm.value.cardio = 0;
    }

    this.cardioForm.value.recId = parseInt(this.cardioForm.value.recId,10);
    this.cardioForm.value.age = parseInt(this.cardioForm.value.age,10);
    this.cardioForm.value.age = this.cardioForm.value.age*365;
    this.cardioForm.value.height = parseInt(this.cardioForm.value.height,10);
    this.cardioForm.value.weight = parseInt(this.cardioForm.value.weight,10);
    this.cardioForm.value.aphi = parseInt(this.cardioForm.value.aphi,10);
    this.cardioForm.value.aplo = parseInt(this.cardioForm.value.aplo,10);

    if(this.cardioForm.invalid)
    {
      this.snackBar.open("Please enter all required fields",null, {
        duration: 2000,
        panelClass: ['red-snackbar']
      });
    }
    else
    {
      this.sendData.sendDataInsert(this.cardioForm.value).then(response=>{
        this.snackBar.open("Your details have been successfully submitted and registered",null, {
          duration: 2000,
          panelClass: ['green-snackbar']  
        });
      })
    }
  }

}
