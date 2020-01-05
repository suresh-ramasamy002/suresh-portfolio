import { Component, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./../../../scss/component-scss/navbar.scss']
})
export class NavbarComponent implements OnInit {
  public navbarToggle = true;
  public menuSelected = '';
  @Output()
  menuNavigation = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    this.menuSelected = 'home';
  }
  scroll(menu) {
    this.menuSelected = menu;
    this.navbarToggle = true;
    this.menuNavigation.emit(menu);
  }
}
