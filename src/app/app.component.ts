import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
    <img src="assets/img/logo.png" />
  `
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
}
