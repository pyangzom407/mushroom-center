import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  navbars: { icon: string, text: string, routeValue: string }[] = [
    {
      icon: 'house',
      text: ' HOME',
      routeValue: ''
    },
    {
      icon: 'category',
      text: 'SERVICES',
      routeValue: '/services'
    },
    {
      icon: 'shop',
      text: 'SHOP',
      routeValue: '/shop'
    },
    { icon: 'tty',
      text: ' CONTACT',
      routeValue: '/contact'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }
  openForm(): void {
  }
}
