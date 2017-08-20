import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.less']
})
export class NavComponent implements OnInit {

  public navLinks;
  public activeLinkIndex;

  constructor(private router: Router) {
    // links equivalent to registered route paths
    this.navLinks = [
      { label: 'Vehicles', link: 'vehicles'},
      { label: 'Makers', link: 'makers'}
    ];
  }

  ngOnInit() {
  }

}
