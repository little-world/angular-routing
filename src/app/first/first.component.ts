import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit{

  name = ''

  constructor(private activated: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.name = this.activated.snapshot.params["name"]
  }


}
