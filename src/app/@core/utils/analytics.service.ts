import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Location } from '@angular/common';

import { filter } from 'rxjs/operator/filter';

declare const ga: any; // ga stands for google analytics

@Injectable()
export class AnalyticsService {
  private enabled: boolean;

  constructor(private location: Location, private router: Router) {
    this.enabled = false; // turn on if need to start the analytics, also add the <script> in index.html to use ga
  }

  trackPageViews() {
    if (this.enabled) {
      filter.call(this.router.events, (event) => event instanceof NavigationEnd)
        .subscribe(() => {
          console.log("hitType:pageView,page:"+this.location.path());
          //ga('send', {hitType: 'pageview', page: this.location.path()})
        });
    }
  }

  trackEvent(eventName: string) {
    if (this.enabled) {
      console.log("event:"+eventName);
      //ga('send', 'event', eventName);
    }
  }
}
