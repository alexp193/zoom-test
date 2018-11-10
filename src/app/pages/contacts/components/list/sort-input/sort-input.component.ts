import { Component, OnInit } from '@angular/core';
import { sortTypes } from '../../../../../enums/sortType.enum'
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { debounce } from 'rxjs/internal/operators/debounce';


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
    var keys = Object.keys(this.sortTypes);
    return keys.slice(keys.length / 2);
  }

  selectSortOption(event) {

  }

  onChange(val) {
    this.sortType = this.getSortTypeByValue(this.sortTypes[val])
    this.changeSort.emit({
      type: this.sortType,
      direction: this.direction
    });
  }

  getSortTypeByValue(type) {
    if (type == 'Name') return 'name';
    if (type == 'Company') return 'companyName';
    if (type == 'Updated') return 'lastUpdated';
  }

  toggleDirection() {
    this.direction = this.direction == 'ASC' ? 'DEC' : 'ASC';
    this.changeSort.emit({
      type: this.sortType,
      direction: this.direction
    });
  }

}
