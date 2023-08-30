import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Navlinks } from 'src/app/interfaces/navlinks';
import { NavstateService } from 'src/app/services/navstate.service';

@Component({
    selector: 'app-desktop-nav',
    templateUrl: './desktop-nav.component.html',
    styleUrls: ['./desktop-nav.component.scss']
})
export class DesktopNavComponent implements OnInit {

    currentUrl: string = '/definition';
    currentNavState: boolean = false;

    constructor(private router: Router, private _navState: NavstateService) {
        this.handleCurrentUrl()
        this._navState.currentIsAccessState().subscribe(result => {
            this.currentNavState = result;
        });
    };

    ngOnInit(): void {
    };

    navLinks: Array<Navlinks> = [{ link: '/definition', linkName: 'definition' }, { link: '/choose-products', linkName: 'choose products' }, { link: '/exclude-products', linkName: 'exclude products' }, { link: '/bonus-products', linkName: 'bonus products' }, { link: '/products-limits', linkName: 'products limits' }, { link: '/choose-clients', linkName: 'choose clients' }, { link: '/exclude-clients', linkName: 'exclude clients' }, { link: '/clients-limits', linkName: 'clients limits' }, { link: '/summary', linkName: 'summary' },];

    handleCurrentUrl() {
        this.router.events.subscribe(
            (event: any) => {
                if (event instanceof NavigationEnd) {
                    this.currentUrl = event.url
                }
            }
        )
    };

}
