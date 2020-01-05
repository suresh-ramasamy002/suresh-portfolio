import { Component, OnInit } from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
import AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'suresh-portfolio';
  constructor(public router: Router) {
  }
  ngOnInit() {
    this.router.navigate(['/home']);
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
    AOS.init({
      duration: 400,
    });
  }
  onActivate(e, outlet){
    outlet.scrollTop = 0;
  }
}
