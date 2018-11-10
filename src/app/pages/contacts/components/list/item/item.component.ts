import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/interfaces/contact.interface';
import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() item: Contact;
  @Output() itemSelect = new EventEmitter();


  constructor() { }

  ngOnInit() {
    
  }

}
