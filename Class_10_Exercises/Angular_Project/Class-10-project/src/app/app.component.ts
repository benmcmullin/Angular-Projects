import { Component, Input } from '@angular/core';
const name: string = "Ben"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  name = `${name}`;

}
