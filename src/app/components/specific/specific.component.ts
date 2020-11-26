import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataTransferService } from './../../services/data-transfer.service';

@Component({
  selector: 'app-specific',
  templateUrl: './specific.component.html',
  styleUrls: ['./specific.component.css']
})
export class SpecificComponent implements OnInit {

  found: any[];
  searchKey: any;
  searchValue: any;
  disp: boolean;

  constructor(private service: DataTransferService, private activatedRoute: ActivatedRoute, private router: Router) {
    console.log("here");
    this.activatedRoute.params.subscribe(params => console.log(params));
    this.searchKey = this.activatedRoute.snapshot.params['key'];
    this.searchValue = this.activatedRoute.snapshot.params['val'];
   }

  ngOnInit() {
    var search = {};
    var key = this.searchKey;
    var val = this.searchValue;
    val = parseInt(val,10);
    search[key]=val;
    this.service.sendDataFindSpecific(search).then(response=>{
      this.found = response as any[];
      console.log(this.found);
      if(this.found.length!=0){
        this.disp = true;
      }
      else{
        this.disp = false;
      }
    });
  }

}


