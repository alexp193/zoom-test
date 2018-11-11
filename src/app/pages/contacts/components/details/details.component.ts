import { Component, OnInit } from '@angular/core';
import { Details } from 'src/app/interfaces/details.interface';
import { Input } from '@angular/core';

@Component({
  selector: 'contact-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  @Input() contactDetails: Details;

  constructor() { }

  ngOnInit() {
  }

}
