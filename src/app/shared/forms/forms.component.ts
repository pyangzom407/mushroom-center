import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
})

 export class FormsComponent implements OnInit {
  address = new FormControl('');

  constructor() { }

  ngOnInit(): void {
  }

  updatedAddress() {
    this.address.setValue('Pema');
  }
}
