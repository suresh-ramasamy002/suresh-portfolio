import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./../../../scss/component-scss/overview.scss']
})
export class OverviewComponent implements OnInit {
  @Output()
  public menuNavigation = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
  goToAbout() {
    this.menuNavigation.emit('about');
  }
}
