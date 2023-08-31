import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const isDataExist: string | null = localStorage.getItem('definitionDataArray');
    if (isDataExist === null) {
      localStorage.setItem('definitionDataArray', JSON.stringify([]));
    }
  }
}
