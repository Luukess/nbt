import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-desktop-nav',
  templateUrl: './desktop-nav.component.html',
  styleUrls: ['./desktop-nav.component.scss']
})
export class DesktopNavComponent implements OnInit {

  constructor() { }

  // navLinks: Array<string> = ['definition', 'choose products', 'exclude products', 'bonus products', 'products products', 'choose clients', 'exclude clients', 'clients limits', 'summary'];

  navLinks = [{ link: '/definition', linkName: 'definition' }, { link: '/choose-products', linkName: 'choose products' }, { link: '/exclude-products', linkName: 'exclude products' }, { link: '', linkName: 'bonus products' }, { link: '', linkName: 'products products' }, { link: '/choose-clients', linkName: 'choose clients' }, { link: '/exclude-clients', linkName: 'exclude clients' }, { link: '/clients-limits', linkName: 'clients limits' }, { link: 'summary', linkName: 'summary' },];

  ngOnInit(): void {
  }

}
