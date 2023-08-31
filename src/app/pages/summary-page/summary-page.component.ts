import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-summary-page',
  templateUrl: './summary-page.component.html',
  styleUrls: ['./summary-page.component.scss']
})
export class SummaryPageComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  handleRedirectGridChild() {
    this._router.navigate(['/summary/grid']);
  };

}
