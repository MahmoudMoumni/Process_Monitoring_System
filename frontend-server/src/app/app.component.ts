import { Component, OnInit } from '@angular/core';
import {filter} from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-app';

  constructor() {

   }

  ngOnInit() {

  }
}