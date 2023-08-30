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
          this.rowHeight = this.gridRowHeight.xs;
        }
        if (result.breakpoints[Breakpoints.Small]) {
          this.cols = this.gridByBreakpoint.sm;
          this.rowHeight = this.gridRowHeight.sm;
        }
        if (result.breakpoints[Breakpoints.Medium]) {
          this.cols = this.gridByBreakpoint.md;
          this.rowHeight = this.gridRowHeight.md;
        }
        if (result.breakpoints[Breakpoints.Large]) {
          this.cols = this.gridByBreakpoint.lg;
          this.rowHeight = this.gridRowHeight.lg;
        }
        if (result.breakpoints[Breakpoints.XLarge]) {
          this.cols = this.gridByBreakpoint.xl;
          this.rowHeight = this.gridRowHeight.xl;
        }
      }
      console.log(this.cols)
    })
  }

  ngOnInit(): void {
  }

  cols: number = 0;
  rowHeight: string = '1:1';
  gridByBreakpoint: BreakPoints = {
    xl: 2,
    lg: 2,
    md: 2,
    sm: 2,
    xs: 1
  };

  gridRowHeight = {
    xl: '1:1',
    lg: '2:5',
    md: '2:5',
    sm: '105vh',
    xs: '120vh'
  }

}
