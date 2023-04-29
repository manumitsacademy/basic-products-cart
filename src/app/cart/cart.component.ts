import { Component,Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  @Input() cartItems: any[] = [];
  @Input() total: number = 0;
  @Output() incEvent = new EventEmitter();
  @Output() decEvent = new EventEmitter();
  @Input() inc: any;


  incCount(id:number) {
    this.incEvent.emit(id);
  }

  decCount(id: number) {
    this.decEvent.emit(id);
  }




}
