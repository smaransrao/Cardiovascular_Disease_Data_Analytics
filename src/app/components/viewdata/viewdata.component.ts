import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewdata',
  templateUrl: './viewdata.component.html',
  styleUrls: ['./viewdata.component.css']
})
export class ViewdataComponent implements OnInit {

  constructor(private fb: FormBuilder, private router: Router) { }

  found: any[];

  searchForm = this.fb.group({
    field :[''],
    val : ['']
  })
  
  
  fields = ['recId','age','gender','height','weight','aphi','aplo','cholesterol','gluc','smoke','alco','active','cardio'];

  onSpecific(){

    var key = this.searchForm.value.field;
    var val = this.searchForm.value.val;

    this.router.navigate(['specific',key,val]);
  }

  onAll(){
    this.router.navigate(['viewAll']);
  }

  ngOnInit() {
  }

}
