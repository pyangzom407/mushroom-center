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
    '/assets/images/slide-m.jpg',
    '/assets/images/slide-m5.jpg',
    '/assets/images/slide-m2.jpg',

  ];
  service: any = [
    { label: 'Free Shipping', hint: 'Free on order over $300', icon: 'local_shipping' },
    { label: 'Security Payment', hint: '100% security payment', icon: 'credit_card' },
    { label: '30 Day Return', hint: '30 day money guarantee', icon: 'currency_exchange' },
    { label: '24/7 Support', hint: 'Support every time fast', icon: 'call' },
  ];
  product: any = [
    { categories: 'All Products'},
    { categories: 'Mushrooms'},
    { categories: 'Vegetables'},
    { categories: 'Fruits'},
  ];
  cards: any = [
    {image:'assets/images/mushroom1.png', product_type: 'Mushrooms', title: 'Mushroom', sub_text: 'This mushroom is 100% organic and its good for health', price: '100',},
    {image:'assets/images/onion.png', product_type: 'Vegetables', title: 'Onion', sub_text: 'This mushroom is 100% organic and its good for health', price: '300',},
    {image:'assets/images/apple.png', product_type: 'Fruits', title: 'Apple', sub_text: 'This mushroom is 100% organic and its good for health', price: '200',},
    {image:'assets/images/mushroom2.png', product_type: 'Mushroom', title: 'Mushroom', sub_text: 'This mushroom is 100% organic and its good for health', price: '250',},
    {image:'assets/images/cabages.png', product_type: 'Vegetables', title: 'Cabbages', sub_text: 'This mushroom is 100% organic and its good for health', price: '320',},
    {image:'assets/images/mushroom3.png', product_type: 'Mushrooms', title: 'Mushroom', sub_text: 'This mushroom is 100% organic and its good for health', price: '410',},
    {image:'assets/images/tomato.png', product_type: 'Vegetables', title: 'Tomato', sub_text: 'This mushroom is 100% organic and its good for health', price: '110',},
    {image:'assets/images/orange.png', product_type: 'Fruits', title: 'Orange', sub_text: 'This mushroom is 100% organic and its good for health', price: '220',}

  ]
  ;
  navbars: any = [
    { icon: 'house', text: ' HOME'},
    { icon: 'category', text: ' Services'},
    { icon: 'shop', text: ' Shop'},
    { icon: 'tty', text: ' Contact'},
  ];
  offer: any = [
    { image: 'assets/images/tomato.png', product_status: 'Healthy Vegtables', offer: '20% off', bg_color: 'bg-primary'},
    { image: 'assets/images/apple.png', product_status: 'Fresh Apple', offer: 'Free delivery', bg_color: 'bg_color'},
    { image: 'assets/images/mushroom3.png', product_status: 'Fresh Apple', offer: '25% discount', bg_color: 'bg-light_red'}
  ];
  vegetables: any = [
    {image:'assets/images/cabages.png', product_type: 'Vegetables', title: 'Cabbages', sub_text: 'This mushroom is 100% organic and its good for health', price: '100',},
    {image:'assets/images/mushroom3.png', product_type: 'Mushrooms', title: 'Mushroom', sub_text: 'This mushroom is 100% organic and its good for health', price: '100',},
    {image:'assets/images/tomato.png', product_type: 'Vegetables', title: 'Tomato', sub_text: 'This mushroom is 100% organic and its good for health', price: '100',},
    {image:'assets/images/orange.png', product_type: 'Fruits', title: 'Orange', sub_text: 'This mushroom is 100% organic and its good for health', price: '100',},
  ];

  status: any = [
    { image: 'assets/images/cus-sac.png', product_status: 'SATISFIED CUSTOMERS', rating: '1098'},
    { image: 'assets/images/rating-2.png', product_status: 'QUALITY OF SERVICE', rating: '99%'},
    { image: 'assets/images/caertificate.png', product_status: 'QUALITY CERTIFICATES', rating: '78'},
    { image: 'assets/images/veg-table.png', product_status: 'AVAILABLE PRODUCTS', rating: '998'},
  ];
  feedbacks: any = [
    { client_feedback: 'The product quality is consistently outstanding, exceeding my expectations every time',  person_img: 'assets/images/Pyangzom.png', name:'Pema Yangzom', designation: 'Marketing officer'},
    { client_feedback: 'The product quality is consistently outstanding, exceeding my expectations every time',  person_img: 'assets/images/py.png', name:'Pema Yangzom', designation: 'Website Designer'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
