import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { BreakPoints } from 'src/app/interfaces/break-points';

@Component({
  selector: 'app-definition-page',
  templateUrl: './definition-page.component.html',
  styleUrls: ['./definition-page.component.scss']
})
export class DefinitionPageComponent implements OnInit {

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge,
    ]).subscribe(result => {
      if (result.matches) {
        if (result.breakpoints[Breakpoints.XSmall]) {
          this.cols = this.gridByBreakpoint.xs;
        }
        if (result.breakpoints[Breakpoints.Small]) {
          this.cols = this.gridByBreakpoint.sm;
        }
        if (result.breakpoints[Breakpoints.Medium]) {
          this.cols = this.gridByBreakpoint.md;
        }
        if (result.breakpoints[Breakpoints.Large]) {
          this.cols = this.gridByBreakpoint.lg;
        }
        if (result.breakpoints[Breakpoints.XLarge]) {
          this.cols = this.gridByBreakpoint.xl;
        }
      }
      console.log(this.cols)
    })
  }

  ngOnInit(): void {
  }

  cols: number = 0;
  gridByBreakpoint: BreakPoints = {
    xl: 2,
    lg: 2,
    md: 2,
    sm: 2,
    xs: 1
  };

}
