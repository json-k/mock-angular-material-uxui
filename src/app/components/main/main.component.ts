import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { LabeledRoute, labeledRoutes } from 'src/app/modules/app-routing.module';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {
  isMobile: boolean = true;
  watcher!: Subscription;
  routes: LabeledRoute[] = labeledRoutes;

  constructor( public breakpointObserver: BreakpointObserver) {

  }

  ngOnDestroy(): void {
    this.watcher.unsubscribe();
  }

  ngOnInit() {
    this.watcher = this.breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.Small, Breakpoints.Medium])
      .subscribe((state: BreakpointState) => {
        this.isMobile = state.matches;
      });
  }

}
