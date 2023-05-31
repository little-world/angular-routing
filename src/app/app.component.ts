import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routingapp';

  constructor(private router: Router) {
  }

  firstClick() {
    this.router.navigate(['/','first', 'klaas'])
  }
}
