import { Component, OnInit } from '@angular/core';
import { sortTypes } from '../../../../../enums/sortType.enum'
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'sort-input',
  templateUrl: './sort-input.component.html',
  styleUrls: ['./sort-input.component.scss']
})
export class SortInputComponent implements OnInit {

  @Output() changeSort = new EventEmitter();


  constructor() { }

  public sortTypes = sortTypes;
  public sortType: string = 'name';
  public direction: string = "ASC";

  ngOnInit() {

  }

  sortTypesKeys(): Array<string> {
    const keys = Object.keys(this.sortTypes);
    return keys.slice(keys.length / 2);
  }

  onChange(val) {
    const sortType = this.getSortTypeByValue(this.sortTypes[val])
    this.sendDirections({ type: sortType, direction: this.direction })
    this.sortType = sortType;
  }

  getSortTypeByValue(type) {
    if (type == 'Name') return 'name';
    if (type == 'Company') return 'companyName';
    if (type == 'Updated') return 'lastUpdated';
  }

  toggleDirection() {
    const dir = this.direction == 'ASC' ? 'DEC' : 'ASC';
    this.sendDirections({ type: this.sortType, direction: dir })
    this.direction = dir;
  }

  sendDirections(object) {
    this.changeSort.emit(object);
  }

}
