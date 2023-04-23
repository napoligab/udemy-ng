import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.css']
})
export class DisplayDetailsComponent {

  showSecret: boolean = false;
  log = [];

  constructor() { }

  onToggleDetails () {
    this.showSecret = !this.showSecret;
    this.log.push(this.log.length +1);
  }

}
