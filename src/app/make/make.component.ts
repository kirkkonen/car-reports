import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-make',
  templateUrl: './make.component.html',
  styleUrls: ['./make.component.css']
})
export class MakeComponent implements OnInit {

  modellist: Array<any> = [
    {name: '', reports: ''},
    {name: '80', reports: '12'},
    {name: '100', reports: '6'},
    {name: 'A3', reports: '23'},
    {name: 'A4', reports: '34'},
    {name: 'A5', reports: '14'},
    {name: 'A6', reports: '40'},
    {name: 'A7', reports: '19'},
    {name: 'A8', reports: '33'},
    {name: 'Q3', reports: '39'},
    {name: 'Q5', reports: '28'},
    {name: 'Q7', reports: '37'},
  ]

  constructor() { }

  ngOnInit() {
  }

}
