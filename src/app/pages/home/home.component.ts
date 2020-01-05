import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  scrollTo(menu) {
    const x = document.getElementById(menu);
    x.scrollIntoView({behavior: 'smooth'});
  }
}
