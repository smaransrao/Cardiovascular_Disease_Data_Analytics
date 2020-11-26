import { Component, OnInit } from '@angular/core';
import { DataTransferService } from './../../services/data-transfer.service';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})
export class ViewAllComponent implements OnInit {

  found: any[];

  constructor(private service: DataTransferService) { }

  ngOnInit() {
    this.service.getAllData().then(response =>{
      console.log(response);
      this.found = response as any[];
    })
  }

}
