import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})

export class ServicesComponent {

  currentName = "Pema Yangzom"
  myBio = { 
    name: 'Yangzom',
    age: 26,
    height: 150,
    Dzongkha: 'Mongar'
  }

  products = ['mushroom1', 'mushroom2']

  addProduct(product:any) {
    this.products.push(product)
  }
   

  offers = [
    {
      offerType: 'Gift',
      subtext: 'Gift for all all customers who buy more than 3 times from our store'
    },
    {
      offerType: 'Special offers',
      subtext: 'Special offers during occasion days'
    },
    {
      offerType: 'Free Dilivery',
      subtext: 'Provide free dilivery within Thimphu'
    },
    {
      offerType: 'Lucky Draw',
      subtext: 'Cusomers who share our post will get chance to win prize'
    },

  ]


}
