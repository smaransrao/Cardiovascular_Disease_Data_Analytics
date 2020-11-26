import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  insert(){
    this.router.navigate(['insert']);
  }

  view(){
    this.router.navigate(['find']);
  }

  update(){
    this.router.navigate(['update']);
  }

  delete(){
    this.router.navigate(['delete']);
  }

  onHome(){
    this.router.navigate(['']);
  }
  ngOnInit() {
  }

}
