import { Component, OnInit } from '@angular/core';
import { DataTransferService } from './../../services/data-transfer.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private fb: FormBuilder, private service: DataTransferService, private snackBar: MatSnackBar) { }

  searchForm = this.fb.group({
    field :[''],
    val : [''],
  });

  fields = ['recId','age','gender','height','weight','aphi','aplo','cholesterol','gluc','smoke','alco','active','cardio'];

  onDelete(){
    var search = {};
    var key = this.searchForm.value.field;
    var val = this.searchForm.value.val;

    if (key == 'recId' || key == 'quantity' || key == 'age' || key == 'satisfaction'){
      val = parseInt(val,10);
    }
    if (key == 'price'){
      val = parseFloat(val);
    }
    
    search[key]=val;
    this.service.sendDataDelete(search).then(response=>{
      this.snackBar.open("Your sale record(s) has been successfully deleted",null, {
        duration: 2000,
        panelClass: ['green-snackbar']  
      });
    });
  }

  ngOnInit() {
  }

}
