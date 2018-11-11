import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/interfaces/contact.interface';
import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() list: Array<Contact> = [];
  @Output() itemSelected = new EventEmitter();

  public select: any = 0;


  constructor() {

  }

  ngOnInit() {
    this.sort('name', 'ASC')
  }

  toggleSorting(sortObject) {
    this.sort(sortObject.type, sortObject.direction)
  }

  sort(type, direction) {
    if (direction == 'ASC') {
      this.list.sort((a, b) => {
        if (a[type] < b[type])
          return -1;
      });
    } else {
      this.list.sort((a, b) => {
        if (a[type] > b[type])
          return -1;
      });
    }

    this.select = this.list[0].id;
    this.itemSelected.emit(this.list[0].id);
  }
}
