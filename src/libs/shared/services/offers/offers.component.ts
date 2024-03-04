import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

interface OptionsType {
    label: string,
     value: string
}

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent {

  @Input() myName : any;
  @Input() obj : any;
  @Output() dataEvent = new EventEmitter<string>()

  addProduct(value:any) {
    this.dataEvent.emit(value)

  }

  options: OptionsType[] = [
    { label: 'All', value:'All' },
    { label: 'Gift', value:'Gift' },  
    { label: 'Special Offers', value:'Special Offers' },  
    { label: 'Free Dilivery', value:'Free Dilivery' },
    { label: 'Lucky Draw', value:'Lucky Draw' },
  ]


  ngOnInit(): void {
  }  

}
