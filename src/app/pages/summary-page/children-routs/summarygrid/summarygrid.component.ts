import { Component, OnInit } from '@angular/core';
import { DescriptionFormObject } from 'src/app/interfaces/description-form-object';

@Component({
  selector: 'app-summarygrid',
  templateUrl: './summarygrid.component.html',
  styleUrls: ['./summarygrid.component.scss']
})
export class SummarygridComponent implements OnInit {

  constructor() { }

  dataFromStorage: Array<DescriptionFormObject> = [];
  displayedColumns: Array<string> = ['no', 'name', 'actions']

  ngOnInit(): void {
    const storage: any = localStorage.getItem('definitionDataArray');
    const data = JSON.parse(storage);
    this.dataFromStorage = data;
    console.log(this.dataFromStorage)
  }

}
