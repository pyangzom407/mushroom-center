import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  slides: any = [
    '/assets/images/slide-m.jpg',
    '/assets/images/slide-m2.jpg',
    '/assets/images/slide-m3.jpg',
    '/assets/images/slide-m5.jpg',

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
