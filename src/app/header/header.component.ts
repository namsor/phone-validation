import { Component, OnInit } from '@angular/core';
import { NgLocalization } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  router: any;

  constructor() { }

  ngOnInit() {
  }
fun(){
  window.location.replace("/home");
}
fun2(){
  window.location.replace("/documentation");
}
}
