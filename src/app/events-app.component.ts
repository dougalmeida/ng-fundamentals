import { Component } from '@angular/core';

@Component({
  selector: 'events-app',
  template: `
    <nav-bar></nav-bar>
    <h2>Angular course - ng-fundamentals</h2>
    <img src="/assets/images/basic-shield.png" />
    
    <events-list></events-list>
    `
})

export class EventsAppComponent {
  title = 'ng-fundamentals';
}
