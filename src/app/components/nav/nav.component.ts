import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() { }

  isVisibleMobileNav: boolean = false;

  handleToggle() {
    if (this.isVisibleMobileNav) {
      this.isVisibleMobileNav = false;
    } else {
      this.isVisibleMobileNav = true;
    }
  }

  ngOnInit(): void {
  }

}
